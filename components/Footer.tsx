"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [globalError, setGlobalError] = useState("");

  return (
    <footer className="sl-light-footer">
      <div className="sl-footer-wrap">
        <div className="sl-footer-top">
          <div className="sl-footer-brand">
            <Link
              className="approved-logo brand"
              href="/"
              aria-label="Sportline Advantage home"
            >
              <img src="/images/logo.svg" alt="Sportline Advantage Logo" style={{ height: '42px', width: 'auto', borderRadius: '4px' }} />
            </Link>
            <p>Performance · Pathways · Partnerships</p>
          </div>

          <div className="sl-footer-links">
            <div>
              <h4>EXPLORE</h4>
              <Link href="/what-we-do">What We Do</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/partner-with-us">Partner With Us</Link>
              <Link href="/insights">Insights</Link>
            </div>

            <div>
              <h4>WHAT WE DO</h4>
              <Link href="/what-we-do#programs">Performance Development</Link>
              <Link href="/what-we-do#pathways">Pathways Program</Link>
              <Link href="/what-we-do#partnerships">Partnerships</Link>
              <Link href="/what-we-do#experiences">Curated Experiences</Link>
            </div>

            <div className="sl-footer-connect">
              <h4>STAY CONNECTED</h4>
              <p>
                Stay connected with Sportline Advantage and the wider sporting
                ecosystem.
              </p>
              <form onSubmit={async (e) => {
                e.preventDefault();
                setEmailError("");
                setSuccess(false);
                setGlobalError("");
                
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email') as string;
                
                if (!email) {
                  setEmailError("Email is required");
                  return;
                } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                  setEmailError("Invalid email format");
                  return;
                }

                setLoading(true);
                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify({ formType: 'Newsletter Subscription', email }),
                  });
                  if (res.ok) {
                    setSuccess(true);
                    (e.target as HTMLFormElement).reset();
                    setTimeout(() => setSuccess(false), 5000);
                  }
                  else setGlobalError('Error subscribing. Please try again.');
                } catch (err) {
                  setGlobalError('Error subscribing. Please try again.');
                } finally {
                  setLoading(false);
                }
              }} noValidate>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <button type="submit" aria-label="Subscribe" disabled={loading}>
                  {loading ? "..." : "→"}
                </button>
              </form>
              <div style={{ marginTop: '8px' }}>
                {emailError && <small style={{ color: 'red' }}>{emailError}</small>}
                {success && <small style={{ color: 'green' }}>Subscribed successfully!</small>}
                {globalError && <small style={{ color: 'red' }}>{globalError}</small>}
              </div>
            </div>
          </div>
        </div>

        <div className="sl-footer-bottom">
          <span>
            © 2026 Sportline Advantage Private Limited · Chennai, India
          </span>
          <span>
            <Link href="#">Privacy Policy</Link> · <Link href="#">Terms</Link> ·{" "}
            <Link href="#">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
