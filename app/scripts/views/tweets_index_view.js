Alarma.TweetsIndexView = Ember.View.extend({
	didScroll: function(){
		if(this.isScrolledToBottom()){
			this.get('controller').send('getMore');
		}
	},
	
	isScrolledToBottom: function(){
		var topViewportPosition = window.pageYOffset;
		console.log('topViewport ' + topViewportPosition);
		var viewportMaxGap = ($(document).height() - $(window).height());
		console.log('gap ' + viewportMaxGap);
		if (topViewportPosition === 0){
			return false;
		}
		return topViewportPosition > (viewportMaxGap-100);
	},
	
	didInsertElement: function(){
		console.log('insert');
		$(window).on('scroll', $.proxy(this.didScroll, this));
	},
	
	willDestroyElement: function(){
		console.log('destroy');
		$(window).off('scroll', $.proxy(this.didScroll, this));
	}
	
});