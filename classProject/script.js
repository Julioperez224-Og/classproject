var images = document.querySelectorAll("#puzzle img");
var active = document.querySelector(".active");
var contains_active = document.querySelectorAll("img .active");
var x_holder 
var y_holder
var checker = document.querySelectorAll("#checker img");
var footer = document.querySelector("footer");
var rules = document.createElement("h2");
var text = document.createTextNode("Click two squares to swap the image locations. Keep doing so until the real image is create. ");
var winElement = document.createElement("h1");
var win = document.createTextNode("YOU WIN! PROCEED TO THE NEXT LEVEL!");

var copyright = document.createTextNode("Copyright 2020 Group Project");
var counter = 0
var level2 = document.querySelector("#level_2");

rules.appendChild(text);
footer.appendChild(rules);
footer.style.marginTop = "20px"
footer.style.textAlign = "center"

for(var i = 0; i < images.length;i++){
    images[i].addEventListener("click", function(e){
        this.classList.toggle("active");
        
        contains_active = document.querySelectorAll("div .active");
        if(contains_active.length === 2){
           x_holder = contains_active[1].src;
            contains_active[1].src = contains_active[0].src;
            contains_active[0].src = x_holder;
            contains_active[0].classList.remove("active");
            contains_active[1].classList.remove("active");
        }

        if((images[0].src === checker[0].src) && (images[1].src === checker[1].src) && (images[2].src === checker[2].src) && (images[3].src === checker[3].src)
        && (images[4].src === checker[4].src) && (images[5].src === checker[5].src) && (images[6].src === checker[6].src) && (images[7].src === checker[7].src)
        && (images[8].src === checker[8].src)){
            level2.href = "T index.html";
            level2.style.color = "green";
            level2.style.fontSize = "30px"
            winElement.append(win);
            winElement.append(copyright);
            footer.appendChild(winElement);
            footer.style.display = "flex";
            footer.style.flexDirection = "column";
        }
    });
}



console.log(images.src)

