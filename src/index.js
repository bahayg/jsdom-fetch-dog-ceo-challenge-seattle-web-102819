console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

getImage()
getBreed()

function getImage() {
    fetch (imgUrl) 
    .then (res => res.json())
    .then (data => showImage(data.message))
}

function showImage(data) {
    data.forEach(img => addImage(img))
}

function addImage(img) {
    const imageContainer = document.getElementById("dog-image-container")
    const image = document.createElement("img")
    image.src = img
    imageContainer.appendChild(image)
}

function getBreed() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => showBreed(Object.keys(data.message)))
}
 
function showBreed(data) {
    data.forEach(breed => addBreed(breed))
    
    const dropDown = document.getElementById("breed-dropdown")
    dropDown.addEventListener("change", function (e) {
    filterBreeds(e.target.value)
    })
}

function addBreed(breed) {
    const ul = document.getElementById("dog-breeds")
    const li = document.createElement("li")
    li.innerText = breed
    li.onclick = function () {
        li.style.color = "blue"
    }
    ul.appendChild(li)
}

function filterBreeds(e) {
    const allBreeds = document.querySelectorAll("#dog-breeds li")
    allBreeds.forEach(breed => { 
        if(e == "all" || e == breed.innerText.slice(0,1)) {
            breed.style.display = "block"
        } else {
            breed.style.display = "none"
        }
    }) 
}









// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// document.addEventListener("DOMContentLoaded", function(){
//     fetch (imgUrl)
//     .then (function(response) {
//         return response.json();
//     })
//     .then (function(data) {
//         return addImage(data);
//     })

//     fetch(breedUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data){
//         return addBreed(data);
//     })

//     const dogBreedContainer = document.querySelector("#dog-breeds");
//     dogBreedContainer.addEventListener("click", function(event){
//         event.target.style.color = "#FF0000";
//     }) 

//     //filter dog breeds based on the letter selected from dropdown
//     // style.visibility only hides the text, but not the element.
//     // style.display can be set to ‘none’, which hides the entire block

//     const letterDropdown = document.querySelector("#breed-dropdown")
//     letterDropdown.addEventListener("change", function(event) {
//         let letterSelect = event.target.value
//         let allBreeds = document.querySelectorAll("#dog-breeds li")
//         allBreeds.forEach( breed => {
//             console.log(breed.textContent.charAt(0))
//         if (letterSelect == "all breeds") {
//             breed.style.display = "block"
//         }
//         else if (breed.textContent.charAt(0) != letterSelect) {
//             breed.style.display = "none"
//         } else {
//             breed.style.display = "block"
//         }
//     })
// })

// })

// function addImage(data) {
//     const imageContainer = document.querySelector("#dog-image-container");
//     data.message.forEach(function(image) {
//         const imageElement = document.createElement("img");
//         imageContainer.appendChild(imageElement).src = image;
//     });
// }

// function addBreed(data) {
//     const breedContainer = document.querySelector("ul#dog-breeds")
//     Object.keys(data.message).forEach(function(breed) {
//         const breedElement = document.createElement("li");
//         breedContainer.appendChild(breedElement).textContent = breed;
//     })

// }