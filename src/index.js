let dogDiv = document.getElementById("dog-image-container")
let dogUl = document.getElementById("dog-breeds")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let filterDropDrown = document.getElementById("breed-dropdown")

fetch(imgUrl)
.then(resp => resp.json())
.then((dogsObj) => {

    dogsObj.message.forEach(dog => {
        createDog(dog)
    });
    
})

function createDog(dog){
    let dogImage = document.createElement("img")
        dogImage.src = dog
        dogImage.style.width = "500px"
        dogImage.style.height = "375px"
        dogDiv.append(dogImage)
}

fetch(breedUrl)
.then(resp => resp.json())
.then((breeds) => {

    Object.keys(breeds.message).forEach(breed => {
       createBreed(breed)
    });
})

function createBreed(breed){
    let breedLi = document.createElement("li")
    breedLi.textContent = breed
    dogUl.append(breedLi)

    breedLi.addEventListener("click", () => {
        if (breedLi.style.color === "purple"){
         breedLi.style.color = "black"
        } else {
            breedLi.style.color = "purple"
        }
    })
    
    // filterDropDrown.addEventListener("change", (event) => {
    //     
    // })
}
// const select = document.querySelector("#breed-dropdown");
const selectOption = filterDropDrown.querySelectorAll("option");

filterDropDrown.addEventListener("change", (e) => {
    let individualBreed = dogUl.querySelectorAll("li")
    individualBreed.forEach(li =>{
        if (event.target.value !== li.innerText[0]){
             li.style.display = "none"
        }

    })

});

