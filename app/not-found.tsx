import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 20px',
        background: 'var(--mist)',
        paddingTop: '120px' /* Add extra padding to account for fixed header */
      }}>
        <div className="kicker">Error 404</div>
        <h1 style={{
          fontSize: 'clamp(80px, 12vw, 150px)',
          fontWeight: 900,
          color: 'var(--navy)',
          marginBottom: '10px',
          lineHeight: 1
        }}>404</h1>
        <h2 style={{
          color: 'var(--ink)',
          marginBottom: '16px'
        }}>Page Not Found</h2>
        <p style={{
          color: 'var(--muted)',
          maxWidth: '500px',
          margin: '0 auto 36px',
          fontSize: '16px',
          lineHeight: 1.6
        }}>
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or perhaps it never existed.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
