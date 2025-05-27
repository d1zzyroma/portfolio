
import itemTwo from "../img/My-project/js-jpg/5_1.jpg"
import ItemTwoSecond from "../img/My-project/js-jpg/5_2.jpg"
import itemLast from "../img/My-project/js-jpg/7_1.jpg"
import ItemLastSecond from "../img/My-project/js-jpg/7_2.jpg"
// import mimino from "../img/My-project/js-jpg/mimino.jpg"
// import miminoRetina from "../img/My-project/js-jpg/mimino-2x.jpg"
// import power from "../img/My-project/js-jpg/power.jpg"
// import powerRetina from "../img/My-project/js-jpg/power-2x.jpg"
// import starlight from "../img/My-project/js-jpg/starlight.jpg"
// import starlightRetina from "../img/My-project/js-jpg/starlight-2x.jpg"
// import vyshyvanka from "../img/My-project/js-jpg/vyshyvanka.jpg"
// import vyshyvankaRetina from "../img/My-project/js-jpg/vyshyvanka-2x.jpg"
import icon from "../img/symbol-defs.svg"



const arr = [

    {
        src: `${itemTwo}`,
        retina: `${ItemTwoSecond}`,
        alt: "Attention to every detail"
    },
    {
        src: `${itemLast}`,
        retina: `${ItemLastSecond}`,
        alt: "Door painting"
    },
    // {
    //     src: `${mimino}`,
    //     retina: `${miminoRetina}`,
    //     alt: "mimino website"
    // },
    // {
    //     src: `${power}`,
    //     retina: `${powerRetina}`,
    //     alt: "power pulse webservice"
    // },
    // {
    //     src: `${starlight}`,
    //     retina: `${starlightRetina}`,
    //     alt: "starlight studio landing page"
    // },
    // {
    //     src: `${vyshyvanka}`,
    //     retina: `${vyshyvankaRetina}`,
    //     alt: "vyshyvanka vibes Landing Page"
    // },
]

const btn = document.querySelector(".load-more-btn");
const imageList = document.querySelector(".image-list");

let index = 0;

btn.addEventListener("click", handleClick); 

function handleClick() {
    loadImages();
}

function loadImages () {
    for (let i = 0; i < 3; i++) {
        if (index >= arr.length) {
            btn.style.display = "none";
            return;
        }
        imageList.insertAdjacentHTML("beforeend", renderImage(arr[index]))
        index++;
    }
    

}

function renderImage(array) {
    return `
            <li class="image-item">
        

            <div class="img-cont">
              <img src="${array.src}" alt="" width="540">
              <img src="${array.retina}" alt="" width="540">
            </div>
            
            <div class="link-wrapper">
              <p class="img-naming">${array.alt}</p>
            </div>
      </li>
        `
}