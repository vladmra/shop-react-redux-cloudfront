/// <reference types="vitest" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_GATEWAY_ID: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }