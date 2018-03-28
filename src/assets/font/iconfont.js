(function(window){var svgSprite='<svg><symbol id="icon-mediafromall" viewBox="0 0 1024 1024"><path d="M671.452595 847.913563 145.104819 847.913563c-45.01217 0-81.629135-41.745776-81.629135-93.084025L63.475683 263.029602c0-51.337225 36.616966-93.084025 81.629135-93.084025l526.346753 0c45.01217 0 81.629135 41.745776 81.629135 93.084025l0 80.709183 138.970098-102.353133c13.616112-10.004865 32.223912-10.441816 46.230927-1.104147 12.673647 8.487302 20.194948 23.207561 20.194948 39.400359L958.476681 737.786373c0 16.21531-7.521301 30.93557-20.148899 39.400359-14.007015 9.338692-32.638351 8.924253-46.276976-1.104147L753.081731 673.729451l0 81.100086C753.081731 806.167786 716.464765 847.913563 671.452595 847.913563zM145.104819 217.051431c-18.72241 0-34.524305 21.045315-34.524305 45.978171l0 491.799936c0 24.932856 15.801894 45.978171 34.524305 45.978171l526.346753 0c18.72241 0 34.524305-21.045315 34.524305-45.978171L705.975876 580.530816l206.109218 151.804405-0.713244-446.673156-205.395974 151.275355L705.975876 263.029602c0-24.932856-15.801894-45.978171-34.524305-45.978171L145.104819 217.051431z"  ></path></symbol><symbol id="icon-i-back" viewBox="0 0 1024 1024"><path d="M932.039565 483.875452 163.745365 483.875452l350.590843-311.627437c11.008728-9.784854 12.000312-26.6428 2.215458-37.651528-9.7869-11.005658-26.63973-11.999288-37.652552-2.214435L74.241888 492.064972c-5.693676 5.062296-8.950859 12.31549-8.950859 19.934005s3.257184 14.871709 8.950859 19.934005l404.65825 359.684966c5.080715 4.51585 11.405771 6.735401 17.708314 6.735401 7.352455 0 14.675234-3.022847 19.944238-8.950859 9.784854-11.008728 8.79327-27.865651-2.215458-37.652552L160.472831 537.214265l771.566734 0c14.729469 0 26.669406-11.94096 26.669406-26.669406C958.708971 495.815389 946.769035 483.875452 932.039565 483.875452z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M1013.101773 969.343159l-270.108516-238.934304c74.060603-77.673315 119.918741-182.675051 119.918741-298.398384C862.882863 193.7754 669.719293 0 432.241728 0 194.764162 0 1.571457 193.7754 1.571457 432.01047c0 238.118531 193.192705 432.01047 430.670271 432.01047 99.145645 0 190.337497-34.145958 263.203574-90.783964l272.526702 241.381626c6.263977 6.263977 14.39258 9.381398 22.579452 9.381398 8.128603 0 16.34461-3.117421 22.521182-9.381398C1025.542322 1002.119783 1025.542322 981.841978 1013.101773 969.343159zM65.376618 432.01047c0-202.92372 164.582354-368.0305 366.865109-368.0305 202.341025 0 366.865109 165.10678 366.865109 368.0305s-164.524085 367.972231-366.865109 367.972231C229.958972 799.982701 65.376618 634.934191 65.376618 432.01047z" fill="" ></path></symbol><symbol id="icon-clock" viewBox="0 0 1024 1024"><path d="M488 609.6c0 13.6 11.2 24 24 24 13.6 0 24-11.2 24-24V244c0-13.6-11.2-24-24-24-13.6 0-24 11.2-24 24v365.6z" fill="" ></path><path d="M481.6 471.2c-8.8-10.4-24-11.2-34.4-2.4-10.4 8.8-11.2 24-2.4 34.4l170.4 195.2c8.8 10.4 24 11.2 34.4 2.4 10.4-8.8 11.2-24 2.4-34.4L481.6 471.2z" fill="" ></path><path d="M502.4 990.4C238.4 990.4 24 775.2 24 512S238.4 34.4 502.4 34.4c263.2 0 478.4 214.4 478.4 478.4-0.8 262.4-215.2 477.6-478.4 477.6z m0-908.8C264.8 81.6 71.2 274.4 71.2 512s193.6 430.4 430.4 430.4 430.4-193.6 430.4-430.4-192.8-430.4-429.6-430.4z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)