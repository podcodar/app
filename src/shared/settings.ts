export const githubCredentials = {
  clientId: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
};

export const ORIGIN_URL_KEY = "x-url";
export const NO_SESSION_REDIRECT = "/login?callbackUrl=";
