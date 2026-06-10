import React, { useEffect } from "react";
import { ArrowLeft, Crown, Mail, Phone, Sparkles } from "lucide-react";

export default function TriredPage() {
  useEffect(() => {
    // Scroll to top when loading this page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="trired-page-container">
      {/* Self-contained styling overrides for the separate Trired Page */}
      <style>{`
        .trired-page-container {
          min-height: 100vh;
          background: radial-gradient(circle at 10% 10%, #5b174f 0%, #211b20 100%);
          color: #fffaf3;
          font-family: Inter, system-ui, -apple-system, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: clamp(24px, 6vw, 64px) 20px;
        }

        .trired-header {
          width: 100%;
          max-width: 800px;
          display: flex;
          justify-content: flex-start;
          margin-bottom: 48px;
        }

        .trired-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(234, 214, 173, 0.25);
          color: #ead6ad;
          padding: 10px 20px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .trired-back-btn:hover {
          background: #ead6ad;
          color: #211b20;
          transform: translateX(-4px);
        }

        .trired-card {
          width: 100%;
          max-width: 680px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(234, 214, 173, 0.15);
          border-radius: 36px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: clamp(24px, 6vw, 48px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .trired-brand-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 24px;
        }

        .trired-brand-logo .gold-crown {
          color: #c79b3b;
          margin-bottom: 12px;
          filter: drop-shadow(0 4px 12px rgba(199, 155, 59, 0.35));
        }

        .trired-brand-logo h1 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: clamp(32px, 5vw, 44px);
          color: #fff;
          font-weight: 400;
        }

        .trired-brand-logo .tagline {
          margin: 8px 0 0;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #ead6ad;
          font-weight: 800;
        }

        .trired-page-divider {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c79b3b, transparent);
          margin-bottom: 32px;
        }

        .trired-body-text {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255, 250, 243, 0.8);
          margin: 0 0 24px;
          text-align: justify;
        }

        .trired-body-text strong {
          color: #ead6ad;
        }

        .trired-body-text a {
          color: #ead6ad;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px dashed rgba(234, 214, 173, 0.5);
        }

        .trired-body-text a:hover {
          color: #fff;
          border-bottom-style: solid;
        }

        .trired-contact-section {
          margin-top: 16px;
          background: rgba(234, 214, 173, 0.05);
          border: 1px solid rgba(234, 214, 173, 0.12);
          border-radius: 28px;
          padding: clamp(20px, 4vw, 32px);
          width: 100%;
        }

        .trired-contact-section h2 {
          margin: 0 0 16px;
          font-family: Georgia, serif;
          font-size: clamp(20px, 4vw, 24px);
          color: #ead6ad;
          font-weight: 400;
        }

        .trired-contact-section p.prompt {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 250, 243, 0.7);
          margin: 0 0 24px;
        }

        .trired-channels {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .trired-channel-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .trired-mail {
          background: linear-gradient(135deg, #5b174f, #8b2d6d);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .trired-mail:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(139, 45, 109, 0.35);
        }

        .trired-wa {
          background: #25D366;
          color: #fff;
        }

        .trired-wa:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(37, 211, 102, 0.35);
        }

        .trired-web {
          background: transparent;
          border: 1px solid rgba(234, 214, 173, 0.4);
          color: #ead6ad;
        }

        .trired-web:hover {
          background: rgba(234, 214, 173, 0.08);
          transform: translateY(-3px);
          border-color: #ead6ad;
        }

        .trired-page-footer {
          margin-top: 48px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="trired-header">
        <a href="#invitation" className="trired-back-btn">
          <ArrowLeft size={16} /> Back to Invitation
        </a>
      </div>

      <main className="trired-card">
        <div className="trired-brand-logo">
          <Crown size={40} className="gold-crown" />
          <h1>Wedding Invites</h1>
          <p className="tagline">Powered by TriRed Global</p>
        </div>

        <div className="trired-page-divider" />

        <p className="trired-body-text">
          <strong>Wedding Invites</strong> (
          <a href="https://weddinginvites.online/" target="_blank" rel="noopener noreferrer">
            weddinginvites.online
          </a>
          ) is a startup project proudly developed and powered by <strong>TriRed Global Venture Studios</strong>.
        </p>

        <p className="trired-body-text">
          We specialize in creating modern digital wedding invitations, event websites, RSVP management systems, and custom online experiences that make celebrations memorable, elegant, and effortless.
        </p>

        <section className="trired-contact-section">
          <h2>Get in Touch</h2>
          <p className="prompt">
            Looking for a similar platform or a custom digital solution for your business or event? Let's build something beautiful together.
          </p>

          <div className="trired-channels">
            <a href="mailto:triredofficial@gmail.com" className="trired-channel-btn trired-mail">
              <Mail size={16} /> Email Us
            </a>
            <a href="https://wa.me/918089954234" target="_blank" rel="noopener noreferrer" className="trired-channel-btn trired-wa">
              <Phone size={16} /> WhatsApp / Call Us
            </a>
            <a href="https://weddinginvites.online/" target="_blank" rel="noopener noreferrer" className="trired-channel-btn trired-web">
              <Sparkles size={16} /> Visit Website
            </a>
          </div>
        </section>
      </main>

      <footer className="trired-page-footer">
        © {new Date().getFullYear()} TriRed Global Venture Studios. All rights reserved.
      </footer>
    </div>
  );
}
