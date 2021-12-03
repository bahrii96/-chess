const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
//  const image= document.createElement("img")
// const gallery = document.querySelector(".js-gallery")


const refs = {
  gallery: document.querySelector(".js-gallery"),
  // image: document.createElement("img"),
  lightbox: document.querySelector(".js-lightbox"),
  btn: document.querySelector('.lightbox__button'),
  modal: document.querySelector(".lightbox__content"),
  lightbox__image: document.querySelector(".lightbox__image"),
};
const cardGallery = creategalleryItems(galleryItems);
// console.log(cardGallery);
refs.gallery.insertAdjacentHTML("afterbegin", cardGallery)
refs.gallery.addEventListener("click", openModalWindow)
refs.btn.addEventListener("click",closeModalWindow )

function creategalleryItems(cards) {
  return cards.map(card =>`
  <li class="gallery__item">
  <a
     class="gallery__link"
     ${card.original}
   >
     <img
       class="gallery__image"
        src=${card.preview}
        data-source= ${card.original}
        alt=${card.description}
      />
    </a>
  </li>`).join("")
}
function openModalWindow(event) {
  const isgalleryImageEl = event.target.classList.contains('gallery__image')
  // console.log( isgalleryImageEl);
  if (!isgalleryImageEl) {
    return
  }
  //  console.log( event.target.data-source);
  else if (isgalleryImageEl){
    refs.lightbox.classList.add("is-open");
    refs.lightbox__image.src = event.target.getAttribute("data-source");
    refs.lightbox__image.alt = event.target.alt;
  }
 
  }
function closeModalWindow(event) {
  // event.preventDefault();
  const btnEl = event.target
  const parentBtnEl = btnEl.closest(".is-open")
  parentBtnEl.classList.remove("is-open")
     refs.lightbox__image.src = '';
  refs.lightbox__image.alt = '';
   
  
  
 }