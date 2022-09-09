FROM node:16.14
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./
COPY ./ ./
RUN yarn
CMD ["yarn", "build"]
