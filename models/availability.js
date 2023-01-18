import mongoose from "mongoose";

const Schema = mongoose.Schema;

const availSchema = new Schema(
  {
    availabiltiy: Boolean,
    date: Date,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const Availabilty = mongoose.model("Availability", availSchema);

export { Availabilty };
