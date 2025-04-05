const nabvarE1 = document.querySelector
(".navbar");

const bottomContainerE1 = document.querySelector(".bottom-container");

console.log(nabvarE1.offsetHeight);
console.log(bottomContainerE1.offsetTop);

window.addEventListener("scroll", () => {
    if(window.scrollY >
        bottomContainerE1.offsetTop - nabvarE1.offsetHeight -50){
            nabvarE1.classList.add("active");
        }else{
            nabvarE1.classList.remove("active");
        }
    });
