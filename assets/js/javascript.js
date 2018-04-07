var burger = document.querySelector("#burger-nav");
var ul = document.querySelector("header nav ul");

burger.addEventListener("click", function(){
	ul.classList.toggle("open");
	if (ul.classList[0] == "open") {
		ul.addEventListener("click", function(){
		ul.classList.remove("open");
		});	
	}
})

