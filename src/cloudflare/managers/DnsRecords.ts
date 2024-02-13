import { Record, RecordType } from "@/cloudflare/types";
import { makeQuery } from "@/utils";
import { AxiosInstance } from "axios";

export class DnsRecords {
  private request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }

  public async list(zoneId: string, query?: ListRecordsQuery) {
    const route = `/zones/${zoneId}/dns_records` + makeQuery(query);
    const res = await this.request.get(route);

    return res.data.result;
  }

  public async create(zoneId: string, data: Record): Promise<Record> {
    const res = await this.request.post(`/zones/${zoneId}/dns_records`, data);

    return res.data.result;
  }

  public async get(zoneId: string, recordId: string): Promise<Record> {
    const res = await this.request.get(
      `/zones/${zoneId}/dns_records/${recordId}`
    );

    return res.data.result;
  }

  public async update(
    zoneId: string,
    recordId: string,
    data: Record
  ): Promise<Record> {
    const res = await this.request.patch(
      `/zones/${zoneId}/dns_records/${recordId}`,
      data
    );

    return res.data.result;
  }

  public async delete(zoneId: string, recordId: string): Promise<void> {
    await this.request.delete(`/zones/${zoneId}/dns_records/${recordId}`);
  }

  public async export(zoneId: string) {
    const res = await this.request.get(`/zones/${zoneId}/dns_records/export`);

    return res.data.result;
  }

  public async import(zoneId: string, data: string) {
    const res = await this.request.post(
      `/zones/${zoneId}/dns_records/import`,
      data
    );

    return res.data.result;
  }
}

export type ListRecordsQuery = {
  comment?: {
    exact?: string;
    absent?: string;
    contains?: string;
    endswith?: string;
    present?: string;
    startswith?: string;
  };
  content?: string;
  direction?: "asc" | "desc";
  match?: "any" | "all";
  name?: string;
  order?: {
    type?: string;
    name?: string;
    content?: string;
    ttl?: string;
    proxied?: string;
  };
  page?: number;
  per_page?: number;
  proxied?: boolean;
  search?: string;
  tag?: {
    absent?: string;
    contains?: string;
    endswith?: string;
    exact?: string;
    present?: string;
    startswith?: string;
  };
  tag_match?: "any" | "all";
  type?: RecordType;
};
