import mongoose from "mongoose";

const Schema = mongoose.Schema;

const palSchema = new Schema(
  {
    name: String,
    content: String,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const Pal = mongoose.model("Pal", palSchema);

export { Pal };
