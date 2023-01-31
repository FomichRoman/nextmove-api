FROM node:16-alpine AS builder
WORKDIR /app/backend
COPY /*.json ./
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app/backend
COPY --from=builder /app/backend ./
EXPOSE 4200
CMD [ "npm", "run", "start:prod" ]