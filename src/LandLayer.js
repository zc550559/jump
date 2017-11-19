var LandLayer = cc.Layer.extend({
	ctor : function(){
		this._super();
		this.y = 10;
		this.scheduleUpdate();
	},
	createLand : function(start){
		var len = Math.ceil(Math.random()*10);
		this.getLand(len);
		this.width = len*10;
		this.x = start;
	},
	getLand : function(num){
		for(var i=0;i<num;i++){
			var l = new cc.Sprite("res/land.png");
			l.x = i*10;
			this.addChild(l);
		}
	},
	update : function(){
		if(this.x+this.width<0){
			this.removeFromParent();
		}else{
			this.x -= 1;
		}
	}
});