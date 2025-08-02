import Link from "next/link";
export default function ContactPage() {
  return (
    <>
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
    </div>
    <div className="about-box">
      <h2>Contact Us</h2>
      <form>
        <p>
          <label>Name</label><br />
          <input type="text" name="name" required />
        </p>
        <p>
          <label>Email</label><br />
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Message</label><br />
          <textarea name="message" rows="4" required></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
    </>
  );
}
