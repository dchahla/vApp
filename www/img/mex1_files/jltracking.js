function onReady(e){var t=document.addEventListener||document.attachEvent,c=document.removeEventListener||document.detachEvent;eventName=document.addEventListener?"DOMContentLoaded":"onreadystatechange",t.call(document,eventName,function(){c.call(document,eventName,arguments.callee,!1),e()},!1)}function Tracker(e){var t=this;t.access_token=e.cid,t.user_id=""!==e.user_id?e.user_id:"no-user",t.explicit="undefined"==typeof e.explicit?!1:e.explicit,t.feed_id="undefined"==typeof e.feed_id||""==e.feed_id?"any_feed":e.feed_id,t.clicked="function"==typeof e.clicked?e.clicked:function(){},t.purchased="function"==typeof e.purchased?e.purchased:function(){},t.explicit||onReady(function(){t.act()})}JL={tracking:function(e){JL.tracker=new Tracker(e)}},Tracker.prototype.act=function(){var e=this;e.performAction(e.action_url)},Tracker.prototype.click=function(e){var t=this;t.performAction(t.click_url,e)},Tracker.prototype.purchase=function(e){var t=this;t.performAction(t.purchase_url,e)},Tracker.prototype.performAction=function(e,t){if(t){var c=this;t.constructor===Array?c.action(e,t):"undefined"!=typeof t.deal_id&&null!=t.deal_id&&""!=t.deal_id&&c.action(e,[t])}},Tracker.prototype.action=function(e,t){var c=this,n=e+"/"+c.user_id,r="undefined"!=typeof did?n+"/"+did:n,o=r+"?access_token="+c.access_token,a=o+"&data="+c.serialize(t),i=a+"&fid="+c.feed_id,d=i+"&r_source="+window.location.host+window.location.pathname;c.jsonp(d)},Tracker.prototype.convertDealData=function(e){for(var t={},c=0;c<e.length;c++){var n=e[c].count&&"number"==typeof e[c].count?e[c].count:1;t[e[c].deal_id]=n}return t},Tracker.prototype.serialize=function(e){var t=this;return encodeURIComponent(JSON.stringify(t.convertDealData(e)))},Tracker.prototype.jsonp=function(e){var t=document.createElement("script");t.type="text/javascript",t.src=e,t.async=!0,document.getElementsByTagName("head")[0].appendChild(t)},Tracker.prototype.purchase_url="https://api.jetlore.com/track/purch",Tracker.prototype.click_url="https://api.jetlore.com/track/click",Tracker.prototype.action_url="https://api.jetlore.com/track/action",Tracker.prototype.cookie_name="jl_tracking";
