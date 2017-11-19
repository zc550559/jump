var WallLayer = cc.Layer.extend({
	lastLand : null,
	end : 0,
	ctor : function(){
		this._super();

		this.scheduleUpdate();
	},
	update : function(){
		if(this.lastLand==null||this.end<cc.winSize.width){
			var land = new LandLayer();
			land.createLand(this.end+50);
			this.addChild(land);
			this.lastLand = land;
		}
		if(this.lastLand!=null){
			this.end = this.lastLand.x + this.lastLand.width;
		}
	}
});