import mongoose from "mongoose";

const Schema = mongoose.Schema;

const palSchema = new Schema(
  {
    title: String,
    content: String,
    date: Date,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const Pal = mongoose.model("Pal", palSchema);

export { Pal };
