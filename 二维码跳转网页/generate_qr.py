import qrcode

# 你的网页链接
url = "https://your-username.github.io/your-repo-name"

# 生成二维码
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

# 保存二维码为图片
img = qr.make_image(fill_color="black", back_color="white")
img.save("qrcode.png")

print("二维码已生成并保存为 qrcode.png")