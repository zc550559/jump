var HeroLayer = cc.Layer.extend({
	ctor : function(){
		this._super();

		var hero = cc.Sprite.create("res/hero.png"); 
		hero.setPosition(cc.p(100,100));
		this.addChild(hero);
	}
});