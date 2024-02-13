import { AxiosInstance } from "axios";
import { CreateVmPayload, VM, VMList, VMPlacement } from "../types";

export class VmManager {
  request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }

  list = async (): Promise<VMList[]> => {
    const res = await this.request.get("/rest/vcenter/vm");
    return res.data;
  };

  get = async (id: string): Promise<VM> => {
    const res = await this.request.get(`/rest/vcenter/vm/${id}`);
    return res.data;
  };

  create = async (payload: CreateVmPayload): Promise<VM> => {
    const res = await this.request.post("/rest/vcenter/vm", {
      spec: {
        ...payload,
      },
    });
    return res.data;
  };

  delete = async (id: string): Promise<void> => {
    await this.request.delete(`/rest/vcenter/vm/${id}`);

    return;
  };

  relocate = async (
    id: string,
    payload: VMPlacement,
    task?: boolean
  ): Promise<void> => {
    const url = `/rest/vcenter/vm/${id}?action=relocate${
      task ? "&vmw-task=true" : ""
    }`;

    await this.request.post(url, {
      spec: {
        ...payload,
      },
    });

    return;
  };

  unregister = async (id: string): Promise<void> => {
    await this.request.post(`/rest/vcenter/vm/${id}?action=unregister`);

    return;
  };

  clone = async (
    id: string,
    name: string,
    instant?: boolean
  ): Promise<string> => {
    const url = `/rest/vcenter/vm/${id}?action=${
      instant ? "instant-clone" : "clone"
    }`;

    const res = await this.request.post(url, {
      spec: {
        name,
        source: id,
      },
    });

    return res.data;
  };

  register = async (folder: string): Promise<void> => {
    await this.request.post(`/rest/vcenter/vm?action=register`, {
      spec: {
        placement: {
          folder,
        },
      },
    });

    return;
  };
}
