/*!
 * create-app.js v0.1.1
 * (c) 2016 Jade Gu
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('history'), require('path-to-regexp')) :
	typeof define === 'function' && define.amd ? define(['history', 'path-to-regexp'], factory) :
	global.App = factory(global.History,global.pathToRegExp);
}(this, function (History,pathToRegExp) { 'use strict';

	History = 'default' in History ? History['default'] : History;
	pathToRegExp = 'default' in pathToRegExp ? pathToRegExp['default'] : pathToRegExp;

	var index = {
		History: History,
		pathToRegExp: pathToRegExp
	};

	return index;

}));