export * from "./vm";

export type vCenterConfig = {
  url: string;
  credentials: {
    email: string;
    password: string;
  };
};
