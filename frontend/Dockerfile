# Stage 1 → Build React
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build


# Stage 2 → Serve with nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# 🔥 ADD THIS LINE
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]