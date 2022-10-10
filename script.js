// import { PageFlip } from "page-flip";

document.addEventListener("DOMContentLoaded", function () {
  const pageFlip = new St.PageFlip(document.getElementById("demoBookExample"), {
    width: 550, // base page width
    height: 553, // base page height

    size: "stretch",
    // set threshold values:
    minWidth: 315,
    maxWidth: 1000,
    minHeight: 420,
    maxHeight: 1350,

    maxShadowOpacity: 0.5, // Half shadow intensity
    showCover: true,
    mobileScrollSupport: false, // disable content scrolling on mobile devices
  });

  // load pages
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  // document.querySelector(".page-total").innerText = pageFlip.getPageCount();
  // document.querySelector(".page-orientation").innerText =
  //   pageFlip.getOrientation();

  // triggered by page turning
  pageFlip.on("flip", (e) => {
    var audio = document.getElementById("player");

    // you can probably load this from an array of songs URL that you can maintain
    console.log(audio);
    const num = Math.floor(e.data / 2 + 1);
    audio.src = `Song${num}.mp3`;
    audio.load();
    audio.play();
    console.log(e.data);
    // document.querySelector(".page-current").innerText = e.data + 1;
  });

  // triggered when the state of the book changes
  // pageFlip.on("changeState", (e) => {
  //    document.querySelector(".page-state").innerText = e.data;
  // });

  // triggered when page orientation changes
  // pageFlip.on("changeOrientation", (e) => {
  //   document.querySelector(".page-orientation").innerText = e.data;
  // });
});
