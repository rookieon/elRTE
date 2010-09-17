(function($) {

	/**
	 * @class Set/unset italic text
	 * @author Dmitry (dio) Levashov, dio@std42.ru
	 **/
	elRTE.prototype.commands.italic = function() {
		this.title     = 'Italic';
		this.nodeName  = 'em';
		this.regExp    = /^(I|EM)$/;
		this.cssProp   = 'font-style';
		this.cssVal    = 'italic';
		this.shortcut  = 'ctrl+i';
		this.test      = $.proxy(this.rte.mixins.textElement.test, this);
		this.unwrap    = $.proxy(this.rte.mixins.textElement.unwrap, this);
		this.wrap      = $.proxy(this.rte.mixins.textElement.wrap, this);
		this._exec     = $.proxy(this.rte.mixins.textElement.exec, this);
		this._getState = $.proxy(this.rte.mixins.textElement.state, this);
		
		this.rte.mixins.textElement.init.call(this);
	}

})(jQuery);