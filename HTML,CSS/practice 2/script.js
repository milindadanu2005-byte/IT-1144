const title=document.getElementById("title");
const btn=document.getElementById("btn");

btn.addEventListener("click", function(){
	title.textContent="Register Sucessfully";
	title.style.color="red";
});