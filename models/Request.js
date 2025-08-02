// models/Request.js
import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  reason: String,
  userEmail: String,
  status: {
    type: String,
    default: 'Pending',
  },
});

export default mongoose.models.Request || mongoose.model('Request', RequestSchema);
