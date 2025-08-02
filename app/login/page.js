'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function RoleLogin() {
  const router = useRouter();
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // reset error before checking

    if (!email || !password || !confirm || !role) return;

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    if (role === 'admin') {
      router.push('/admin/admindashboard');
    } else if (role === 'user') {
      router.push('/user/dashboard');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Email</label><br />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <label>Password</label><br />
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <label>Confirm Password</label><br />
      <input
        type="password"
        required
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        style={{ borderColor: error ? 'red' : '' }}
      /><br />
      {error && <span style={{ color: 'red', fontSize: '14px' }}>{error}</span>}<br />

      <label>Select Role</label><br />
      <select
        value={role}
        required
        onChange={(e) => setRole(e.target.value)}
        style={{
          width: '378px',
          height: '40px',
          fontSize: '18px',
          marginBottom: '20px',
          backgroundColor: 'gray',
          border: '2px solid black'
        }}
      >
        <option value="">-- Select --</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select><br />

      <button type="submit">Login</button>
    </form>
  );
}
