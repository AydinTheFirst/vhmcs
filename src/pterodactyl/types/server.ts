interface Limits {
  memory: number;
  swap: number;
  disk: number;
  io: number;
  cpu: number;
  threads: null | number | string;
}

interface FeatureLimits {
  databases: number;
  allocations: number;
  backups: number;
}

interface Environment {
  [key: string]: string;
}

interface Container {
  startup_command: string;
  image: string;
  installed: boolean;
  environment: Environment;
}

interface Attributes {
  id: number;
  server: number;
  host: number;
  database: string;
  username: string;
  remote: string;
  max_connections: number;
  created_at: string;
  updated_at: string;
}

interface Database {
  object: string;
  attributes: Attributes;
}

interface Databases {
  object: string;
  data: Database[];
}

interface Relationships {
  databases: Databases;
}

export interface Server {
  id: number;
  external_id: string;
  uuid: string;
  identifier: string;
  name: string;
  description: string;
  suspended: boolean;
  limits: Limits;
  feature_limits: FeatureLimits;
  user: number;
  node: number;
  allocation: number;
  nest: number;
  egg: number;
  pack: null | number;
  container: Container;
  updated_at: string;
  created_at: string;
  relationships: Relationships;
}

export type UpdateDetailsPayload = {
  name: string;
  user: number;
  description?: string;
  external_id?: string;
};

export type UpdateBuildPayload = {
  allocation: number;
  memory: number;
  swap: number;
  io: number;
  cpu: number;
  threads: string;
  disk: number;
  feature_limits: {
    databases: number;
    backups: number;
    allocations: number;
  };
};

export type UpdateStartupPayload = {
  startup: string;
  environment: {
    [key: string]: string;
  };
  egg: number;
  image: string;
  skip_scripts: boolean;
};

export type CreateServerPayload = {
  name: string;
  user: number;
  nest: number;
  egg: number;
  docker_image?: string;
  startup?: string;
  environment?: Environment;
  limits: Limits;
  feature_limits: FeatureLimits;
  allocation: {
    default: number;
  };
  [key: string]: any;
};
