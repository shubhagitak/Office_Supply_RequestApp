'use client';
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="background">
      <header className="header">
        <div className="logo">Office Supply App</div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </nav>
      </header>

      <main className="main">
        <h1>About This App</h1>
        <div className="about-box">
          <p>
            The <strong>Office Supply App</strong> is a simple and easy-to-use system to request
            and view essential office items like pens, notebooks, staplers, and more.
          </p>
          <p>
            This app is built using <strong>Next.js</strong> and offers a clean interface for
            both users and administrators to manage office supplies efficiently.
          </p>
          <p>
            {"Whether you're a student, teacher, or employee — this app helps streamline your supply needs with just a few clicks."}
          </p>
        </div>
      </main>
    </div>
  );
}
