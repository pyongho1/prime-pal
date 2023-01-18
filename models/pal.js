import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  commenter: { type: Schema.Types.ObjectId, ref: "Profile" },
});

const palSchema = new Schema(
  {
    title: String,
    content: String,
    date: Date,
    availabiltiy: Boolean,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Pal = mongoose.model("Pal", palSchema);

export { Pal };
