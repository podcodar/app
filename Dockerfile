## base stage
FROM node:lts-alpine as base
RUN npm i -g npm &&  npm i -g pnpm concurrently

## dependencies stage
FROM base as dependencies
WORKDIR /app
COPY package.json pnpm-lock* ./
COPY prisma ./prisma
RUN pnpm i && pnpm db:generate

# development stage
FROM base as development
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
# startup command
CMD pnpm db:migrate dev && pnpm dk:start
