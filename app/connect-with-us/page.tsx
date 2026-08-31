// @ts-nocheck
import React from "react";
import Script from "next/script";
import { getMetadata } from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConnectForm from "@/components/ConnectForm";

export const metadata = getMetadata({
  title: "Connect With Us | Sportline Advantage",
  description: "",
});

export default function Page() {
  return (
    <>
      <Header />
      <main className="connect-with-us-page">
        <section className="hero">
          <div className="wrap wrap-connect">
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
              <div className="eyebrow">CONNECT WITH SPORTLINE</div>
              <h1>
                Let's talk about
                <br />
                <span style={{ color: "var(--orange)" }}>what's next.</span>
              </h1>
              <p>
                Whether you are exploring an opportunity, looking for guidance,
                interested in working together or simply want to start a
                conversation, we're here.
              </p>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="wrap intro-grid">
            <div>
              <div className="label">START WHERE YOU ARE</div>
              <h2>You don't need to have everything figured out.</h2>
            </div>
            <p>
              Tell us what brings you here. We'll make sure the conversation
              starts in the right place—and with the right people.
            </p>
          </div>
        </section>
        <section className="contact-area">
          <div className="wrap contact-grid">
            <aside className="choices">
              <div className="label">WHAT WOULD YOU LIKE TO TALK ABOUT?</div>
              <h3>Choose your starting point.</h3>
              <div className="choice">
                <span>01</span>
                <div>
                  <b>Programs & Workshops</b>
                  <small>
                    Learning, development and relevant sporting conversations.
                  </small>
                </div>
              </div>
              <div className="choice">
                <span>02</span>
                <div>
                  <b>Pathways</b>
                  <small>
                    Exploring what could come next in an athlete's journey.
                  </small>
                </div>
              </div>
              <div className="choice">
                <span>03</span>
                <div>
                  <b>Partnerships</b>
                  <small>
                    Creating opportunities with organisations and institutions.
                  </small>
                </div>
              </div>
              <div className="choice">
                <span>04</span>
                <div>
                  <b>Curated Sporting Experiences</b>
                  <small>
                    Premium, memorable ways to experience sport differently.
                  </small>
                </div>
              </div>
              <div className="choice">
                <span>05</span>
                <div>
                  <b>Something Else</b>
                  <small>
                    Start with your question. We'll take it from there.
                  </small>
                </div>
              </div>
            </aside>
            <div className="form-box">
              <div className="label">SEND US A MESSAGE</div>
              <h3>Tell us what's on your mind.</h3>
              <p>A short message is enough to get the conversation started.</p>
              <ConnectForm />
            </div>
          </div>
        </section>

        <section className="ways">
          <div className="wrap wrap-connect">
            <div className="ways-head">
              <div>
                <div className="label">MORE WAYS TO CONNECT</div>
                <h2>There is more than one way to start.</h2>
              </div>
              <p>
                Choose the conversation that feels most relevant. We can take it
                from there.
              </p>
            </div>
            <div className="way-grid">
              <article className="way">
                <span>FOR ATHLETES & FAMILIES</span>
                <h3>Explore your next step.</h3>
                <p>
                  Talk to us about development, pathways and the opportunities
                  you want to understand.
                </p>
              </article>
              <article className="way">
                <span>FOR ORGANISATIONS</span>
                <h3>Build something together.</h3>
                <p>
                  Explore programs, partnerships, collaborations and new
                  sporting opportunities.
                </p>
              </article>
              <article className="way">
                <span>FOR EVERYONE ELSE</span>
                <h3>Start with a question.</h3>
                <p>
                  If you're not sure where your enquiry fits, just tell us what
                  you're thinking about.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
