// @ts-nocheck
import React from "react";
import Script from "next/script";
import { getMetadata } from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";

export const metadata = getMetadata({
  title: "Partner With Us | Sportline Advantage",
  description: "",
});

export default function Page() {
  return (
    <>
      <Header />
      <main className="partner-with-us-page">
        <section className="hero">
          <div className="hero-img"></div>
          <div className="wrap wrap-partner">
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
              <div className="eyebrow">
                FOR BRANDS, BUSINESSES & ORGANISATIONS
              </div>
              <h1>
                Don't just
                <br />
                show up in sport.
                <br />
                <span style={{ color: "var(--orange)" }}>Build something.</span>
              </h1>
              <p>
                Sportline helps organisations turn an objective, an idea or an
                opportunity into something people can genuinely experience,
                participate in and connect with.
              </p>
              <a className="btn" href="/connect-with-us">
                START A CONVERSATION <span>→</span>
              </a>
            </div>
            <div className="hero-side">
              <b>THE STARTING POINT</b>Not a sponsorship inventory. Not a
              predefined package. A conversation about what could be possible.
            </div>
          </div>
        </section>
        <section>
          <div className="wrap wrap-partner">
            <div className="intro">
              <div>
                <div className="label">WHY PARTNER WITH SPORTLINE</div>
                <h2>
                  Because the best opportunities don't begin with a logo
                  placement.
                </h2>
              </div>
              <p>
                They begin with a reason. A business objective. A community you
                want to engage. A group of people you want to bring together. Or
                simply an idea worth exploring through the world of sport.
              </p>
            </div>
            <div className="manifesto">
              <article>
                <b>START WITH PURPOSE</b>
                <p>
                  Find the right role for your organisation before deciding what
                  the activation should look like.
                </p>
              </article>
              <article>
                <b>CONNECT THE RIGHT PIECES</b>
                <p>
                  Sportline operates across people, programs, pathways,
                  communities and sporting opportunities.
                </p>
              </article>
              <article>
                <b>BUILD FOR REAL PARTICIPATION</b>
                <p>
                  Create something people can experience rather than simply
                  something they see.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="statement">
          <div className="wrap wrap-partner">
            <p className="quote">
              A partnership can be <em>a moment.</em>
              <br />
              Or it can become something people remember.
            </p>
            <small>SPORTLINE ADVANTAGE — PARTNER WITH US</small>
          </div>
        </section>
        <section className="possibilities">
          <div className="wrap wrap-partner">
            <div className="top">
              <div>
                <div className="label">WHAT WE COULD BUILD TOGETHER</div>
                <h2>
                  Four directions.
                  <br />
                  Many possibilities.
                </h2>
              </div>
              <p>
                There is no single model for working together. These are simply
                different places where a conversation can begin.
              </p>
            </div>
            <div className="mosaic">
              <article className="tile">
                <div>
                  <h3>Brand-led sporting initiatives</h3>
                  <p>
                    Create an idea with a clear sporting purpose and a
                    meaningful role for your brand.
                  </p>
                </div>
              </article>
              <article className="tile">
                <div>
                  <h3>Corporate & client experiences</h3>
                  <p>
                    Use exceptional sporting settings to host, connect and
                    create memorable moments.
                  </p>
                </div>
              </article>
              <article className="tile">
                <div>
                  <h3>Community engagement</h3>
                  <p>
                    Bring participation and purpose closer to the communities
                    that matter to you.
                  </p>
                </div>
              </article>
              <article className="tile">
                <div>
                  <h3>Strategic collaborations</h3>
                  <p>
                    Bring complementary organisations, people and sporting
                    opportunities into one stronger initiative.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="objective">
          <div className="objective-left">
            <div className="label">YOUR OBJECTIVE COMES FIRST</div>
            <h2>What are you actually trying to move?</h2>
            <p>
              Before talking about formats or deliverables, we start with the
              question behind the brief.
            </p>
          </div>
          <div className="objective-right">
            <div className="objective-row">
              <span>01</span>
              <b>Build stronger brand relevance</b>
              <i>↗</i>
            </div>
            <div className="objective-row">
              <span>02</span>
              <b>Engage clients and stakeholders</b>
              <i>↗</i>
            </div>
            <div className="objective-row">
              <span>03</span>
              <b>Create a community connection</b>
              <i>↗</i>
            </div>
            <div className="objective-row">
              <span>04</span>
              <b>Give teams something to experience</b>
              <i>↗</i>
            </div>
            <div className="objective-row">
              <span>05</span>
              <b>Explore a bigger sporting opportunity</b>
              <i>↗</i>
            </div>
          </div>
        </section>
        <section className="no-menu">
          <div className="wrap wrap-partner">
            <div className="label">HOW WE THINK ABOUT PARTNERSHIP</div>
            <h2>
              There isn't a brochure
              <br />
              with your answer inside.
            </h2>
          </div>
          <div className="no-menu-grid">
            <div className="no-menu-img"></div>
            <div className="no-menu-copy">
              <h3>
                The opportunity should fit the objective. Not the other way
                around.
              </h3>
              <p>
                We use the conversation to understand the context, then explore
                where Sportline's ecosystem, relationships, programs,
                experiences and ideas can create the right direction.
              </p>
              <div className="principles">
                <div>
                  <span>01</span>Understand the context
                </div>
                <div>
                  <span>02</span>Identify the relevant possibilities
                </div>
                <div>
                  <span>03</span>Shape the right opportunity
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process">
          <div className="wrap wrap-partner">
            <div className="process-head">
              <div>
                <div className="label">HOW IT STARTS</div>
                <h2>
                  A simple conversation.
                  <br />A considered direction.
                </h2>
              </div>
              <p>
                You do not need to arrive with a finished brief. Sometimes the
                right starting point is simply knowing what you want to explore.
              </p>
            </div>
            <div className="journey">
              <article>
                <span>01</span>
                <h3>Start the conversation</h3>
                <p>
                  Tell us what is on your mind, even if the idea is still taking
                  shape.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Understand the objective</h3>
                <p>
                  Look at the audience, context and outcome that actually
                  matter.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Explore the possibilities</h3>
                <p>
                  Consider relevant sporting ideas, people, programs or
                  experiences.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Shape what comes next</h3>
                <p>
                  Develop the direction that makes the most sense for everyone
                  involved.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div>
              <div className="eyebrow">START HERE</div>
              <h2>What could we build together?</h2>
              <p>
                If you have a clear brief, bring it. If you have an early idea,
                bring that too. The conversation starts wherever you are.
              </p>
            </div>
            <PartnerForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
