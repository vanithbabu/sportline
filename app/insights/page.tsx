import React from "react";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

import Header from "@/components/Header";

export default function InsightsPage() {
  return (
    <>
      <Seo title="Insights | Sportline Advantage" />
      <Header />
      <main className="insights-page">
        <section className="coming-soon-section">
          <div className="container">
            <h1>Coming Soon</h1>
            <p>
              We're working on something exciting for this space. Check back
              later for more insights and stories from the world of sport.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
