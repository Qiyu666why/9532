document.addEventListener("DOMContentLoaded", function() {
    const galleryElement = document.getElementById("gallery");
    const numberOfImages = 93; // 从 0.jpg 到 93.jpg，共 94 张图片

    for (let i = 0; i < numberOfImages; i++) {
        const photoItem = document.createElement("div");
        photoItem.className = "photo-item";

        const img = document.createElement("img");
        img.src = `photo/${i}.jpg`;
        img.alt = `照片 ${i}`;

        photoItem.appendChild(img);
        galleryElement.appendChild(photoItem);
    }

    // 点击照片时放大显示
    const photoItems = document.querySelectorAll(".photo-item");
    photoItems.forEach(item => {
        item.addEventListener("click", function(e) {
            const img = this.querySelector("img");
            const fullScreenImg = document.createElement("img");
            fullScreenImg.src = img.src;
            fullScreenImg.style.position = "fixed";
            fullScreenImg.style.top = "0";
            fullScreenImg.style.left = "0";
            fullScreenImg.style.width = "100%";
            fullScreenImg.style.height = "100%";
            fullScreenImg.style.objectFit = "contain";
            fullScreenImg.style.zIndex = "100";
            fullScreenImg.style.cursor = "pointer";
            document.body.appendChild(fullScreenImg);

            // 点击可关闭
            fullScreenImg.addEventListener("click", function() {
                document.body.removeChild(this);
            });
        });
    });
});