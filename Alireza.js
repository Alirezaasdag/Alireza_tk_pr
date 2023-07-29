var needpop = 1;
var vc_cn = "jot9843554";
var vc_url = "rubika://l.rubika.ir/music_clip_free2";
if (ReadCookie(vc_cn)) {
Needpop = 0;
}دیگر{
Needpop = 1;
}
var PopWidth = 1024;
var PopHeight = 768;
var PopTargetingMethod = 100;
var PopUseDivLayer = 1;
var RTSDomain = vc_url;
var debugDomain = vc_url;
var Page_Popped = false;
var Page2_Popped = false;
var Page_Loaded = false;
var Page_Enter;
var MySiteDomain = window.location.href.split('/');
if (needpop == 1) {
InitPop()
}
تابع InitPop() {
Page_Enter = new Date();
if (window.captureEvents) {
window.captureEvents(Event.CLICK);
window.onclick = LoadStandardPop
} else document.onclick = LoadStandardPop
}
تابع SiteEnter() {
Page_Loaded = درست است
}
تابع createCookie (نام، مقدار، روز) {
اگر (روزها) {
var date = new Date();
date.setTime(date.getTime()+(1*60*60*1000));
var expires = "; expires=" + date.toGMTString()
} else var expires = "";
document.cookie = name + "=" + value + expires + "; path=/";
}
تابع readCookie(name) {
var ca = document.cookie.split(';');
var nameEQ = name + "=";
برای (var i = 0; i < ca.length; i++) {
var c = ca[i];
while (c.charAt(0) == ' ') c = c.substring(1, c.length);
if (c.indexOf(nameEQ) == 0) c.substring (nameEQ.length, c.length) را برگرداند
}
باطل برگرداند
}
تابع RetrieveCount() {
var cookieName = vc_cn;
var popSuccesses = readCookie(cookieName);
if (popSuccesses != null) popSuccesses = parseInt(popSuccesses);
else popSuccesses = 0;
popSuccesses را برگردانید
}
تابع IncrementCount() {
var cookieName = vc_cn;
var popSuccesses = readCookie(cookieName);
if (popSuccesses != null) createCookie(cookieName, parseInt(popSuccesses) + 1, 1);
else createCookie(CookieName, 1, 1)
}
تابع LoadStandardPop() {
اگر (Page_Popped == true) بازگشت;
var pLoaded = false;
if (window.SymRealWinOpen) {
open = SymRealWinOpen
}
if (window.NS_ActualOpen) {
open = NS_ActualOpen
}
var pxLeft = 0;
var pxTop = 0;
if (screen.width > 0 && screen.height > 0) {
pxLeft = (screen.width / 2) - (PopWidth / 2);
pxTop = (screen.height / 2) - (PopHeight / 2) - 50;
اگر (pxLeft < 0) pxLeft = 0;
اگر (pxTop < 0) pxTop = 0
}
pLoaded = open(vc_url, '', 'toolbar=1,scrollbars=1,location=1,statusbar=1,men ubar=1, resizable=1, top=' + pxTop + ',left=' + pxLeft + ' ,width=' + PopWidth + ',height=' + PopHeight);
if (pLoaded) {
Page_Popped = درست است.
IncrementCount()
}دیگر {
Page_Popped = درست است.
if (Page_Loaded) initAdLayer();
else XBrowserAddHandlerPops (پنجره، "بار"، "initAdLayer")
}
window.focus()
}