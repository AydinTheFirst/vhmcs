import { makeQuery } from "@/utils";
import { AxiosInstance } from "axios";
import { DnsRecords } from "./DnsRecords";
import { ListZonesQuery, Zone } from "@/cloudflare/types";

export class DnsZones {
  private request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }

  public async list(query?: ListZonesQuery) {
    const route = `/zones` + makeQuery(query);
    const res = await this.request.get(route);

    return res.data.result;
  }

  public async create(data: Zone): Promise<Zone> {
    const res = await this.request.post(`/zones`, data);

    return res.data.result;
  }

  public async get(zoneId: string): Promise<Zone> {
    const res = await this.request.get(`/zones/${zoneId}`);

    return res.data.result;
  }

  public async update(zoneId: string, data: Zone): Promise<Zone> {
    const res = await this.request.patch(`/zones/${zoneId}`, data);

    return res.data.result;
  }

  public async purgeCache(zoneId: string): Promise<void> {
    await this.request.delete(`/zones/${zoneId}/purge_cache`);
  }

  public async delete(zoneId: string): Promise<void> {
    await this.request.delete(`/zones/${zoneId}`);
  }
}
