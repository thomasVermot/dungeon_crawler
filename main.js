"use strict"; 
$(document).ready(function(){


	/*var ennemy1 = new Ennemy(1);
	$(ennemy1.htmlElement).click(function(){
		ennemy1.loseLife();
	});*/

//On declare un tableau de Character
var ennemies = [];
for(var i=0; i<1; i++){
	ennemies[i] = new Character(i, "ennemy");
}
$('.ennemy .body').click(function(){
	var completeId = $(this).parent().attr('id');
	var id = getElementId(completeId);
	ennemies[id].loseLife();
});

});
