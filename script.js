const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 270)

    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (3 + clickCounter) + (3 - widthRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 270}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0 ;
        }
    });
});

/* dark mode js start */
const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.filter select,.movie-list-title");
ball.addEventListener("click" , function(){
    items.forEach((item) => item.classList.toggle("active"));
})
/* dark mode js end */