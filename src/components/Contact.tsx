import { useState, type FormEvent } from "react";
import { person } from "../data";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "saved" }
  | { kind: "mail" }
  | { kind: "error"; message: string };

const env = import.meta.env as Record<string, string | undefined>;

async function saveToSupabase(body: { name: string; email: string; message: string }) {
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return false;
  const table = env.VITE_SUPABASE_CONTACT_TABLE || "contact_messages";
  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function Contact({ heading, lead }: { heading: string; lead: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // Hidden field: real people leave it empty.
    if (String(form.get("website") ?? "") !== "") {
      setStatus({ kind: "saved" });
      return;
    }
    const body = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    };
    if (!body.name || !body.email || !body.message) {
      setStatus({ kind: "error", message: "Fill in your name, email and message, then send again." });
      return;
    }

    setStatus({ kind: "sending" });
    if (await saveToSupabase(body)) {
      setStatus({ kind: "saved" });
      e.currentTarget.reset();
      return;
    }

    if (person.email) {
      const subject = encodeURIComponent(`Portfolio message from ${body.name}`);
      const text = encodeURIComponent(`${body.message}\n\n${body.name}\n${body.email}`);
      window.location.href = `mailto:${person.email}?subject=${subject}&body=${text}`;
      setStatus({ kind: "mail" });
      return;
    }

    setStatus({
      kind: "error",
      message: "This form isn't connected to an inbox yet. Reach me on X or Instagram instead.",
    });
  }

  const busy = status.kind === "sending";

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="heading">{heading}</h2>
          <p className="prose-line mt-5 text-muted">{lead}</p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-4" noValidate>
          <label className="grid gap-1.5 font-semibold">
            Your name
            <input className="field font-normal" name="name" autoComplete="name" required />
          </label>
          <label className="grid gap-1.5 font-semibold">
            Your email
            <input className="field font-normal" name="email" type="email" autoComplete="email" required />
          </label>
          <label className="grid gap-1.5 font-semibold">
            What do you need built, or want to ask?
            <textarea className="field font-normal" name="message" rows={5} required />
          </label>
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="btn" disabled={busy}>
              {busy ? "Sending" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {status.kind === "saved" && "Message sent. I read everything and reply within a few days."}
              {status.kind === "mail" && "Your mail app opened with the message ready. Send it from there."}
              {status.kind === "error" && status.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
