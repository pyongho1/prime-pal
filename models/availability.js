import mongoose from "mongoose";

const Schema = mongoose.Schema;

const availSchema = new Schema(
  {
    title: String,
    availability: Boolean,
    availDate: Date,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const Availabilty = mongoose.model("Availability", availSchema);

export { Availabilty };
