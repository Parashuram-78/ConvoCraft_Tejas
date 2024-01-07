// import { number } from 'joi';
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
      // userId:{ type: number, required: true},
      name: { type: "string", required: true },
      email: { type: "string", required: true },
      profileImageUrl: { type: "string", default: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704631423~exp=1704632023~hmac=bf57c4dfca8987fd37e5bab2117aaf1af10bfc0aadf1a6bf1c09d14fd56fb911"},
      phoneNumber: { type:"string", default:null},
      password: { type: "string",default:null},
      googleId: { type: "string", default:null},
      isVerified: { type: "boolean", default: false}
    },
    { timestamps: true }
  );
export default mongoose.model("User",userSchema);