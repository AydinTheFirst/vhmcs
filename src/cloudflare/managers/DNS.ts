import { AxiosInstance } from "axios";
import { DnsRecords } from "./DnsRecords";
import { DnsZones } from "./DnsZones";

export class DNS {
  private request: AxiosInstance;
  public records: DnsRecords;
  public zones: DnsZones;
  constructor(request: AxiosInstance) {
    this.request = request;

    this.records = new DnsRecords(this.request);
    this.zones = new DnsZones(this.request);
  }
}
