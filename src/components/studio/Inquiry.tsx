import { useState, type FormEvent } from "react";
import { saveToSupabase } from "../Contact";
import { studio, topics, type Topic } from "../../studioData";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "saved" }
  | { kind: "mail" }
  | { kind: "error"; message: string };

export function Inquiry({ topic, onTopic }: { topic: Topic; onTopic: (t: Topic) => void }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    // Hidden field: real people leave it empty.
    if (get("website") !== "") {
      setStatus({ kind: "saved" });
      return;
    }
    const name = get("name");
    const email = get("email");
    const details = get("details");
    if (!name || !email || !details) {
      setStatus({ kind: "error", message: "Add your name, email and a few lines about the project, then send again." });
      return;
    }
    const extras = [
      ["Company or project", get("company")],
      ["Budget", get("budget")],
      ["Timeline", get("timeline")],
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`);
    const message = [`[Kaltrix Digitals \u00B7 ${topic}]`, details, ...(extras.length ? ["", ...extras] : [])].join("\n");

    setStatus({ kind: "sending" });
    if (await saveToSupabase({ name, email, message })) {
      setStatus({ kind: "saved" });
      formEl.reset();
      return;
    }

    if (studio.email) {
      const subject = encodeURIComponent(`Project inquiry: ${topic} (${name})`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
      setStatus({ kind: "mail" });
      return;
    }

    setStatus({
      kind: "error",
      message: studio.whatsapp
        ? "This form isn't connected to an inbox yet. Message us on WhatsApp instead."
        : "This form isn't connected to an inbox yet. Reach us on X or Instagram instead.",
    });
  }

  const busy = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate aria-label="Project inquiry">
      <fieldset className="grid gap-2">
        <legend className="mono mb-2 text-muted">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <label
              key={t}
              className={
                "cursor-pointer border px-3.5 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 " +
                (topic === t ? "border-ink bg-ink text-surface" : "border-line hover:border-ink")
              }
            >
              <input
                type="radio"
                name="topic"
                value={t}
                checked={topic === t}
                onChange={() => onTopic(t)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold">
          Your name
          <input className="field font-normal" name="name" autoComplete="name" required />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Email
          <input className="field font-normal" name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-semibold">
        Company or project <span className="font-normal text-muted">(optional)</span>
        <input className="field font-normal" name="company" autoComplete="organization" />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold">
          Budget <span className="font-normal text-muted">(optional)</span>
          <input className="field font-normal" name="budget" placeholder="e.g. ₦150,000" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Timeline <span className="font-normal text-muted">(optional)</span>
          <input className="field font-normal" name="timeline" placeholder="e.g. Live by March" />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-semibold">
        What are you building?
        <textarea
          className="field font-normal"
          name="details"
          rows={5}
          required
          placeholder="The business, the problem, and what a working product needs to do."
        />
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
          {busy ? "Sending" : "Send inquiry"}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status.kind === "saved" && "Inquiry received. You'll get a reply by email with next steps."}
          {status.kind === "mail" && "Your mail app opened with the inquiry ready. Send it from there."}
          {status.kind === "error" && status.message}
        </p>
      </div>
    </form>
  );
}
