import { AxiosInstance } from "axios";

export class ClusterManager {
  request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }

  list = async (): Promise<ListedCluster[]> => {
    const res = await this.request.get("/api/vcenter/cluster");
    return res.data;
  };

  get = async (id: string): Promise<Cluster> => {
    const res = await this.request.get(`/api/vcenter/cluster/${id}`);
    return res.data;
  };
}

export interface ListedCluster {
  cluster: string;
  drs_enabled: boolean;
  ha_enabled: boolean;
  name: string;
}

export interface Cluster {
  name: string;
  resource_pool: string;
}
