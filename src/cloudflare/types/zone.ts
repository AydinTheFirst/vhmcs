export type ListZonesQuery = {
  account?: {
    id?: string;
    name?: string;
    name_operator?:
      | "equal"
      | "not_equal"
      | "starts_with"
      | "ends_with"
      | "contains"
      | "starts_with_case_sensitive"
      | "ends_with_case_sensitive"
      | "contains_case_sensitive";
  };
  direction?: "asc" | "desc";
  match?: "any" | "all";
  name?: string;
  name_operator?:
    | "equal"
    | "not_equal"
    | "starts_with"
    | "ends_with"
    | "contains"
    | "starts_with_case_sensitive"
    | "ends_with_case_sensitive"
    | "contains_case_sensitive";
  order?: "name" | "status" | "account.id" | "account.name";
  page?: number;
  per_page?: number;
  status?: string;
};

export type Zone = {
  account: {
    id: string;
    name: string;
  };
  activated_on: string;
  created_on: string;
  development_mode: number;
  id: string;
  meta: {
    cdn_only: boolean;
    custom_certificate_quota: number;
    dns_only: boolean;
    foundation_dns: boolean;
    page_rule_quota: number;
    phishing_detected: boolean;
    step: number;
  };
  modified_on: string;
  name: string;
  original_dnshost: string;
  original_name_servers: string[];
  original_registrar: string;
  owner: {
    id: string;
    name: string;
    type: string;
  };
  vanity_name_servers: string[];
};
