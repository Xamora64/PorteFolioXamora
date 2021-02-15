var imagePresent=0;
function imageChangementPlus() {
	if (imagePresent==0){
		imagePresent=1;
		imageJeu.setAttribute("src","Plateformer2.JPG");
		document.getElementById("numeroImageJs").innerHTML = imagePresent + 1;
	}
	else if (imagePresent==1){
		imagePresent=2;
		imageJeu.setAttribute("src","Plateformer3.JPG");
		document.getElementById("numeroImageJs").innerHTML = imagePresent + 1;
	}
	else if (imagePresent==2){
		imagePresent=0;
		imageJeu.setAttribute("src","Plateformer1.JPG");
		document.getElementById("numeroImageJs").innerHTML = imagePresent + 1;
	}
}
let imageJeu=document.querySelector("#imageJeu");
imageBoutonPlus.addEventListener("click",imageChangementPlus);

function imageChangementMoins() {
	if (imagePresent==0){
		imagePresent=2;
		imageJeu.setAttribute("src","Plateformer3.JPG");
		document.getElementById("numeroImageJs").innerHTML = imagePresent + 1;
	}
	else if (imagePresent==1){
		imagePresent=0;
		imageJeu.setAttribute("src","Plateformer1.JPG");
		document.getElementById("numeroImageJs").innerHTML = imagePresent + 1;
	}
	else if (imagePresent==2){
		imagePresent=1;
		imageJeu.setAttribute("src","Plateformer2.JPG");
		document.getElementById("numeroImageJs").innerHTML = imagePresent + 1;
	}
}
imageBoutonMoins.addEventListener("click",imageChangementMoins);
