import "dotenv/config";
import { Cloudflare, makeQuery } from "../dist";

console.log(
  makeQuery({
    name: "John",
    age: 30,
  })
);

const cf = new Cloudflare({
  apiKey: "",
  email: "",
});
