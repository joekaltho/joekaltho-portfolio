import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { submitContactMessage, getSupabaseConfig } from '../lib/supabase';
import { ContactSubmission } from '../types';
import { socialLinks } from '../data/ecosystem';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    type: 'freelance',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const supabaseConfig = getSupabaseConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill out all required fields.');
      setIsSuccess(false);
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const result = await submitContactMessage(formData);
      setIsSuccess(result.success);
      setStatusMessage(result.message);
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          type: 'freelance',
          message: ''
        });
      }
    } catch (err) {
      setIsSuccess(false);
      setStatusMessage('Something went wrong. Please email directly at josephjameskaltho@gmail.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <section className="border-b border-[#1A1D24] pb-12 space-y-4">
        <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
          Direct Line
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Contact & Collaboration
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light">
          Whether you have a freelance software project, an engineering role, or want to discuss KaltrixOS, let's talk.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Send a Message
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Fill out the form below. Messages are routed directly to Joe.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-neutral-300 font-medium block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#141722] border border-[#222838] focus:border-neutral-400 rounded text-neutral-200 placeholder-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-300 font-medium block">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#141722] border border-[#222838] focus:border-neutral-400 rounded text-neutral-200 placeholder-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-300 font-medium block">
                  Inquiry Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'freelance', label: 'Freelance' },
                    { id: 'employment', label: 'Hiring / Role' },
                    { id: 'founder', label: 'Founder Chat' },
                    { id: 'general', label: 'General' }
                  ].map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setFormData({ ...formData, type: type.id as any })}
                      className={`py-2 px-2 text-center rounded border transition-colors cursor-pointer ${
                        formData.type === type.id
                          ? 'bg-white text-black font-semibold border-white'
                          : 'bg-[#141722] text-neutral-400 border-[#222838] hover:text-white'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-300 font-medium block">
                  Project Details or Message *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe your project, timeline, scope, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#141722] border border-[#222838] focus:border-neutral-400 rounded text-neutral-200 placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  className={`p-3 rounded text-xs leading-relaxed ${
                    isSuccess
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800'
                      : 'bg-rose-950/60 text-rose-300 border border-rose-800'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Channels & Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct channels */}
          <div className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Direct Contact
            </span>

            <div className="space-y-3 text-xs">
              <a
                href="mailto:josephjameskaltho@gmail.com"
                className="flex items-start gap-3 p-3 bg-[#131620] border border-[#1E2332] rounded hover:border-[#2C3446] transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Email Address</span>
                  <span className="text-neutral-400">josephjameskaltho@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 bg-[#131620] border border-[#1E2332] rounded">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Primary Location</span>
                  <span className="text-neutral-400">Nigeria · Operating across Global Remote Timezones</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#131620] border border-[#1E2332] rounded">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Response SLA</span>
                  <span className="text-neutral-400">Usually responds within 12 to 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Connected Profiles */}
          <div className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-white block">
              Professional & Social Links
            </span>

            <div className="space-y-2 text-xs">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 bg-[#131620] border border-[#1E2332] hover:border-[#2C3446] rounded transition-colors group"
                >
                  <span className="text-neutral-300 font-medium group-hover:text-white">
                    {link.name}
                  </span>
                  <div className="flex items-center gap-1.5 text-neutral-500 font-mono-code text-[11px] group-hover:text-neutral-300">
                    <span>{link.handle}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
