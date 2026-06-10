
FROM node:current-alpine3.23

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm i

COPY . .

RUN pnpm dlx prisma generate

EXPOSE 8000

CMD ["pnpm", "start"]
