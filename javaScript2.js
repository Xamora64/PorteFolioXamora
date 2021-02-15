function fonctionSecretCode(){
	let i=window.prompt ("1+1=?", "");
	if (i=="2"){
		window.alert("Vous avez votre Bac !");
	}
	else{
		fonctionSecretCode();
	}
}
window.onload = fonctionSecretCode();

function fonctionClicIllusion(){
	let illusionJs=document.querySelector("#illusionJs");
	if (i==0){
		illusionJs.setAttribute("src","illusion-optique-08.jpg");
		i=1;
	}
	else {
		illusionJs.setAttribute("src","illusion-optique-09.jpg");
		i=0;
	}
}
var i = 0;
let illusionJs=document.querySelector("#illusionJs");
illusionJs.addEventListener("click",fonctionClicIllusion);
