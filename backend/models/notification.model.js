import mongoose, { Schema } from "mongoose";

const notificationSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    pulseRate: {
      type: Number,
      required: true,
      minlength: [1, "There should be some value of Pulse"],
    },
    bp: {
      type: String,
      required: true,
    },
    temperature: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      required: true,
      minlength: [1, "There should be some amount of severity"],
    },
  },
  {
    timestamp: true,
  }
);

export const Notification = mongoose.model("Notification", notificationSchema);
