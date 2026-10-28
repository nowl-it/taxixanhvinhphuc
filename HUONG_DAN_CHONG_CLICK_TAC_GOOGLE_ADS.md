# HƯỚNG DẪN CHỐNG CLICK TẶC & CHẶN IP PHÁ HOẠI CHO GOOGLE ADS
### Website: Taxi Điện Vĩnh Phúc - Phú Thọ (taxidienvinhphuc.com)

> **Lưu ý sống còn:** Khi chạy Google Ads ngành Taxi, tiền quảng cáo bị trừ **ngay tại trang tìm kiếm Google** khi người dùng click vào quảng cáo. Vì vậy, để bảo vệ 100% ngân sách không bị đối thủ đốt tiền, bạn cần áp dụng **Bộ giải pháp 3 lớp** dưới đây.

---

## LỚP 1: Chặn IP & Chống Spam Ngay Trên Website (Đã Cài Đặt Sẵn)

Hệ thống website đã được tích hợp sẵn lớp bảo vệ tự động (**Next.js Proxy & Security Rate Limiter**):
1. **Tự động chặn click dồn dập (Anti-Spam Rate Limit):** Nếu đối thủ dùng tool tải lại trang liên tục (> 60 lần/phút), website sẽ lập tức ngắt kết nối và hiển thị lỗi `429 - Thao Tác Quá Nhanh`.
2. **Danh sách đen IP (Blacklist):** Khi phát hiện IP của đối thủ, bạn chỉ cần thêm IP vào file cấu hình để cấm cửa vĩnh viễn không cho vào website:
   - Mở file `src/data/config.ts` trên GitHub $\rightarrow$ Bấm cây bút chì ✏️.
   - Tìm mục `security.blockedIps` và dán IP vào:
   ```typescript
   security: {
     blockedIps: [
       "113.190.234.12", // Dán IP kẻ xấu vào đây
       "14.162.155.88",
     ],
     enableRateLimit: true,
     maxRequestsPerMinute: 60,
   },
   ```
   - Bấm **Commit changes** $\rightarrow$ Sau 60 giây, các IP này sẽ bị chặn `403 Forbidden` hoàn toàn.

---

## LỚP 2: Chặn IP Trừ Tiền Trong Google Ads (NƠI QUYẾT ĐỊNH 100% TIỀN)

Để đối thủ **không thể tìm thấy quảng cáo** và **Google không trừ một đồng nào**, bạn bắt buộc phải thêm IP đối thủ vào phần Loại trừ IP của Google Ads:

### Các bước thực hiện:
1. Đăng nhập vào tài khoản **Google Ads** (ads.google.com).
2. Chọn **Chiến dịch** (Campaigns) bạn đang chạy.
3. Vào mục **Cài đặt** (Settings) $\rightarrow$ Bấm vào **Cài đặt bổ sung** (Additional settings).
4. Tìm dòng **Loại trừ IP** (IP exclusions) $\rightarrow$ Bấm chỉnh sửa.
5. Dán các địa chỉ IP của đối thủ vào ô (Mỗi dòng một IP, hoặc dán cả dải IP dạng `113.190.234.*`).
6. Bấm **Lưu (Save)**.
👉 **Kết quả:** Kể từ giây phút này, khi người dùng ở IP đó tìm kiếm từ khóa taxi, Google sẽ **ẨN HOÀN TOÀN quảng cáo của bạn**, đối thủ không thấy thì không bao giờ click được!

---

## LỚP 3: Cài Đặt Chiến Dịch Google Ads Chuẩn Để Triệt Tiêu 90% Click Ảo

Khi tạo chiến dịch quảng cáo Google Ads cho taxi Vĩnh Phúc, hãy luôn cài đặt 3 mẹo kỹ thuật sau:

### 1. Khoanh vùng vị trí hiển thị chuẩn xác (Rất quan trọng):
* Trong cài đặt **Vị trí (Locations)**: Chọn **Tỉnh Vĩnh Phúc** (và có thể thêm Sân bay Nội Bài, các bến xe Hà Nội nếu muốn đón khách về).
* Bấm vào **Tùy chọn vị trí (Location options)**:
  * Chọn: **"Sự hiện diện: Những người đang ở hoặc thường xuyên ở các vị trí của bạn"** *(Presence: People in or regularly in your targeted locations)*.
  * ❌ **TUYỆT ĐỐI KHÔNG CHỌN** dòng "Sự hiện diện hoặc mối quan tâm" *(Presence or Interest)*, vì đối thủ ở Sài Gòn, Đà Nẵng hay nước ngoài vẫn có thể gõ từ khóa và click phá bạn!

### 2. Tắt Mạng hiển thị & Đối tác tìm kiếm:
* Tắt bỏ dấu tích ở **"Mạng hiển thị của Google" (Display Network)** và **"Bao gồm đối tác tìm kiếm" (Search Partners)**.
* Chỉ để quảng cáo xuất hiện trực tiếp trên kết quả tìm kiếm chính thức của Google Search.

### 3. Xem báo cáo "Lượt nhấp không hợp lệ" (Invalid Clicks):
* Google có thuật toán AI tự động phát hiện các lượt click bất thường cùng 1 người/thiết bị trong ngày.
* Tiền của các lượt click tặc này sẽ được Google **tự động hoàn trả lại 100%** vào ngân sách quảng cáo của bạn (bạn có thể kiểm tra cột "Lượt nhấp không hợp lệ" trong báo cáo chiến dịch).

---

## LỚP 4: Bật Cloudflare Chống Bot Tự Động (Miễn Phí)

Nếu bạn cấu hình tên miền qua Cloudflare:
1. Vào Cloudflare $\rightarrow$ Chọn tên miền `taxidienvinhphuc.com`.
2. Vào mục **Security** $\rightarrow$ **Bots**.
3. Bật tính năng **Bot Fight Mode** $\rightarrow$ Hệ thống sẽ tự động quét và chặn đứng các phần mềm giả lập, tool auto-click của đối thủ trước khi chúng kịp chạm tới web.
