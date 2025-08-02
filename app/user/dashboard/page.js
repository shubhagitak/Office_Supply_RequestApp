'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UserDashboard() {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get('email') || 'guest@example.com';

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('');
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    const res = await fetch('/api/requests');
    const data = await res.json();
    const userRequests = data.filter((req) => req.userEmail === userEmail);
    setRequests(userRequests);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRequest = {
      item: itemName,
      quantity,
      reason,
      userEmail,
    };

    const res = await fetch('/api/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRequest),
    });

    if (res.ok) {
      await fetchRequests();
      setItemName('');
      setQuantity('');
      setReason('');
    }
  };

  return (
    <div className="container">
      <h1>User Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name</label>
          <select
            required
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          >
            <option value="">-- Select Item --</option>
            <option value="Pen">Pen</option>
            <option value="Notebook">Notebook</option>
            <option value="Stapler">Stapler</option>
            <option value="File">File</option>
            <option value="Marker">Marker</option>
            <option value="Highlighter">Highlighter</option>
            <option value="Printer Paper">Printer Paper</option>
            <option value="Envelope">Envelope</option>
            <option value="Sticky Notes">Sticky Notes</option>
            <option value="Scissors">Scissors</option>
            <option value="Tape">Tape</option>
            <option value="Glue Stick">Glue Stick</option>
            <option value="Calculator">Calculator</option>
            <option value="Whiteboard Marker">Whiteboard Marker</option>
            <option value="Punching Machine">Punching Machine</option>
            <option value="Binder Clip">Binder Clip</option>
            <option value="Paper Clip">Paper Clip</option>
            <option value="Desk Organizer">Desk Organizer</option>
            <option value="Mouse Pad">Mouse Pad</option>
            <option value="Pen Stand">Pen Stand</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            required
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Reason for Request</label>
          <textarea
            required
            rows="3"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="e.g. For team meeting notes"
          ></textarea>
        </div>

        <button type="submit">Request Supply</button>
      </form>

      <h2>Past Requests</h2>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td>{req.item}</td>
                <td>{req.quantity}</td>
                <td className="status">{req.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}