const btn= document.getElementById("login");


function pop(){
let   name=document.getElementById("name").value;
document.getElementById("result").innerText("Hello"+ name);
}


btn.addEventListener("click",function(){
	 alert("Login Sucessful");
});




