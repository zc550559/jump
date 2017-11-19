var GameScene = cc.Scene.extend({
	ctor : function(){
		this._super();

		var wall = new WallLayer();
		this.addChild(wall);

		var hero = new HeroLayer();
		this.addChild(hero);
	}
});