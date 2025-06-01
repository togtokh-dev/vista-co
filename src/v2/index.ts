// src/lib/v1/index.ts
import { Orders } from "./orders";

export default function createV1(config: {
  token: string;
  host: string;
  regionCode: string;
  logger: boolean;
}) {
  return {
    Orders: Orders(config),
  };
}
