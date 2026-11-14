import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Client-side field validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      newErrors.message = 'Please enter a message (at least 8 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:gourisharathore@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Check if EmailJS environment variables are configured
    const isEmailJSConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      !serviceId.includes('your_id') &&
      !templateId.includes('your_id');

    // Check if Formspree endpoint is configured
    const isFormspreeConfigured =
      formspreeEndpoint && !formspreeEndpoint.includes('your_form_id');

    try {
      if (isEmailJSConfigured) {
        // Send via EmailJS with comprehensive template parameter mapping
        const templateParams = {
          from_name: formData.name.trim(),
          name: formData.name.trim(),
          from_email: formData.email.trim(),
          email: formData.email.trim(),
          reply_to: formData.email.trim(),
          subject: formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`,
          message: formData.message.trim(),
          to_email: 'gourisharathore@gmail.com',
          to_name: 'Gourisha Rathore'
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        setStatus('success');
        setFeedbackMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (isFormspreeConfigured) {
        // Send via Formspree
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFeedbackMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Formspree submission failed');
        }
      } else {
        // Fallback when environment variables are not yet populated
        setStatus('unconfigured');
        setFeedbackMessage(
          'Email service credentials are not yet configured in .env. Click below to open your email client directly with your message pre-filled.'
        );
      }
    } catch (error) {
      console.error('Contact Form Submission Error:', error);
      setStatus('error');
      setFeedbackMessage(
        'Submission encountered an issue. You can click below to send your note directly via your email client to gourisharathore@gmail.com.'
      );
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20 bg-ivory-100/60 border-t border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Contact"
          title="Let's build something exceptional together."
          subtitle="Open for full-time frontend engineering roles, React development, and freelance technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                Reach Out Directly
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Whether you have an opening for a Frontend / MERN Stack Developer, want to discuss a project, or just want to connect—my inbox is always open.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              <a
                href="mailto:gourisharathore@gmail.com"
                className="group p-3.5 rounded-xl bg-white border border-ink-border flex items-center gap-3.5 hover:border-burnt transition-colors shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center shrink-0 group-hover:bg-burnt group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                    Email Address
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-ink truncate group-hover:text-burnt transition-colors">
                    gourisharathore@gmail.com
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted group-hover:text-burnt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="tel:+919893920815"
                className="group p-3.5 rounded-xl bg-white border border-ink-border flex items-center gap-3.5 hover:border-burnt transition-colors shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center shrink-0 group-hover:bg-burnt group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                    Phone & WhatsApp
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-ink truncate group-hover:text-burnt transition-colors">
                    +91 9893920815
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted group-hover:text-burnt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="p-3.5 rounded-xl bg-white border border-ink-border flex items-center gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                    Current Location
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-ink">
                    Gwalior, Madhya Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Strip */}
            <div className="pt-1">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-ink font-semibold mb-2.5">
                Professional Networks:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-white border border-ink-border text-ink hover:border-burnt hover:text-burnt transition-colors shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5 text-burnt" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/gourisha04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-white border border-ink-border text-ink hover:border-burnt hover:text-burnt transition-colors shadow-sm"
                >
                  <Github className="w-3.5 h-3.5 text-burnt" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-ink-border rounded-2xl p-5 sm:p-7 shadow-editorial">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-ink-border/70">
                <MessageSquare className="w-4 h-4 text-burnt" />
                <h4 className="font-display font-bold text-lg text-ink">
                  Send a Direct Message
                </h4>
              </div>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 mb-5">
                  <div className="flex items-center gap-2 font-display font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Message Delivered!</span>
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-800">
                    {feedbackMessage}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-mono font-semibold text-emerald-900 underline pt-1"
                  >
                    Send another note
                  </button>
                </div>
              )}

              {/* Error or Unconfigured Notification */}
              {(status === 'error' || status === 'unconfigured') && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2 mb-5">
                  <div className="flex items-center gap-2 font-display font-bold text-sm">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Notice</span>
                  </div>
                  <p className="text-xs leading-relaxed text-amber-800">
                    {feedbackMessage}
                  </p>
                  <button
                    type="button"
                    onClick={handleDirectMailto}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-colors shadow-sm mt-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client (Pre-filled)</span>
                  </button>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-ink font-semibold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === 'submitting'}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        errors.name ? 'border-red-500 bg-red-50/30' : 'border-ink-border bg-ivory-50'
                      } text-ink text-xs sm:text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-ink font-semibold mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      disabled={status === 'submitting'}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-ink-border bg-ivory-50'
                      } text-ink text-xs sm:text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-ink font-semibold mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    disabled={status === 'submitting'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Full-Stack Role / Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-ink-border bg-ivory-50 text-ink text-xs sm:text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-ink font-semibold mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    disabled={status === 'submitting'}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Write your note, job requirements, or project details..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border ${
                      errors.message ? 'border-red-500 bg-red-50/30' : 'border-ink-border bg-ivory-50'
                    } text-ink text-xs sm:text-sm focus:outline-none focus:border-burnt focus:bg-white transition-colors resize-y disabled:opacity-60 disabled:cursor-not-allowed`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit row */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectMailto}
                    className="text-[11px] font-mono text-ink-muted hover:text-burnt transition-colors text-left sm:text-right"
                  >
                    Or send via default email client →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
