declare global {
  namespace NodeJS {
    interface ProcessEnv {
      OPENAI_API_KEY: string;
      LISTEN_PORT: number;
      DATABASE_URL: string;
    }
  }
}

export {};
