declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_BOOK_API_KEY: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
