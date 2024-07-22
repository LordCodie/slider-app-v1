import database from '../js/modules/database.js'

const frontPageArray = document.getElementsByTagName('img')

export function createCarousel(galleyPageArraySrc) {

    /*
    <div class="full-screen-overlay active">
    </div>
    */

    const parentDiv = document.createElement('div')
    parentDiv.className = "my-3 full-screen-overlay active"
    parentDiv.id = "carousel-parent"
    //parentDiv.className = "full-screen-overlay active"


    /*
        <div id="carouselExample" class="carousel slide">
        </div>
    */
    const carouselExample = document.createElement('div')
    carouselExample.className = "carousel slide"
    carouselExample.id = "carouselExample"
    parentDiv.appendChild(carouselExample)

    /*
            <div class="carousel-inner">
            </div>
    */
    const carouselInner = document.createElement('div')
    carouselInner.className = "carousel-inner"
    carouselExample.appendChild(carouselInner)

    /*
                <div class="carousel-item active">
                </div>
    */
    // const carouselItemActive = document.createElement('div')
    // carouselItemActive.className = "carousel-item"
    // carouselInner.appendChild(carouselItemActive)
    
    /*
                    <img src="https://cdni.pornpics.com/1280/7/725/20476808/20476808_044_a025.jpg" 
                    class="border rounded d-block w-100" alt="...">
    */      
                    galleyPageArraySrc.forEach((src, index) => {
                        const carouselItem = document.createElement('div');
                        carouselItem.className = index === 0 ? "carousel-item active" : "carousel-item";
                        const img = document.createElement('img');
                        img.src = src;
                        img.className = "border rounded d-block w-100";
                        img.alt = "...";
                        carouselItem.appendChild(img);
                        carouselInner.appendChild(carouselItem);
                    });

    carouselExample.appendChild(closeCarousel())
    
    /*
    <button class="carousel-control-prev" type="button" 
    data-bs-target="#carouselExample" data-bs-slide="prev">
    </button>
    */
    const prevButton = document.createElement('button')
    prevButton.className = "carousel-control-prev"
    prevButton.setAttribute("type", "button")
    prevButton.setAttribute("data-bs-target", "#carouselExample")
    prevButton.setAttribute("data-bs-slide", "prev")
    carouselExample.appendChild(prevButton)

    /*
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    */
    const prevIcon = document.createElement('span')
    prevIcon.className = "carousel-control-prev-icon"
    prevIcon.setAttribute("aria-hidden", "true")
    prevButton.appendChild(prevIcon)

    /*
        <span class="visually-hidden">Previous</span>
    */
    const visuallyPrevHiddenSpan = document.createElement('span')
    visuallyPrevHiddenSpan.className = "visually-hidden"
    visuallyPrevHiddenSpan.textContent = "Previous"
    prevButton.appendChild(visuallyPrevHiddenSpan)

    /*
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    </button>   
    */
    const nextButton = document.createElement('button')
    nextButton.className = "carousel-control-next"
    nextButton.setAttribute("type", "button")
    nextButton.setAttribute("data-bs-target", "#carouselExample")
    nextButton.setAttribute("data-bs-slide", "next")
    carouselExample.appendChild(nextButton)

    /*
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    */
    const nextIcon = document.createElement('span')
    nextIcon.className = "carousel-control-next-icon"
    nextIcon.setAttribute("aria-hidden", "true")
    nextButton.appendChild(nextIcon)

    /*
        <span class="visually-hidden">Next</span>
    */
    const visuallyNextHiddenSpan = document.createElement('span')
    visuallyNextHiddenSpan.className = "visually-hidden"
    visuallyNextHiddenSpan.textContent = "Next"
    nextButton.appendChild(visuallyNextHiddenSpan)

    return parentDiv
}

export function closeCarousel() {
    /*
    <div class="col d-flex justify-content-center">
    </div>
     */

    const parentDiv = document.createElement("div")
    parentDiv.className = "col d-flex justify-content-center cancel-button-overlay"

    /*
        <button type="button" class="btn">
        </button>
     */

        const button = document.createElement("button")
        button.className = "btn"
        button.addEventListener('click', () => {
            const carouselElement = document.getElementById('carousel-parent')
            carouselElement.classList.remove('active')
        })
        parentDiv.appendChild(button)

    /*
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            <span>
     */

            const span = document.createElement("span")
            span.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#DC2626" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg> `
            button.appendChild(span)

    return parentDiv
}

export function startSlideButton(modelNameText) {

    /*
    <div class="col">
    <div>
    */

    const div = document.createElement('div')
    div.className = "col d-flex align-items-baseline"
    document.getElementById('image-main-page-container').appendChild(div)

    /*
        <button type="button" class="btn btn-outline-secondary w-100">
        </button>
    */

    const button = document.createElement('button')
    button.setAttribute("type", "button")
    button.className = "btn btn-outline-secondary w-100"
    button.addEventListener('click', () => {
        document.getElementById('image-slideshow-page-container').innerHTML = '';
        const elements = document.getElementById("image-main-page-container").querySelectorAll('img');
        const imgArray = Array.from(elements)

        const imgSrcArray = imgArray.map(img => img.src);

        console.log()

        if (imgSrcArray.length > 0) {
            // Create the carousel with the images
            const carousel = createCarousel(imgSrcArray);
            document.getElementById('image-slideshow-page-container').appendChild(carousel);
        } else {
            console.log('No images found');
        }

        // [...element].forEach(img => {
        //     const imgArray = img
        //     createCarousel(imgArray)
        //     console.log(img)
        // })
        // 
        // document.getElementById('image-slideshow-page-container').appendChild(createCarousel())
    })
    div.appendChild(button)

    /*
        <small>Show ${model Name} Slide</small>
    */
    const small = document.createElement('small')
    small.textContent = `Show Slide Images of ${modelNameText}`
    button.appendChild(small)

    /*
        <span></span>
    */
    const span = document.createElement('span')
    span.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
        </svg>
        `
    button.appendChild(span)

    return div
}



