import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  shortDescription: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   required: false,
  // },
  // products: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Product",
  //   }
  // ],
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now,
  // }
});

const Collection =
  mongoose.models.Collection || mongoose.model("Collection", collectionSchema);

export default Collection;
