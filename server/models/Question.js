import mongoose from "mongoose";
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  body: { type: String },
  points: { type: Number }
})

const Question = new Schema(
  {
    time: { type: Number, required: true },
    body: { type: String, required: true },
    options: [optionSchema]
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Question;
