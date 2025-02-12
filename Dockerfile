FROM oven/bun:latest AS builder

WORKDIR /app
COPY . .

RUN bun install --frozen-lockfile
RUN bun run build

FROM oven/bun:latest AS runner

WORKDIR /app
COPY --from=builder /app /app

ENV NODE_ENV=production
EXPOSE 3000

CMD ["bun", "run", "start"]
