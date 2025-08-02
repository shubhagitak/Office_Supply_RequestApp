// app/api/requests/route.js
import connectDB from '@/lib/db';
import Request from '@/models/Request';

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    console.log("🔹 POST Body:", body); 
    const request = new Request(body);
    await request.save();
    return Response.json({ message: 'Request created', request });
  } catch (error) {
    console.error('❌ POST error:', error); 
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const requests = await Request.find();
    return Response.json(requests);
  } catch (error) {
    console.error('❌ GET error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const { id, status } = await req.json();
    const updated = await Request.findByIdAndUpdate(id, { status }, { new: true });
    return Response.json({ message: 'Status updated', updated });
  } catch (error) {
    console.error('❌ PUT error:', error);
    return Response.json({ error: 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();
    await Request.findByIdAndDelete(id);
    return Response.json({ message: 'Request deleted successfully' });
  } catch (error) {
    console.error('❌ DELETE error:', error);
    return Response.json({ error: 'Delete failed' }, { status: 500 });
  }
}
