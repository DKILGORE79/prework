document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "200px"
})

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue"
})

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0"
})

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "100",
    document.getElementById("box").style.backgroundColor = "orange",
    document.getElementById("box").style.height = "150px",
    document.getElementById("box").style.width = "150px"
})

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.height= "100px"
})

document.getElementById("button6").addEventListener("click", function(){
    document.getElementById("box").style.width= "100px"
})