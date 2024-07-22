const categoryLabels = document.querySelectorAll('.category-btn')
const imageElCardList = document.getElementsByTagName('img');

categoryLabels.forEach(item => {
    item.addEventListener('click', selectCategory)
}
)

function selectCategory(event) {
    const selectedButton = event.currentTarget.value;

    hideImgCards(imageElCardList);

    [...imageElCardList].forEach(img => {
        const imgCategory = img;

        if (selectedButton == imgCategory.id) {
            img.classList.remove("d-none")
            //console.log(`selectedButton: ${selectedButton} loadedCards: ${imgCategory.id}`)
        } else if (selectedButton == "show-all") {
            showImgCards(imageElCardList)
        } else {
            //console.log(`cards not loaded: ${imgCategory.id}`)
        }
    })
}

function hideImgCards(imageElCardArray) {
    [...imageElCardArray].forEach(img => {
        img.classList.add("d-none")
    }
    )
}

function showImgCards(imageElCardArray) {
    [...imageElCardArray].forEach(img => {
        img.classList.remove("d-none")
    }
    )
}

//hideImgCards(imageElCardList);

