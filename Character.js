var Character = function(id, clazz){
	var x=0;
	var y=0;
	position = parseInt(Math.random()%2);
	if(position==0){
		
	}
	
	//Create the ennemy node
	var block = $('<div id="'+clazz+'-'+id+'" class="character '+clazz+'"><div class="life"><div class="bar"></div></div><div class="speak"></div><div class="body"></div></div>');
	alert("#"+window.room);
	$("#"+window.room).append(block);
	this.id = id;
	this.maxLife=3;
	this.life=3;
	this.htmlElement=$("#"+clazz+"-"+id);
	this.life_htmlElement=this.htmlElement.find(".bar").first();
	console.log(this.type+" "+id+" created ("+this.life+"HP)");
	
	
};
Character.prototype.die = function(){
	this.htmlElement.addClass("dead");
	console.log("character "+this.id+" dies");
};
Character.prototype.updateDisplay = function(){
	var lifeProportion = (100/this.maxLife)*this.life;
	this.life_htmlElement.css("width",lifeProportion+"%");
	if(this.life==0){
		this.die();
	}
}
Character.prototype.loseLife = function(){
	if(this.life > 0){
		this.life--;
		console.log("character "+this.id+" is hurt ("+this.life+"HP remaining)");
		this.updateDisplay();
	}
}
Character.prototype.debug = function(){
	console.log("character-"+this.id+" ("+this.life+"/"+this.maxLife+"HP)");
};


Character.prototype.goTo = function(){
	
};
