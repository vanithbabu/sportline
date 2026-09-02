// @ts-nocheck
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Script from "next/script";
import { User, Brain, MapPin, Handshake, Trophy } from "lucide-react";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Page() {
  useEffect(() => {
    (() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));

      const counters = document.querySelectorAll("[data-count]");
      const countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || entry.target.dataset.done) return;
            entry.target.dataset.done = "1";
            const target = Number(entry.target.dataset.count);
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 40));
            const timer = setInterval(() => {
              current = Math.min(target, current + step);
              entry.target.textContent = current + (target === 10 ? "K+" : "+");
              if (current >= target) clearInterval(timer);
            }, 28);
          });
        },
        { threshold: 0.8 },
      );
      counters.forEach((el) => countObserver.observe(el));

    })();
    (() => {
      (function () {
        const root = document.querySelector(".sl-hero-carousel");
        if (!root) return;
        const slides = [...root.querySelectorAll(".sl-slide")],
          dots = [...root.querySelectorAll(".sl-dot")];
        let i = 0,
          timer;
        function show(n) {
          i = (n + slides.length) % slides.length;
          slides.forEach((s, x) => s.classList.toggle("is-active", x === i));
          dots.forEach((d, x) => d.classList.toggle("is-active", x === i));
        }
        function play() {
          clearInterval(timer);
          timer = setInterval(() => show(i + 1), 7000);
        }
        const nextBtn = root.querySelector("[data-next]");
        if (nextBtn) {
          nextBtn.onclick = () => {
            show(i + 1);
            play();
          };
        }
        const prevBtn = root.querySelector("[data-prev]");
        if (prevBtn) {
          prevBtn.onclick = () => {
            show(i - 1);
            play();
          };
        }
        dots.forEach(
          (d, x) =>
          (d.onclick = () => {
            show(x);
            play();
          }),
        );
        root?.addEventListener("mouseenter", () => clearInterval(timer));
        root?.addEventListener("mouseleave", play);
        play();
      })();
    })();
  }, []);

  return (
    <>
      <Seo
        title="Sportline Advantage — Athlete-Centred Ecosystem"
        description="Sportline Advantage connects athletes, coaches, institutions and partners through performance, pathways and partnerships."
      />

      <Header />

      <main className="home-page">
        <section
          className="sl-hero-carousel"
          id="about"
          aria-label="Sportline Advantage highlights"
        >
          <div className="sl-slides">
            {/*  Slide 1: Original Sportline Ecosystem  */}
            <article className="sl-slide sl-slide-ecosystem is-active">
              <section className="hero sl-ecosystem-hero">
                <div className="hero-media"></div>
                <div className="container hero-inner">
                  <div className="hero-copy reveal">
                    <div className="kicker">The right ecosystem.</div>
                    <h1>
                      Every sporting journey deserves the right{" "}
                      <span>ecosystem.</span>
                    </h1>
                    <p>
                      Sportline Advantage connects athletes, coaches, parents,
                      institutions and partners — bringing together the people,
                      opportunities and partnerships that shape sporting
                      excellence.
                    </p>
                    <div className="hero-actions">
                      <Link className="btn btn-orange" href="/what-we-do#pathways">
                        EXPLORE OUR PATHWAYS <b>→</b>
                      </Link>
                      <Link className="btn btn-outline" href="/partner-with-us">
                        PARTNER WITH US <b>→</b>
                      </Link>
                    </div>
                  </div>
                  <div className="hero-ecosystem reveal">
                    <div className="orbit"></div>
                    <div className="athlete-photo">
                      <img
                        src="/images/SL01.jpg"
                        alt="Athlete training on a track"
                      />
                    </div>
                    <div className="center-label">ATHLETE</div>
                    <div className="hero-orbit-wrapper">
                      <div className="node navy n1">
                        <span>
                          <b>♧</b>COACHES
                        </span>
                      </div>
                      <div className="node green n2">
                        <span>
                          <b>⌂</b>CLUBS
                        </span>
                      </div>
                      <div className="node orange n3">
                        <span>
                          <b>♢</b>PARTNERS
                        </span>
                      </div>
                      <div className="node green n4">
                        <span>
                          <b>↗</b>PERFORMANCE
                        </span>
                      </div>
                      <div className="node orange n5">
                        <span>
                          <b>☆</b>ACADEMIES
                        </span>
                      </div>
                      <div className="node green n6">
                        <span>
                          <b>□</b>SCHOOLS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/*  Slide 1  */}
            <article className="sl-slide sl-slide-1">
              <div className="sl-bg sl-bg-1"></div>
              <div className="sl-overlay"></div>
              <div className="sl-content">
                <div className="sl-left">
                  <h1>
                    WHAT'S
                    <br />
                    <span>NEXT?</span>
                  </h1>
                  <div className="sl-line"></div>
                  <p className="sl-intro">
                    Every athlete asks the same question.
                    <br />
                    The difference is who helps you find the answer.
                  </p>

                  <div className="sl-question-row">
                    <div className="sl-question">
                      <div className="sl-icon">⌂</div>
                      <span>
                        What's next
                        <br />
                        after school?
                      </span>
                    </div>
                    <div className="sl-question">
                      <div className="sl-icon">♕</div>
                      <span>
                        What's next
                        <br />
                        after this competition?
                      </span>
                    </div>
                    <div className="sl-question">
                      <div className="sl-icon">↗</div>
                      <span>
                        What's next
                        <br />
                        if I want to reach
                        <br />
                        the next level?
                      </span>
                    </div>
                    <div className="sl-question">
                      <div className="sl-icon">◯</div>
                      <span>
                        What's next
                        <br />
                        if I want to build
                        <br />a career in sport?
                      </span>
                    </div>
                  </div>
                  <Link href="/what-we-do#pathways" className="btn btn-orange">
                    EXPLORE WHAT'S NEXT <b>→</b>
                  </Link>
                </div>
              </div>
              

              

