const container = document.querySelector(".container")

let pixels = []

const randomizeColor = function(element) {
    let c1 = Math.floor(Math.random()*255)
    let c2 = Math.floor(Math.random()*255)
    let c3 = Math.floor(Math.random()*255)
    element.style.backgroundColor = `rgb(${c1},${c2},${c3})`
}

function generatePixels(k){         // generates an array of k^2 divs with class pixel
   pixels = []
    if(k>100){
        k=100
    }
    for(let i=0;i<k**2;i++){
        let pixel = document.createElement("div")
        pixel.addEventListener("mouseover", function(){
            randomizeColor(pixel)
        })
        
        pixel.classList.add("pixel")
        pixels.push(pixel)
    }

    
    while(container.lastElementChild){
        container.removeChild(container.lastElementChild)
    }   //clear the grid container

    pixels.forEach(pixel =>  {
        container.appendChild(pixel)
    })

    container.style.gridTemplateColumns = `repeat(${k}, 1fr)`
   
}

