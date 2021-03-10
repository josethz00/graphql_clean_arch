import { ObjectId } from "mongoose";

type UserInput = {
  data: {
    _id?: ObjectId;
    username: string;
    email: string;
    password: string;
  }
}

export { UserInput };
