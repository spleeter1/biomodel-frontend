# Sử dụng image node chính thức
FROM node:20.11.0-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ project vào container
COPY . .

# Expose cổng 8082 (hoặc cổng mà bạn muốn chạy server)
EXPOSE 8082

# Chạy ứng dụng React Vite, cấu hình để listen trên mọi địa chỉ (0.0.0.0)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8082"]
