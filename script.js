const qr_img = document.getElementById("qr_img");
const qr_text = document.getElementById("qr_text");
const sizes = document.getElementById("sizes");
const btn = document.getElementById("btn");

function gen_qr() {
  console.log("clicked");

  if (qr_text.value.length > 0) {
    const Q_R = qr_text.value;
    console.log(Q_R);
    qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Q_R}`;
    img_box.classList.add("shown-img");
  } else {
    qr_text.classList.add("error");
    setTimeout(() => {
      qr_text.classList.remove("error");
    }, 1000);
  }
}

btn.addEventListener("click", gen_qr);
