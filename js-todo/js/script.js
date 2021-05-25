var todo = document.querySelector(".todo")
var input = document.querySelector("input")
var button = document.querySelector("button")
var div = document.querySelector("div")
button.setAttribute("id","btn")
input.setAttribute("id","inp")


button.addEventListener("click",function(event){
    var del = document.createElement("button")
    var save = document.createElement("button")
    del.setAttribute("class", "delete")
    save.setAttribute("class","save")
    del.innerHTML="delete"
    save.innerText="!"
  var elem = document.createElement("li")
  elem.innerHTML=input.value
  elem.style.listStyle="none"
  document.body.appendChild(elem)
  elem.appendChild(del)
  elem.appendChild(save)
  elem.setAttribute("class","list")
  event.stopPropagation()
  elem.addEventListener("click",function(event){
      elem.classList.toggle("underline")
      event.stopPropagation()

  })
  
  var saves =document.querySelector(".save")

  saves.addEventListener("click", function(event){

    elem.style.color="red"
    
   event.stopPropagation()
  })

  var deleted =document.querySelector(".delete")

  deleted.addEventListener("click", function(event){
    elem.style.display="none"
    event.stopPropagation()
  })
})

