## base stage
FROM node:lts-alpine as base
WORKDIR /app
RUN npm i -g npm pnpm concurrently

## dependencies stage
FROM base as dependencies
COPY package.json pnpm-lock* ./
COPY prisma ./prisma
RUN pnpm i && pnpm db:generate

# development stage
FROM base as development
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
# startup command
CMD pnpm i && pnpm db:migrate dev && pnpm dk:start
