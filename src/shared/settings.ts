import { TaskItem } from "@/entities/tasks";

export const githubCredentials = {
  clientId: process.env.GITHUB_CLIENT_ID as string,
  clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
};

export const ORIGIN_URL_KEY = "x-url";
export const NO_SESSION_REDIRECT = "/login?callbackUrl=";

// TODO: Mocked Data: remove after having DB connection settled
export const items: TaskItem[] = [
  {
    id: "pd1",
    label: "Checklist 1",
    content: "Yes that the first one",
  },
  {
    id: "pd2",
    label: "Checklist 2",
    content: "Yes that the second one",
  },
  {
    id: "pd3",
    label: "Checklist 3",
    content: "Yes that the third one",
  },
  {
    id: "pd4",
    label: "Checklist 4",
    content: "Yes that the fourth one",
  },
  {
    id: "pd5",
    label: "Checklist 5",
    content: "Yes that the fifth one",
  },
];
