export type RecordType =
  | "A"
  | "AAAA"
  | "CAA"
  | "CERT"
  | "CNAME"
  | "DNSKEY"
  | "DS"
  | "HTTPS"
  | "LOC"
  | "MX"
  | "NAPTR"
  | "NS"
  | "PTR"
  | "SMIMEA"
  | "SVR"
  | "SSHFP"
  | "SVCB"
  | "TLSA"
  | "TXT"
  | "URI";

type BaseRecord = {
  type: RecordType;
  name: string;
  content: string;
  ttl: number;
  proxied: boolean;
};

export type ARecord = BaseRecord & {
  type: "A";
  content: string;
};

export type AAAARecord = BaseRecord & {
  type: "AAAA";
  content: string;
};

export type CAARecord = BaseRecord & {
  type: "CAA";
  data: {
    flags: number;
    tag: string;
    value: string;
  };
};

export type CERTRecord = BaseRecord & {
  type: "CERT";
  data: {
    type: number;
    keyTag: number;
    algorithm: number;
    certificate: string;
  };
};

export type CNAMERecord = BaseRecord & {
  type: "CNAME";
  content: string;
};

export type DNSKEYRecord = BaseRecord & {
  type: "DNSKEY";
  data: {
    flags: number;
    protocol: number;
    algorithm: number;
    publicKey: string;
  };
};

export type DSRecord = BaseRecord & {
  type: "DS";
  data: {
    keyTag: number;
    algorithm: number;
    digestType: number;
    digest: string;
  };
};

export type HTTPSRecord = BaseRecord & {
  type: "HTTPS";
  data: {
    url: string;
  };
};

export type LOCRecord = BaseRecord & {
  type: "LOC";
  data: {
    latitude: number;
    longitude: number;
    altitude: number;
    size: number;
    horizontalPrecision: number;
    verticalPrecision: number;
  };
};

export type MXRecord = BaseRecord & {
  type: "MX";
  data: {
    priority: number;
    content: string;
  };
};

export type NAPTRRecord = BaseRecord & {
  type: "NAPTR";
  data: {
    order: number;
    preference: number;
    flags: string;
    service: string;
    regexp: string;
    replacement: string;
  };
};

export type NSRecord = BaseRecord & {
  type: "NS";
  content: string;
};

export type PTRRecord = BaseRecord & {
  type: "PTR";
  content: string;
};

export type SMIMEARecord = BaseRecord & {
  type: "SMIMEA";
  data: {
    usage: number;
    selector: number;
    matchingType: number;
    certificate: string;
  };
};

export type SRVRecord = BaseRecord & {
  type: "SRV";
  data: {
    priority: number;
    weight: number;
    port: number;
    target: string;
  };
};

export type SSHFPRecord = BaseRecord & {
  type: "SSHFP";
  data: {
    algorithm: number;
    type: number;
    fingerprint: string;
  };
};

export type SVCBRecord = BaseRecord & {
  type: "SVCB";
  data: {
    priority: number;
    targetName: string;
    parameters: string;
  };
};

export type TLSARecord = BaseRecord & {
  type: "TLSA";
  data: {
    usage: number;
    selector: number;
    matchingType: number;
    certificate: string;
  };
};

export type TXTRecord = BaseRecord & {
  type: "TXT";
  content: string;
};

export type URIRecord = BaseRecord & {
  type: "URI";
  data: {
    priority: number;
    weight: number;
    target: string;
  };
};

export type Record =
  | ARecord
  | AAAARecord
  | CAARecord
  | CERTRecord
  | CNAMERecord
  | DNSKEYRecord
  | DSRecord
  | HTTPSRecord
  | LOCRecord
  | MXRecord
  | NAPTRRecord
  | NSRecord
  | PTRRecord
  | SMIMEARecord
  | SRVRecord
  | SSHFPRecord
  | SVCBRecord
  | TLSARecord
  | TXTRecord
  | URIRecord;
