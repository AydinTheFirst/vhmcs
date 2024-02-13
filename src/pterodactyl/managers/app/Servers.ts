import { AxiosInstance } from "axios";
import {
  Server,
  UpdateDetailsPayload,
  UpdateBuildPayload,
  UpdateStartupPayload,
  CreateServerPayload,
} from "../../types";

export class AppServers {
  request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }

  list = async (): Promise<Server[]> => {
    const response = await this.request.get("/api/application/servers");
    const servers = [];
    for (const server of response.data.data) {
      servers.push(server.attributes);
    }

    return servers;
  };

  get = async (id: string): Promise<Server> => {
    const response = await this.request.get(`/api/application/servers/${id}`);
    return response.data.attributes;
  };

  create = async (data: CreateServerPayload): Promise<Server> => {
    const egg = await this.request.get(
      `/api/application/nests/${data.nest}/eggs/${data.egg}`
    );

    const eggAttributes = egg.data.attributes;

    if (!data.docker_image) data.docker_image = eggAttributes.docker_image;
    if (!data.startup) data.startup = eggAttributes.startup;
    if (!data.environment) data.environment = eggAttributes.default_environment;

    const response = await this.request.post("/api/application/servers", data);
    return response.data.attributes;
  };

  updateBuild = async (
    id: string,
    data: UpdateBuildPayload
  ): Promise<Server> => {
    const response = await this.request.patch(
      `/api/application/servers/${id}/build`,
      data
    );

    return response.data.attributes;
  };

  updateStartup = async (
    id: string,
    data: UpdateStartupPayload
  ): Promise<Server> => {
    const response = await this.request.patch(
      `/api/application/servers/${id}/startup`,
      data
    );
    return response.data.attributes;
  };

  updateDetails = async (
    id: string,
    data: UpdateDetailsPayload
  ): Promise<Server> => {
    const response = await this.request.patch(
      `/api/application/servers/${id}/details`,
      data
    );
    return response.data.attributes;
  };

  delete = async (id: string, force?: boolean): Promise<void> => {
    const route = `/api/application/servers/${id}` + (force ? "/force" : "");
    await this.request.delete(route);
  };

  reinstall = async (id: string): Promise<void> => {
    await this.request.post(`/api/application/servers/${id}/reinstall`);
  };

  suspend = async (id: string): Promise<void> => {
    await this.request.post(`/api/application/servers/${id}/suspend`);
  };

  unsuspend = async (id: string): Promise<void> => {
    await this.request.post(`/api/application/servers/${id}/unsuspend`);
  };
}
