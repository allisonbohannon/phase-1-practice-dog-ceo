//console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    //fetchImages()
    fetchBreedList(); 
}); 


function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => renderPictures(data.message))
}

function renderPictures(array) {
    for (index in array) {
        console.log(array[index]); 
        const img = document.createElement('img');
        img.src = array[index];  
        document.getElementById('dog-image-container').appendChild(img); 
    }
}

function fetchBreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        renderBreedList(data.message); 
    })
}

function renderBreedList(array) {
    for (breed in array) {
        const listItem = document.createElement('li'); 
        listItem.textContent = breed; 
        listItem.addEventListener('click', (e) => {
            e.target.style.color = 'blue'; 
        })
        document.getElementById('dog-breeds').appendChild(listItem); 
    }

    const dropDown = document.getElementById("breed-dropdown"); 
    dropDown.addEventListener('change', (e) => {
        console.log(e.target.value)
        console.log(array)
        const container = document.getElementById('dog-breeds');
        container.innerHTML = ''; 
        const newArr = []; 
        for (breed in array) {
            if (breed[0] === e.target.value) {
                newArr.push(breed); 
            }
        }
        newArr.forEach(breed => {
            const listItem = document.createElement('li'); 
            listItem.textContent = breed; 
            listItem.addEventListener('click', (e) => {
            e.target.style.color = 'blue'; 
            })
            document.getElementById('dog-breeds').appendChild(listItem); 
        })

    })
}

