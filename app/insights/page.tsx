import React from "react";
import Footer from "@/components/Footer";
import { getMetadata } from "@/components/Seo";
import Header from "@/components/Header";

export const metadata = getMetadata({
  title: "Insights | Sportline Advantage",
  description:
    "Explore insights, stories, and thought leadership on sports training, athlete development, and sports excellence.",
  canonical: "/insights",
});

export default function InsightsPage() {
  return (
    <>
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
