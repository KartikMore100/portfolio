logo = document.getElementById("logo")
slide = document.getElementById("myport")
downLoadBtn = document.getElementById("downloadbtn")
moon = document.getElementById("div1")
sun = document.getElementById("div2")
karu = document.getElementById("karu")
element = document.getElementById("element")
dev = document.getElementById("dev")
sec2 = document.getElementById("sec2")
main = document.getElementById("main")
abt = document.getElementById("abt")
sec3 = document.getElementById("sec3")
sec4 = document.getElementById("sec4")
pro = document.getElementById("project")
msc = document.getElementById("msc")

logo.addEventListener("click", function(){
    slide.style.display = "block"
})

downLoadBtn.addEventListener("click",function(){
    var downloadLink = document.createElement("a")
    downloadLink.href = "Kartik.More(final resume).pdf"
    downloadLink.download = "Kartik.MoreResume.pdf"
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)

})

moon.addEventListener("click", function(){
    document.body.style.backgroundColor = "#fff"
    karu.style.color = "rgb(44, 104, 169)"
    element.style.color = "rgb(44, 104, 169)"
    dev.style.backgroundColor = "#fff"
    sec2.style.backgroundColor = "#fff"
    sec3.style.backgroundColor = "#fff"
    sec4.style.backgroundColor = "#fff"
    main.style.backgroundColor = "#fff"
    abt.style.color = "rgb(44, 104, 169)"
    pro.style.color = "rgb(44, 104, 169)"
    div1.style.display = "none"
    div2.style.display = "block"
    msc.style.color = "rgb(44, 104, 169)"
})


sun.addEventListener("click", function(){
    document.body.style.backgroundColor = "rgb(6, 41, 79)"
    karu.style.color = "#fff"
    element.style.color = "#fff"
    dev.style.backgroundColor = "rgb(6, 41, 79)"
    sec2.style.backgroundColor = "rgb(6, 41, 79)"
    sec3.style.backgroundColor = "rgb(6, 41, 79)"
    sec4.style.backgroundColor = "rgb(6, 41, 79)"
    main.style.backgroundColor = "rgb(6, 41, 79)"
    abt.style.color = "#fff"
    pro.style.color = "#fff"
    div2.style.display = "none"
    div1.style.display = "block"
    msc.style.color = "#fff"

})