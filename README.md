# Vet AI Website

Trang web thú y này được xây dựng bằng Astro và thiết kế để dễ triển khai trên Cloudflare Pages.

## Chạy cục bộ

1. `npm install`
2. `npm run dev`

## Triển khai Cloudflare Pages

- Build command: `npm run build`
- Publish directory: `dist`

## Cloudflare Emdash CMS

- Đã chuyển sang Cloudflare Emdash để quản lý nội dung.
- Kết nối Emdash bằng Cloudflare, build command: `npm run build`, publish directory: `dist`.
- Nội dung có thể chỉnh sửa trong `src/data/site-content.json`.
- Truy cập admin qua `/admin`, page sẽ tự động chuyển tới `/_emdash/admin`.
- Deployment Cloudflare dùng config được tạo tại `dist/server/wrangler.json`.

## Các trang đã tạo

- `/` — Trang chủ giới thiệu dịch vụ thú y AI-built
- `/about` — Giới thiệu chiến lược website AI-built
- `/contact` — Thông tin liên hệ và yêu cầu tư vấn

## Ý tưởng

Website giới thiệu dịch vụ thú y kết hợp chiến lược AI-built sites: thiết kế nhanh, hiệu suất nhẹ, host miễn phí trên Cloudflare Pages và tối ưu cho khách hàng mới.
