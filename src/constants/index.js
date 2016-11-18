/*
 	constants
 */

export const isView = document.body.scrollTop || document.documentElement.scrollTop;

export const serviceUrl = 'http://localhost:3000'

export const addListenEvent = (target, type, func) => {
	if (target.addEventListener) {
		//监听IE9，谷歌和火狐 
		target.addEventListener(type, func, false);
	} else if (target.attachEvent) {
		target.attachEvent("on" + type, func);
	} else {
		target["on" + type] = func;
	}
}