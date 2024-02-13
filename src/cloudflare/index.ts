import axios, { type AxiosInstance } from "axios";
import { CloudflareConfig } from "./types";
import { DnsZones } from "./managers/DnsZones";
import { DNS } from "./managers/DNS";

export class Cloudflare {
  private config: CloudflareConfig;
  public request: AxiosInstance;
  public dns: DNS;
  constructor(config: CloudflareConfig) {
    this.config = config;

    this.request = axios.create({
      baseURL: "https://api.cloudflare.com/client/v4",
      headers: {
        "X-Auth-Email": this.config.email,
        "X-Auth-Key": this.config.apiKey,
      },
    });

    this.dns = new DNS(this.request);
  }
}
