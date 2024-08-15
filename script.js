




function myFunc(e){


  console.log("hiii i am clicked")
  let container= document.querySelector('.container')
  let div= document.createElement('div')
  div.classList.add("sketchlinetogle")
  container.appendChild(div)
  container.firstChild.remove()

    
}


function myFuncCircle(e){
  console.log("hiii i am clicked")
  let container= document.querySelector('.container')
  let div= document.createElement('div')
  
  div.classList.add("sketchcircletogle")
  container.appendChild(div)
  container.firstChild.remove()

  
  
}

function myFuncOvel(e){
  
  console.log("hiii i am clicked")
  let container= document.querySelector('.container')
  let div= document.createElement('div')
  div.classList.add("sketchoveltogle")
  container.appendChild(div)
  container.firstChild.remove()

  
  
}
function myFuncRect(){

  console.log("hiii i am clicked")
  let container= document.querySelector('.container')
  let div= document.createElement('div')
  div.classList.add("sketchrectangletogle")
  container.appendChild(div)
  container.firstChild.remove()

}

function myFuncsquare(){

  console.log("hiii i am clicked")
  let container= document.querySelector('.container')
  let div= document.createElement('div')
  div.classList.add("sketchsquaretogle")
  container.appendChild(div)
  container.firstChild.remove()

}

function myFuncTriangle(){

  console.log("hiii i am clicked")
  let container= document.querySelector('.container')
  let div= document.createElement('div')
  div.classList.add("sketchtriangletogle")
  container.appendChild(div)
  container.firstChild.remove()

}


let reset= document.getElementById('reset')
reset.addEventListener('click',()=>{
  let container= document.querySelector('.container')
    container.innerHTML=' '
  
})
