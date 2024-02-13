import axios, { AxiosInstance } from "axios";
import https from "https";
import { VmManager } from "./managers/vm";
import { ClusterManager } from "./managers/Cluster";
import { DatacenterManager } from "./managers/Datacenter";
import { DatastoreManager } from "./managers/Datastore";
import { vCenterConfig } from "./types";

export class vCenter {
  config: vCenterConfig;
  request: AxiosInstance;

  wm: VmManager;
  clusters: ClusterManager;
  datacenters: DatacenterManager;
  datastores: DatastoreManager;
  constructor(config: vCenterConfig) {
    this.config = config;

    this.request = axios.create({
      baseURL: config.url,
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    this.wm = new VmManager(this.request);
    this.clusters = new ClusterManager(this.request);
    this.datacenters = new DatacenterManager(this.request);
    this.datastores = new DatastoreManager(this.request);
  }

  async login() {
    const { email, password } = this.config.credentials;

    const response = await this.request.post(
      "/rest/com/vmware/cis/session",
      {},
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${email}:${password}`).toString(
            "base64"
          )}`,
        },
      }
    );

    const token = response.data.value;
    this.request.defaults.headers["vmware-api-session-id"] = token;
    return token;
  }
}
