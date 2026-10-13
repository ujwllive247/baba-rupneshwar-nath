FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Off by default, matching the public site; see src/data/donationConfig.ts.
ARG VITE_DONATIONS_ENABLED=false
ENV VITE_DONATIONS_ENABLED=$VITE_DONATIONS_ENABLED
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
