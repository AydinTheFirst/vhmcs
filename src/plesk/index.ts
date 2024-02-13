import axios, { AxiosInstance } from "axios";
import { PleskConfig } from "./types";

export class Plesk {
  request: AxiosInstance;
  constructor(config: PleskConfig) {
    this.request = axios.create({
      baseURL: config.url,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": config.apiKey,
      },
    });
  }

  list = async (): Promise<any[]> => {
    const response = await this.request.get("/api/plesk/servers");
    const servers = [];
    for (const server of response.data.data) {
      servers.push(server.attributes);
    }

    return servers;
  };
}
