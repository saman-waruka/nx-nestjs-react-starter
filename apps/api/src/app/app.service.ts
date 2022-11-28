import { Injectable } from "@nestjs/common";
import { User } from "./user";

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: "Welcome to api!" };
  }

  getUsers(): { users: User[] } {
    return {
      users: [
        { id: 1, name: "one" },
        { id: 2, name: "two" },
      ],
    };
  }
}
