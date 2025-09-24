import mongoose, { Types } from "mongoose"; 

const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    phone: { type: Number, default: 0 },
    token: { type: String, default: "" },
    loginTime: { type: Number, default: 0 },
    image: { type: String, default: "" },

    // add new field for admin
    role: {
      type: String,
      enum: ["user", "admin"], // only 2 user allowed 
      default: "user",         // by default user 
    },
  },
  { timestamps: true }
);

const userModel = new mongoose.model("user", userSchema);
export default userModel;
