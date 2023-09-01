export const githubCredentials = {
  clientId: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
};

export const googleCredentials = {
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  authorization: {
    params: {
      prompt: "consent",
      access_type: "offline",
      response_type: "code",
    },
  },
};

export const ORIGIN_URL_KEY = "x-url";
export const NO_SESSION_REDIRECT = "/login?callbackUrl=";
