import { Config } from "convict";

export type ConvictConfig = Config<{ [key: string]: string | number | object }>;
