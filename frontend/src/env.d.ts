/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_GITHUB_USERNAME?: string
  readonly VITE_DEVTO_USERNAME?: string
  readonly VITE_GH_PAGES_BASE?: string
  readonly VITE_BACKEND_API_BASE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}