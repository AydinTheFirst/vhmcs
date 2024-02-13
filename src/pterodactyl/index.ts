import axios, { AxiosInstance } from "axios";
import { PterodactylConfig } from "./types";
import { AppServers } from "./managers/app/Servers";
import { AppUsers } from "./managers/app/Users";

export class Pterodactyl {
  config: PterodactylConfig;
  request: AxiosInstance;

  servers: AppServers;
  users: AppUsers;
  constructor(config: PterodactylConfig) {
    this.config = config;

    this.request = axios.create({
      baseURL: config.url,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
    });

    this.servers = new AppServers(this.request);
    this.users = new AppUsers(this.request);
  }
}