<div className="sl-arc sl-arc-right"></div>
            </article>

            {/*  Slide 2  */}
            <article className="sl-slide sl-slide-2">
              <div className="sl-bg sl-bg-2"></div>
              <div className="sl-overlay"></div>
              <div className="sl-content">
                <div className="sl-left sl-copy-right">
                  <h1>
                    YOU DON'T NEED
                    <br />
                    ANOTHER <span className="green">MOTIVATIONAL QUOTE.</span>
                  </h1>
                  <div className="sl-line green-line"></div>
                  <p className="sl-intro">You already hear it everywhere.</p>

                  <div className="sl-motivation">
                    <span>✓ &nbsp; Work harder.</span>
                    <span>✓ &nbsp; Never give up.</span>
                    <span>✓ &nbsp; Believe in yourself.</span>
                  </div>

                  <p className="sl-intro sl-clarity">
                    What you really need is clarity.
                  </p>
                  <div className="sl-need-row">
                    <div>
                      <b>⌁</b> What should
                      <br />I do next?
                    </div>
                    <div>
                      <b>♧</b> Who can
                      <br />
                      help me?
                    </div>
                    <div>
                      <b>⌖</b> Where is the
                      <br />
                      opportunity?
                    </div>
                    <div>
                      <b>↗</b> How do I move
                      <br />
                      forward?
                    </div>
                  </div>
                  <Link href="/what-we-do#pathways" className="btn btn-outline outline-green">
                    FIND YOUR DIRECTION <b>→</b>
                  </Link>
                </div>
              </div>
              <div className="sl-arc sl-arc-left"></div>
            </article>

            {/*  Slide 3  */}
            <article className="sl-slide sl-slide-3">
              <div className="sl-bg sl-bg-3"></div>
              <div className="sl-light-overlay"></div>
              <div className="sl-content">
                <div className="sl-left sl-dark-copy">
                  <h1>
                    YOU BRING
                    <br />
                    THE <span>AMBITION.</span>
                  </h1>
                  <div className="sl-line orange-line"></div>

                  <div className="sl-journey-row">
                    <div>
                      <b>♧</b>
                      <span>
                        Every athlete
                        <br />
                        starts somewhere.
                      </span>
                    </div>
                    <i>›</i>
                    <div>
                      <b>♧</b>
                      <span>The right coach.</span>
                    </div>
                    <i>›</i>
                    <div>
                      <b>⚑</b>
                      <span>The right pathway.</span>
                    </div>
                    <i>›</i>
                    <div>
                      <b>⌘</b>
                      <span>The right people.</span>
                    </div>
                    <i>›</i>
                    <div>
                      <b>☆</b>
                      <span>
                        The right
                        <br />
                        opportunity.
                      </span>
                    </div>
                  </div>

                  <p className="sl-body-dark">
                    Sportline brings those pieces together.
                    <br />
                    You stay at the centre. We create the connections that move
                    you forward.
                  </p>
                  <Link href="/what-we-do#pathways" className="btn navy">
                    START YOUR JOURNEY <b>→</b>
                  </Link>
                </div>
                <div className="sl-closing">
                  <strong>Every journey is different.</strong>
                  <br />
                  <span>But every journey has a next step.</span>
                </div>
              </div>
            </article>
            {/*  Slide 5: Premium Curated Experiences  */}
            <article className="sl-slide sl-slide-5">
              
              <div className="sl-bg sl-bg-5"></div>
              <div className="sl-overlay sl-premium-overlay"></div>
              <div className="sl-content">
                <div className="sl-left sl-premium-copy">
                  <div className="sl-premium-kicker">CURATED EXPERIENCES</div>
                  <h1>
                    Premium. Curated.
                    <br />
                    <span>Unforgettable.</span>
                  </h1>
                  <div className="sl-line"></div>
                  <p className="sl-intro">
                    Extraordinary sporting experiences, curated with care.
                    Moments that stay with you forever.
                  </p>
                  <Link href="/what-we-do#experiences" className="btn btn-orange">
                    EXPLORE EXPERIENCES <b>→</b>
                  </Link>
                </div>
              </div>
              

              <div className="sl-premium-footer">
                <div className="sl-footer-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eebf6d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20M4 16l2-8 4 4 2-8 2 8 4-4 2 8z"/>
                  </svg>
                  <span>PREMIUM ACCESS</span>
                </div>
                <div className="sl-footer-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eebf6d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 8l10 14L22 8M2 8h20M2 8l4-6h12l4 6M12 22v-14M6 2L12 8l6-6"/>
                  </svg>
                  <span>CURATED EXPERIENCES</span>
                </div>
                <div className="sl-footer-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eebf6d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>
                  </svg>
                  <span>PERSONAL CONCIERGE</span>
                </div>
                <div className="sl-footer-item">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eebf6d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>MEMORIES THAT LAST</span>
                </div>
              </div>

