let acardionTitle = document.querySelector(".acardion__title")

acardionTitle.addEventListener("click", function (el) {
	let acardion__content = document.querySelector(".acardion__content")
	acardion__content.style.cssText = `display: block;
    transition: all 0.8s;`
})

let liItems = document.querySelectorAll(".acardion__content-item")
liItems.forEach(itemLi => {
	itemLi.addEventListener("click", function (el) {
		let acardion__content = document.querySelector(".acardion__content")
		acardion__content.style.cssText = `display: none;
    transition: all 0.8s;`
    itemLi.classList.add("item__hover");
    console.log(itemLi);
    acardionTitle. = itemLi;
	})
    console.log(itemLi);
})
