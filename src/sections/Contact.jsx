import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare mailto link with encoded content so message is genuinely sent
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:gourisharathore@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory-100/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="08 / GET IN TOUCH"
          title="Let's build something exceptional together."
          subtitle="Open for full-time frontend engineering roles, React development, and freelance technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-2xl text-ink">
                Reach Out Directly
              </h3>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Whether you have an opening for a Frontend / MERN Stack Developer, want to discuss a project, or just want to connect—my inbox is always open.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href="mailto:gourisharathore@gmail.com"
                className="group p-4 rounded-xl bg-white border border-ink-border flex items-center gap-4 hover:border-burnt transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center shrink-0 group-hover:bg-burnt group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono text-ink-muted uppercase tracking-wider">
                    Email Address
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-ink truncate group-hover:text-burnt transition-colors">
                    gourisharathore@gmail.com
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-burnt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="tel:+919893920815"
                className="group p-4 rounded-xl bg-white border border-ink-border flex items-center gap-4 hover:border-burnt transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center shrink-0 group-hover:bg-burnt group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono text-ink-muted uppercase tracking-wider">
                    Phone & WhatsApp
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-ink truncate group-hover:text-burnt transition-colors">
                    +91 9893920815
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-burnt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="p-4 rounded-xl bg-white border border-ink-border flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-ink-muted uppercase tracking-wider">
                    Current Location
                  </span>
                  <span className="block text-sm sm:text-base font-semibold text-ink">
                    Gwalior, Madhya Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Strip */}
            <div className="pt-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-3">
                Professional Networks:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono bg-white border border-ink-border text-ink hover:border-burnt hover:text-burnt transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-burnt" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/gourisha04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono bg-white border border-ink-border text-ink hover:border-burnt hover:text-burnt transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4 text-burnt" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-ink-border rounded-3xl p-6 sm:p-10 shadow-editorial">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-ink-border/70">
                <MessageSquare className="w-5 h-5 text-burnt" />
                <h4 className="font-display font-bold text-xl text-ink">
                  Send a Direct Message
                </h4>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                  <div className="flex items-center gap-2 font-display font-bold text-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Email Client Triggered</span>
                  </div>
                  <p className="text-sm leading-relaxed text-emerald-800">
                    Your default mail application has been opened with your message pre-filled for <strong>gourisharathore@gmail.com</strong>. If your email client did not open automatically, you can write directly to <strong>gourisharathore@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-semibold text-emerald-900 underline pt-2"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl border border-ink-border bg-ivory-50 text-ink text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-ink-border bg-ivory-50 text-ink text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Collaboration / Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-ink-border bg-ivory-50 text-ink text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, job requirements, or project details..."
                      className="w-full px-4 py-3 rounded-xl border border-ink-border bg-ivory-50 text-ink text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  {/* Honest note regarding message delivery */}
                  <div className="text-[11px] font-mono text-ink-muted">
                    * Submitting opens your email application with your note addressed directly to <span className="text-burnt font-semibold">gourisharathore@gmail.com</span>.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
