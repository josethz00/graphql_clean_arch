import { ObjectId } from "mongoose";

interface UpdateUserDTO {

  _id?: ObjectId;
  username?: string;
  email?: string;
  password?: string;

}

export { UpdateUserDTO };
