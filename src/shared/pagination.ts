import { z } from "zod";

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

export const PaginationParamsSchema = z.object({
  page: z.coerce.number().min(1).default(DEFAULT_PAGE),
  pageSize: z.coerce.number().min(10).max(100).default(DEFAULT_PAGE_SIZE),
});
