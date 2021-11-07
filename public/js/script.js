window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const d = new Date("2021/11/11 2:11:11.111Z");
    const n = new Date();
    const c = Math.ceil(d.getTime() - n.getTime());
    if (c > 0) {
      $("#countdown").text(`${
        Math.floor(c / (1000 * 60 * 60 * 24))
      }日${
        Math.floor((c - (Math.floor(c / (1000 * 60 * 60 * 24)) * (1000 * 60 * 60 * 24))) / (1000 * 60 * 60))
      }時間${
        Math.floor((c - (Math.floor(c / (1000 * 60 * 60)) * (1000 * 60 * 60))) / (1000 * 60))
      }分${
        Math.floor((c - (Math.floor(c / (1000 * 60)) * (1000 * 60))) / (1000))
      }秒${
        Math.floor(c - (Math.floor(c / (1000)) * (1000)))
      }`)
    } else {
      $("#countdown").text("時間になりました");
    }
  }, 1);
})
