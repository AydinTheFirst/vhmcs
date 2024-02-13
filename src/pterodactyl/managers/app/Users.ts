import { AxiosInstance } from "axios";
import { CreateUserParams, UpdateUserParams, User } from "../../types/user";

export class AppUsers {
  request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  list = async (): Promise<User[]> => {
    const res = await this.request.get("/api/application/users");
    const users = [];

    for (const user of res.data.data) {
      users.push(user.attributes);
    }

    return users;
  };

  get = async (id: number): Promise<User> => {
    const res = await this.request.get(`/api/application/users/${id}`);
    return res.data.attributes;
  };

  create = async (params: CreateUserParams): Promise<User> => {
    const res = await this.request.post("/api/application/users", params);
    return res.data.attributes;
  };

  update = async (id: number, params: UpdateUserParams): Promise<User> => {
    const res = await this.request.patch(
      `/api/application/users/${id}`,
      params
    );
    return res.data.attributes;
  };

  delete = async (id: number): Promise<void> => {
    await this.request.delete(`/api/application/users/${id}`);
  };
}
