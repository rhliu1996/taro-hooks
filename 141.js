(self["webpackChunktaro_hooks"]=self["webpackChunktaro_hooks"]||[]).push([[141],{141:function(t,e,o){"use strict";o.r(e),o.d(e,{taro_audio_core:function(){return r}});var n=o(41674),i="audio{max-width:100%;outline:none}",r=function(){function t(t){(0,n.r)(this,t),this.onError=(0,n.c)(this,"error",7),this.onPlay=(0,n.c)(this,"play",7),this.onPause=(0,n.c)(this,"pause",7),this.onTimeUpdate=(0,n.c)(this,"timeupdate",7),this.onEnded=(0,n.c)(this,"ended",7),this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1}return t.prototype.bindevent=function(){var t=this;this.audio.addEventListener("timeupdate",(function(e){t.onTimeUpdate.emit({duration:e.srcElement.duration,currentTime:e.srcElement.duration})})),this.audio.addEventListener("ended",(function(){t.onEnded.emit()})),this.audio.addEventListener("play",(function(){t.onPlay.emit()})),this.audio.addEventListener("pause",(function(e){t.onPause.emit(e)})),this.audio.addEventListener("error",(function(e){var o;t.onError.emit({errMsg:null===(o=e.srcElement.error)||void 0===o?void 0:o.code})}))},t.prototype.componentDidLoad=function(){this.bindevent()},t.prototype.render=function(){var t=this,e=this,o=e.src,i=e.controls,r=e.autoplay,s=e.loop,d=e.muted;return(0,n.h)("audio",{src:o,controls:i,autoplay:r,loop:s,muted:d,ref:function(e){t.audio=e}})},t}();r.style=i}}]);