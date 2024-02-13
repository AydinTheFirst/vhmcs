import { Axios, AxiosInstance } from "axios";

export class DatastoreManager {
  private request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }

  list = async (): Promise<ListedDatastore[]> => {
    const res = await this.request.get("/api/vcenter/datastore");
    return res.data;
  };

  get = async (id: string): Promise<Datastore> => {
    const res = await this.request.get(`/api/vcenter/datastore/${id}`);
    return res.data;
  };
}

export interface ListedDatastore {
  capacity: number;
  datastore: string;
  free_space: number;
  name: string;
  type: string;
}

export interface Datastore {
  accessible: boolean;
  free_space: number;
  multiple_host_access: boolean;
  name: string;
  thin_provisioning_supported: boolean;
  type: string;
}
