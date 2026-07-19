import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  email: { type: String, required: true, match: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ },
  subject: { type: String, required: true, trim: true, minlength: 3 },
  message: { type: String, required: true, trim: true, minlength: 10 },
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' }
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);