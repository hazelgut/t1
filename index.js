const slider = document.querySelector("carousel-slider");

const btnWrapper = document.createElement("div");

const btn = document.createElement("button")
btn.textContent = "change";
btn.style.padding = "4px 12px";
btn.addEventListener("click", (e) => {
    /** @type {HTMLElement}*/
    const sliderItem = document.querySelector(".slider-item");
    if(!sliderItem.dataset.current) {
        sliderItem.setAttribute("data-current","true");
        return;
    }
    delete sliderItem.dataset.current;
})

const btnNext = document.createElement("button");
btnNext.textContent = "next";
btnNext.style.padding = "4px 12px";
btnNext.addEventListener("click", (e) => {
    let currentSlideEl = document.querySelector("[data-current]");
    let nextEl = currentSlideEl.nextElementSibling;
    delete currentSlideEl.dataset.current;
    if(!nextEl) {
        document.querySelector(".slider-item").dataset.current = "";
        return;
    }
    nextEl.dataset.current = "";
})

btnWrapper.append(btn);
btnWrapper.append(btnNext);
document.querySelector(".container").append(btnWrapper);