void function(){var externalObjectLoader,found,frame,frameId,frames,onloadScript,w;onloadScript=function(){var defaultConfig,key,timer,w;if(w=window,w!==w.parent&&(w=window.parent,window.BOOMR=w.BOOMR,window.Groupon=w.Groupon,window.OptimizeSuite=w.OptimizeSuite,window.applicationConfig=w.applicationConfig),defaultConfig={user_ip:BOOMR.utils.getCookie("b"),beacon_url:"/analytic/view.gif",BW:{enabled:!1},DNS:{enabled:!1},autorun:!1},"undefined"!=typeof applicationConfig&&null!=applicationConfig)for(key in applicationConfig)null!=applicationConfig[key]&&(defaultConfig[key]=applicationConfig[key]);BOOMR.init(defaultConfig),null!=BOOMR.t_lstart&&BOOMR.addVar("t_lstart",BOOMR.t_lstart);for(timer in BOOMR.gtimers)BOOMR.addVar(timer,BOOMR.gtimers[timer]);return BOOMR.subscribe("before_beacon",function(performance){var pageData;return null!=OptimizeSuite.TrackingHub.page&&(pageData=OptimizeSuite.TrackingHub.page.data(),BOOMR.addVar("page_channel",null!=pageData.channel?pageData.channel:""),BOOMR.addVar("page_country",null!=pageData.country?pageData.country:""),BOOMR.addVar("page_division",null!=pageData.division?pageData.division:""),BOOMR.addVar("page_type",null!=pageData.type?pageData.type:"")),OptimizeSuite.TrackingHub.add("performance",{performance:performance})}),BOOMR.t_end=(new Date).getTime(),BOOMR.addVar("t_end",BOOMR.t_end),null!=BOOMR.t_done?(BOOMR.plugins.RT.endTimer("t_done",BOOMR.t_done),BOOMR.page_ready()):void 0},frameId="boomr-if-as",externalObjectLoader=function(url,onloadScript,id){var doc,dom,error,iframe,where;null==id&&(id="js-iframe-async"),iframe=document.createElement("iframe"),iframe.src="javascript:false",iframe.title="",iframe.role="presentation",(iframe.frameElement||iframe).style.cssText="width: 0;height: 0;border: 0",iframe.frameBorder=0,where=document.getElementsByTagName("script"),where=where[where.length-1],where.parentNode.insertBefore(iframe,where);try{doc=iframe.contentWindow.document}catch(e$){error=e$,dom=document.domain,iframe.src="javascript: var d = document.open();d.domain='"+dom+"';void(0);",doc=iframe.contentWindow.document}return doc.open()._load3po=function(){var js,scriptInit;return null!=dom&&(this.domain=dom),scriptInit=this.createElement("script"),scriptInit.type="text/javascript",scriptInit.text="Groupon = window.parent.Groupon;$ = window.parent.$",this.body.appendChild(scriptInit),js=this.createElement("script"),js.type="text/javascript",js.id=id,js.src=url,null!=onloadScript&&(js.onload=onloadScript),this.body.appendChild(js)},doc.write('<body onload="document._load3po();">'),doc.close()},w=window,w!==w.parent&&(w=window.parent),frames=w.frames,found=!1;for(var i$=0,length$=frames.length;length$>i$;++i$){frame=frames[i$];try{if(null!=("undefined"!=typeof frame&&null!=frame?frame.frames["boomr-if-as"]:void 0)){found=!0;break}}catch(e$){}}found||externalObjectLoader(Groupon.Performance.boomerangUrl,onloadScript,frameId)}.call(this);