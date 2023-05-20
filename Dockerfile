FROM node:lts-alpine

WORKDIR /app

COPY package.json pnpm-lock* ./

# install pnpm and project dependencies
RUN npm i -g npm && \
  npm i -g pnpm && \
  pnpm i

COPY . .

# startup command
CMD pnpm dev & pnpm db:studio
