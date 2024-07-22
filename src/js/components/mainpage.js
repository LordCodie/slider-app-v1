import database from '../js/modules/database.js'
import { startSlideButton } from './slideshow.js'

const frontPageArray = document.getElementsByTagName('img')
const navBarEl = document.getElementById('menu-container')

function renderMainImg(alt) {
    const mainPageArray = database.gallery;
    mainPageArray.forEach((element, index) => {
        if (element.model == alt) {
            element.src.forEach(imgsrc => {
                const categoryId = renderCoverCategory(index);
                imageElement(imgsrc, categoryId);
            })
        }
    });
}

function imageElement(galleyPageArraySrc, galleyPageArrayCategory) {
    const img = document.createElement('img');
    img.className = "rounded img-fluid d-block my-3 shadow image-card";
    img.src = galleyPageArraySrc
    img.id = galleyPageArrayCategory;
    document.getElementById('image-main-page-container').appendChild(img);
}

function headingElement(modelNameText) {
    /*
        <div class="col my-3">
        </div>
     */
    const div = document.createElement('div');
    div.className = "col my-3 d-flex align-items-baseline"
    document.getElementById('image-main-page-container').appendChild(div);

    /* 
            <button type="button" class="btn btn-outline-secondary">Back</button>
    */

    const button = document.createElement('button');
    button.className = "btn btn-outline-secondary ";
    button.setAttribute("type", "button");
    button.textContent = "Back";
    div.appendChild(button);
    button.addEventListener('click', () => {
        location.reload();
    })

    /*
            <h1 class="display-6 text-center">Gallery Images of model name</h1>
     */
    const h1 = document.createElement('p')
    h1.className = "h6 text-center px-2"
    h1.textContent = `Gallery Images of ${modelNameText}`
    div.appendChild(h1)

    const startSlideBtn = startSlideButton(modelNameText);
    document.getElementById('image-main-page-container').appendChild(startSlideBtn)

    return div
}

function renderCoverCategory(index) {
    const frontPageArrayId = database.gallery.map(element => element.category);
    return frontPageArrayId[index];
}

[...frontPageArray].forEach(img => {
    img.addEventListener('click', selectModelPage)
})

function selectModelPage(event) {
    const selectedImageEl = event.currentTarget.alt;

    navBarEl.classList.add("d-none")

    hideImgCards(frontPageArray);

    headingElement(selectedImageEl);

    renderMainImg(selectedImageEl);

    const imageMainPageContainerEl = document.getElementById('image-main-page-container').getElementsByTagName('img');

    [...imageMainPageContainerEl].forEach(img => {
        img.addEventListener('click', (event) => {
            const tagetImage = img
            function openFullscreen() {
                if (tagetImage.requestFullscreen) {
                    tagetImage.requestFullscreen();
                } else if (tagetImage.webkitRequestFullscreen) { /* Safari */
                    tagetImage.webkitRequestFullscreen();
                } else if (tagetImage.msRequestFullscreen) { /* IE11 */
                    tagetImage.msRequestFullscreen();
                }
            }
            openFullscreen()
        })
    })
}

function hideImgCards(frontPageArray) {
    [...frontPageArray].forEach(img => {
        img.classList.add("d-none")
    }
    )
}

