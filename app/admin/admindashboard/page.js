'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const res = await fetch('/api/requests');
      const data = await res.json();
      setRequests(data);
    };

    fetchRequests();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    const res = await fetch('/api/requests', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status }),
    });

    const updated = await res.json();
    if (updated.updated) {
      setRequests((prev) =>
        prev.map((req) => (req._id === id ? updated.updated : req))
      );
    }
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <h2>Supply Requests</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req._id}>
              <td>{req.userEmail}</td>
              <td>{req.item}</td>
              <td>{req.quantity}</td>
              <td className="status">{req.status}</td>
              <td>
                {req.status === 'Pending' ? (
                  <>
                    <button onClick={() => handleUpdateStatus(req._id, 'Approved')}>
                      Approve
                    </button>
                    <button
                      className="deny"
                      onClick={() => handleUpdateStatus(req._id, 'Denied')}
                      style={{ marginLeft: '10px' }}
                    >
                      Deny
                    </button>
                  </>
                ) : (
                  <button disabled>{req.status}</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}