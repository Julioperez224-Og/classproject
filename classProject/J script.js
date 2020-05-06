var images = document.querySelectorAll("#puzzle img");
var active = document.querySelector(".active");
var contains_active = document.querySelectorAll("img .active");
var x_holder 
var y_holder
var checker = document.querySelectorAll("#checker img");
var footer = document.querySelector("footer");
var rules = document.createElement("h2");
var text = document.createTextNode("Click two squares to swap the image locations. Keep doing so until the real image is create. ")
var winElement = document.createElement("h1")
var win = document.createTextNode("YOU WIN! PROCEED TO THE NEXT LEVEL!")
var counter = 0
var level2 = document.querySelector("#level_4")

rules.appendChild(text);
footer.appendChild(rules);
footer.style.marginTop = "20px"
footer.style.textAlign = "center"

for(var i = 0; i < images.length;i++){
        
        images[i].addEventListener("click", function(e){
        this.classList.toggle("active");
        
        contains_active = document.querySelectorAll("div .active");
        if(contains_active.length === 2)
        {
           x_holder = contains_active[1].src;
            contains_active[1].src = contains_active[0].src;
            contains_active[0].src = x_holder;
            contains_active[0].classList.remove("active");
            contains_active[1].classList.remove("active");
        }

        if((images[J 0].src === checker[J 0].src) && (images[J 1].src === checker[J 1].src) && (images[J 2].src === checker[J 2].src) && (images[J 3].src === checker[J 3].src)
        && (images[J 4].src === checker[J 4].src) && (images[J 5].src === checker[J 5].src) && (images[J 6].src === checker[J 6].src) && (images[J 7].src === checker[J 7].src)
        && (images[J 8].src === checker[J 8].src)){
            level3.href = "#";
            level3.style.color = "green";
            level3.style.fontSize = "30px"
            winElement.append(win);
            footer.appendChild(winElement);
            footer.style.display = "flex";
            footer.style.flexDirection = "column";
        }
    });
}
console.log(images.src)