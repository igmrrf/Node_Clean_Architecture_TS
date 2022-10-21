export const apps: {
  name: string;
  script: string;
  instances: number;
  autorestart: boolean;
  exec_mode: string;
  watch: boolean;
  max_memory_restart: string;
  env_production: {
    NODE_ENV: string;
  };
}[];
export namespace deploy {
  const production: {
    user: string;
    host: string;
    ref: string;
    repo: string;
    path: string;
    "pre-deploy-local": string;
    "post-deploy": string;
    "pre-setup": string;
  };
}
