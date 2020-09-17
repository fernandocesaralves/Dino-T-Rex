var personagem = document.getElementById("personagem");

var block = document.getElementById("block");

function jump() {
	if(personagem.classList != "animacao") {
		personagem.classList.add("animacao");
	}
	setTimeout(function(){
		personagem.classList.remove("animacao");
	},500);
}

var checarMorte = setInterval(function(){
	var personagemTop = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft<20 && blockLeft>0 && personagemTop>= 130) {
		block.style.animacao = "none";
		block.style.display = "none";
		alert("Você perdeu!");
	}
}, 10);

