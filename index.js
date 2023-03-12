let select = document.querySelector("#zengin")
let normal = document.querySelector("#normal")

let container = document.querySelector(".container")

select.addEventListener("mouseenter",()=>{
    let random = Math.floor( Math.random() * 1000  )
    let random2 = Math.floor( Math.random() * 600  )
   


    select.style.position = "absolute"
    select.style.left= `${random}px`
    select.style.top= `${random2}px`
})


normal.addEventListener("click",()=>{
    container.innerHTML = `<h1>Çok Mantıklı Bir Seçim</h1> `
})