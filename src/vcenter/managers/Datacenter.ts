import { AxiosInstance } from "axios";

export class DatacenterManager {
  request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }

  list = async (): Promise<ListedDatacenter[]> => {
    const res = await this.request.get("/api/vcenter/datacenter");
    return res.data;
  };

  get = async (id: string): Promise<Datacenter> => {
    const res = await this.request.get(`/api/vcenter/datacenter/${id}`);
    return res.data;
  };

  create = async (payload: CreateDatacenterPayload): Promise<Datacenter> => {
    const res = await this.request.post("/api/vcenter/datacenter", {
      spec: {
        ...payload,
      },
    });
    return res.data;
  };

  delete = async (id: string): Promise<void> => {
    await this.request.delete(`/api/vcenter/datacenter/${id}`);

    return;
  };
}

export interface ListedDatacenter {
  name: string;
  datacenter: string;
}

export interface Datacenter {
  datastore_folder: string;
  host_folder: string;
  name: string;
  network_folder: string;
  vm_folder: string;
}

export interface CreateDatacenterPayload {
  folder: string;
  name: string;
}
