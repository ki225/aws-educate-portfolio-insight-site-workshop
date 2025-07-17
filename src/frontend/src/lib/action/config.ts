export interface Config {
  API_BASE_URL: string;
  siteName: string;
  siteTitle: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  location: string;
}

export async function loadConfig(): Promise<Config> {
  const res = await fetch("/config.json");
  return await res.json();
}
