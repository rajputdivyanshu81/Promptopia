import mongoose ,{ Schema,model,models } from 'mongoose';
const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
},
});

// Create a model from the schema
const Prompt = model('Prompt', promptSchema);
export default Prompt;