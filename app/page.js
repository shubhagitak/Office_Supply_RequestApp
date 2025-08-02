'use client';
import Link from "next/link";
import "./globals.css";

export default function Home() {
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
        <h1>Welcome to Office Supply App</h1>
        <h2>Your one-stop place to request office items easily</h2>

        {/* About Preview Section */}
        <section className="about-preview">
          <p>
            Our app helps teams and employees quickly request essential office supplies like pens, staplers, and notebooks.
            Built using modern tools, it's fast, intuitive, and made for productivity.
          </p>
          <Link href="/about" className="read-more-link">Learn more →</Link>
        </section>

        {/* Cards */}
        <h2>Sample Items You Can Request</h2>
        <div className="card-container">
          <div className="card">
            <img src="/images/pen.png" alt="Pen" />
            <Link href="/login">Pen</Link>
          </div>
          <div className="card">
            <img src="/images/notebook.png" alt="Notebook" />
            <Link href="/login">Notebook</Link>
          </div>
          <div className="card">
            <img src="/images/stapler.png" alt="Stapler" />
            <Link href="/login">Stapler</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
