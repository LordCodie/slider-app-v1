import database from '../js/modules/database.js'

export function renderCoverImg() {
    const frontPageArray = database.gallery;
    frontPageArray.forEach((element, index) => {
        const imgSrc = element.src[0];
        const categoryId = renderCoverCategory(index);
        const uniqueId = renderCoverUid(index)
        imageElement(imgSrc, categoryId, uniqueId);
    });
}

function imageElement(frontPageArraySrc, frontPageArrayCategory, frontPageArrayUniqueId) {
    const img = document.createElement('img');
    img.className = "rounded img-fluid d-block my-3 shadow image-card";
    img.src = frontPageArraySrc;
    img.id = frontPageArrayCategory;
    img.alt = frontPageArrayUniqueId;
    document.getElementById('image-home-page-container').appendChild(img);
}

function renderCoverCategory(index) {
    const frontPageArrayId = database.gallery.map(element => element.category);
    return frontPageArrayId[index];
}

function renderCoverUid(index) {
    const frontPageArrayId = database.gallery.map(element => element.model);
    return frontPageArrayId[index];
}

// Call the renderCoverImg function to render images
renderCoverImg();