<div className="sl-arc sl-arc-right"></div>
            </article>
          </div>

          <div className="sl-controls">
            <div className="sl-dots">
              <button
                className="sl-dot is-active"
                aria-label="Show Sportline Ecosystem"
              ></button>
              <button className="sl-dot" aria-label="Show What's Next"></button>
              <button
                className="sl-dot"
                aria-label="Show Find Your Direction"
              ></button>
              <button
                className="sl-dot"
                aria-label="Show You Bring the Ambition"
              ></button>
              <button
                className="sl-dot"
                aria-label="Show Premium Curated Experiences"
              ></button>
            </div>
          </div>
        </section>



        <section className="ecosystem" id="partnerships">
          <div className="container">
            <div className="eco-grid">
              <div className="eco-copy reveal">
                <div className="kicker" style={{ color: "var(--green)" }}>
                  The Sportline Advantage Model
                </div>
                <h2>The Ecosystem Around Every Athlete</h2>
                <p>
                  No athlete succeeds alone. Meaningful development happens when
                  the right people, organisations and opportunities work
                  together around a shared purpose.
                </p>
                <Link
                  className="btn btn-outline-dark"
                  href="/what-we-do"
                >
                  SEE HOW IT WORKS <span className="arrow">→</span>
                </Link>
              </div>
              <div className="eco-visual reveal">
                <div className="eco-ring"></div>
                <div className="eco-center">
                  <img src="/images/SL01.jpg" alt="Athlete" />
                  <div className="eco-center-badge">
                    <User className="badge-icon" size={36} strokeWidth={2.5} />
                    <span className="badge-text">ATHLETE<br />AT THE CENTRE</span>
                  </div>
                </div>
                <div className="eco-node en1 navy-bg">
                  <Brain className="eco-icon" size={40} strokeWidth={2} color="#fff" />
                  <div className="eco-label label-left">
                    <strong>PERFORMANCE</strong>
                    <div className="line navy-line"></div>
                    <p>Helping athletes perform at their best.</p>
                  </div>
                </div>
                <div className="eco-node en2 green-bg">
                  <MapPin className="eco-icon" size={40} strokeWidth={2} color="#fff" />
                  <div className="eco-label label-right">
                    <strong>PATHWAYS</strong>
                    <div className="line green-line"></div>
                    <p>Creating access to new opportunities.</p>
                  </div>
                </div>
                <div className="eco-node en3 saffron-bg">
                  <Handshake className="eco-icon" size={40} strokeWidth={2} color="#fff" />
                  <div className="eco-label label-left">
                    <strong>PARTNERSHIPS</strong>
                    <div className="line saffron-line"></div>
                    <p>Connecting people, organisations and markets.</p>
                  </div>
                </div>
                <div className="eco-node en4 saffron-bg">
                  <Trophy className="eco-icon" size={40} strokeWidth={2} color="#fff" />
                  <div className="eco-label label-right">
                    <strong>SPORTING EXPERIENCES</strong>
                    <div className="line saffron-line"></div>
                    <p>Bringing the power of sport to organisations.</p>
                  </div>
                </div>
                <div className="eco-dot dot-top navy-bg"></div>
                <div className="eco-dot dot-bottom saffron-bg"></div>
                <div className="eco-dot dot-left navy-bg"></div>
                <div className="eco-dot dot-right green-bg"></div>
              </div>
            </div>
            <div className="eco-features">
              <div className="eco-feature">
                <h3>◎ Athlete-Centred</h3>
                <p>
                  Every decision begins with the needs, aspirations and
                  wellbeing of the athlete.
                </p>
              </div>
              <div className="eco-feature">
                <h3>♧ Connected</h3>
                <p>
                  Breaking down silos and building stronger relationships across
                  the sporting ecosystem.
                </p>
              </div>
              <div className="eco-feature">
                <h3>♢ Collaborative</h3>
                <p>
                  Creating opportunities through shared expertise, resources and
                  partnerships.
                </p>
              </div>
              <div className="eco-feature">
                <h3>⌁ Sustainable</h3>
                <p>
                  Supporting long-term development that extends beyond sport.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="solutions" id="solutions">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="kicker" style={{ color: "var(--green)" }}>
                  Our Solutions
                </div>
                <h2>
                  Turning Strategy
                  <br />
                  Into Opportunity
                </h2>
              </div>
              <p>
                We design and deliver athlete-centred solutions that connect
                people, organisations and opportunities across the sporting
                ecosystem.
              </p>
            </div>
            <div className="solution-grid">
              <article className="solution reveal">
                <div className="solution-media">
                  <img
                    src="/images/image_1ced128c.jpg"
                    alt="Athlete development and strength training"
                  />
                  <span
                    className="solution-number"
                    style={{ background: "var(--navy)" }}
                  >
                    01
                  </span>
                </div>
                <div className="solution-body">
                  <span className="solution-icon">♙</span>
                  <h3>Performance Development</h3>
                  <p>
                    Supporting athletes through education, wellbeing, mentoring,
                    leadership and personal development opportunities.
                  </p>
                  <Link href="/what-we-do#programs">
                    LEARN MORE <span className="arrow">→</span>
                  </Link>
                </div>
              </article>

              <article className="solution reveal">
                <div className="solution-media">
                  <img
                    src="/images/image_dc6c8fb3.jpg"
                    alt="Athlete running on a track"
                  />
                  <span
                    className="solution-number"
                    style={{ background: "var(--green)" }}
                  >
                    02
                  </span>
                </div>
                <div className="solution-body">
                  <span className="solution-icon">⌁</span>
                  <h3>Pathways Program</h3>
                  <p>
                    Designing structured pathways that help athletes discover
                    opportunities, develop capabilities and progress toward
                    their goals.
                  </p>
                  <Link href="/what-we-do#pathways">
                    LEARN MORE <span className="arrow">→</span>
                  </Link>
                </div>
              </article>

              <article className="solution reveal">
                <div className="solution-media">
                  <img
                    src="/images/image_50f40a3e.jpg"
                    alt="Sports partnership meeting"
                  />
                  <span
                    className="solution-number"
                    style={{ background: "var(--saffron)", color: "#111" }}
                  >
                    03
                  </span>
                </div>
                <div className="solution-body">
                  <span className="solution-icon">♢</span>
                  <h3>Partnership</h3>
                  <p>
                    Building meaningful connections between schools, clubs,
                    academies, governing bodies and commercial partners.
                  </p>
                  <Link href="/what-we-do#partnerships">
                    LEARN MORE <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
              <article className="solution reveal">
                <div className="solution-media">
                  <img
                    src="/images/SL0.jpg"
                    alt="Sports analytics and technology dashboard"
                  />
                  <span
                    className="solution-number"
                    style={{ background: "#07184e" }}
                  >
                    04
                  </span>
                </div>
                <div className="solution-body">
                  <span className="solution-icon">▣</span>
                  <h3>Curated Sporting Experience</h3>
                  <p>
                    Leveraging technology and innovation to enhance decision
                    making, communication and performance outcomes.
                  </p>
                  <Link href="/what-we-do#experiences">
                    LEARN MORE <span className="arrow">→</span>
                  </Link>
                </div>
              </article>


            </div>
          </div>
        </section>

        <section className="grid-section">
          <div className="container">
            <div className="grid-panel reveal">
              <div className="grid-copy">
                <div className="kicker">GRID by Sportline Advantage</div>
                <h2>The ecosystem, made intelligent.</h2>
                <p>
                  GRID turns scattered sporting activity into insight that is
                  visible, trusted and connected, so every stakeholder can make
                  better decisions.
                </p>
                <div className="grid-features">
                  <div className="grid-feature">
                    <strong>♙ Athlete Identity & Records</strong>
                    <p>A verified, lifelong profile.</p>
                  </div>
                  <div className="grid-feature">
                    <strong>♜ Dashboards & Insights</strong>
                    <p>Clear views for stakeholders.</p>
                  </div>
                  <div className="grid-feature">
                    <strong>♧ Opportunity Mapping</strong>
                    <p>Connecting talent to pathways.</p>
                  </div>
                </div>
                <br />
                <a className="btn btn-orange" href="#">
                  DISCOVER GRID <span className="arrow">→</span>
                </a>
              </div>
              <div className="dashboard">
                <div className="dashboard-window">
                  <div className="chart" >
                    <img src="/images/SL.jpg" alt="Dashboard Chart" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-about-logo" id="about-us">
          <div className="sl-about-wrap">
            <div className="sl-about-head">
              <div className="sl-about-kicker">ABOUT SPORTLINE ADVANTAGE</div>
              <h2>
                Sport is bigger than
                <br />
                <span>the athlete alone.</span>
              </h2>
              <p>
                Every sporting journey is shaped by more than talent. It is
                shaped by the people, guidance, opportunities and connections
                around the athlete. That is the idea behind Sportline Advantage
                — and the story behind our mark.
              </p>
            </div>

            <div className="sl-logo-story-grid">
              <div className="sl-logo-stage">
                <div className="sl-logo-orbit sl-orbit-one"></div>
                <div className="sl-logo-orbit sl-orbit-two"></div>
                <div
                  className="sl-logo-mark"
                  aria-label="Sportline Advantage logo story"
                >
                  <div className="sl-mark-dot navy"></div>
                  <div className="sl-mark-dot saffron"></div>
                  <div className="sl-mark-dot saffron"></div>
                  <div className="sl-mark-dot green"></div>
                  <div className="sl-mark-centre"></div>
                  <div className="sl-mark-dot saffron"></div>
                  <div className="sl-mark-dot green"></div>
                  <div className="sl-mark-dot green"></div>
                  <div className="sl-mark-dot navy"></div>
                </div>
              </div>

              <div className="sl-logo-story-copy">
                <div className="sl-story-block">
                  <span className="sl-story-no">01</span>
                  <div>
                    <h3>The athlete at the centre</h3>
                    <p>
                      The centre represents the athlete. Everything starts with
                      their ambition, potential and journey.
                    </p>
                  </div>
                </div>

                <div className="sl-story-block">
                  <span className="sl-story-no saffron-bg">02</span>
                  <div>
                    <h3>The ecosystem around them</h3>
                    <p>
                      The surrounding elements represent the people and
                      organisations that help shape that journey — coaches,
                      schools, clubs, academies, partners and the wider sporting
                      ecosystem.
                    </p>
                  </div>
                </div>

                <div className="sl-story-block">
                  <span className="sl-story-no green-bg">03</span>
                  <div>
                    <h3>Always moving forward</h3>
                    <p>
                      The open centre reflects movement and possibility. Every
                      athlete has a different journey, but every journey has a
                      next step.
                    </p>
                  </div>
                </div>

                <div className="sl-about-tagline">
                  <span>PERFORMANCE</span>
                  <i>•</i>
                  <span>PATHWAYS</span>
                  <i>•</i>
                  <span>PARTNERSHIPS</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-panel reveal">
              <div>
                <div className="kicker">Collaborate</div>
                <h2>Let's build the future of sport together.</h2>
                <p>
                  Whether you are a school, academy, federation, sponsor, CSR
                  partner, coach, parent or international institution —
                  Sportline Advantage is built for collaboration.
                </p>
                <div className="cta-actions">
                  <Link className="btn btn-orange" href="/connect-with-us">
                    START A CONVERSATION <span className="arrow">→</span>
                  </Link>
                  <Link className="btn btn-outline" href="/about-us">
                    LEARN ABOUT US <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-insights" id="insights">
          <div className="sl-insights-wrap">
            <div className="sl-insights-head">
              <div>
                <div className="sl-insights-kicker">INSIGHTS</div>
                <h2>
                  Stories from the
                  <br />
                  <span>world of sport.</span>
                </h2>
              </div>
              <p>
                Conversations, ideas and perspectives from the people shaping
                sport today.
              </p>
            </div>

            <div className="sl-insights-grid">
              <article className="sl-insight-card">
                <div className="sl-card-visual podcast-one">
                  <span className="sl-card-label">PODCAST</span>
                  <div className="sl-play">▶</div>
                </div>
                <div className="sl-card-body">
                  <div className="sl-card-type">SPORTLINE CONVERSATIONS</div>
                  <h3>The inner game, with a national coach</h3>
                  <p>
                    A conversation about pressure, preparation and what
                    performance really demands.
                  </p>
                  <a href="/connect-with-us">COMING SOON</a>
                </div>
              </article>

              <article className="sl-insight-card">
                <div className="sl-card-visual podcast-two">
                  <span className="sl-card-label">PODCAST</span>
                  <div className="sl-play">▶</div>
                </div>
                <div className="sl-card-body">
                  <div className="sl-card-type">SPORTLINE CONVERSATIONS</div>
                  <h3>Beyond the scoreboard</h3>
                  <p>
                    What young athletes need from the people and systems around
                    them.
                  </p>
                  <a href="/connect-with-us">COMING SOON</a>
                </div>
              </article>

              <article className="sl-insight-card">
                <div className="sl-card-visual industry-one">
                  <span className="sl-card-label">INDUSTRY</span>
                </div>
                <div className="sl-card-body">
                  <div className="sl-card-type">INDUSTRY NEWS</div>
                  <h3>Why talent is only the beginning</h3>
                  <p>
                    The support systems and opportunities that help potential
                    turn into progress.
                  </p>
                  <a href="/connect-with-us">COMING SOON</a>
                </div>
              </article>

              <article className="sl-insight-card">
                <div className="sl-card-visual industry-two">
                  <span className="sl-card-label">PERSPECTIVE</span>
                </div>
                <div className="sl-card-body">
                  <div className="sl-card-type">SPORT &amp; CULTURE</div>
                  <h3>Smarter sport, better decisions</h3>
                  <p>
                    A look at how information, insight and the right ecosystem
                    can shape sporting futures.
                  </p>
                  <a href="/connect-with-us">COMING SOON</a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
