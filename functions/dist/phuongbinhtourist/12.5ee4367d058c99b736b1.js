(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{IZ9w:function(l,n,t){"use strict";t.r(n);var o=t("CcnG"),u=function(){return function(){}}(),e=t("pMnS"),i=t("ZYCi"),a=t("Ip0R"),c=t("4GxJ"),r=function(){function l(l,n){this.platformId=l,this.router=n,this.scrolled=!1,this.awake=!1,this.display=!1,this.logo="/assets/images/logo.png",this.collapsed=!0}return l.prototype.onWindowScroll=function(){Object(a.isPlatformBrowser)(this.platformId)&&(this.scrolled=window.scrollY>60,this.awake=window.scrollY>100,window.scrollY>100?(this.logo="/assets/images/logo.png",this.display=!0):(this.logo="/assets/images/logo.png",this.display=!1))},l.prototype.scrollTop=function(){window.scroll({top:0,left:0,behavior:"smooth"})},l.prototype.toggleCollapsed=function(){this.collapsed=!this.collapsed},l.prototype.ngOnInit=function(){var l=this;this.router.events.subscribe(function(){l.collapsed=!0})},l}(),d=o["\u0275crt"]({encapsulation:0,styles:[["nav[_ngcontent-%COMP%]{z-index:1000}nav[_ngcontent-%COMP%]:not(.scrolled)   .nav-item[_ngcontent-%COMP%]{border:1px solid transparent;margin-right:10px}nav[_ngcontent-%COMP%]:not(.scrolled)   .nav-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]:not(.scrolled)   .nav-item[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:color(phuongbinh)!important}nav[_ngcontent-%COMP%]:not(.scrolled)   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:.9rem!important;padding-bottom:.9rem!important}nav[_ngcontent-%COMP%]:not(.scrolled)   .nav-item[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{cursor:pointer;color:#8c8c8c}nav[_ngcontent-%COMP%]:not(.scrolled)   .nav-item[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{color:color(phuongbinh)!important;background:0 0!important}.dropdown-item[_ngcontent-%COMP%]{width:unset;margin-left:20px;margin-right:20px;padding-left:0;padding-right:0}.dropdown-item[_ngcontent-%COMP%]:hover{color:color(phuongbinh)!important;background:0 0!important}#normalItem[_ngcontent-%COMP%]{border-bottom:1px solid #8c8c8c}@media screen and (max-width:576px){.logo[_ngcontent-%COMP%]{width:60px!important}}.navbar-toggler[_ngcontent-%COMP%]{background:0 0;border:none}.navbar-collapse[_ngcontent-%COMP%]{transition:height 2s linear 1s;height:0}.navbar-collapse[_ngcontent-%COMP%]:not(.collapse){height:auto;transition:height 2s linear 1s}.navbar-toggler[_ngcontent-%COMP%]:active, .navbar-toggler[_ngcontent-%COMP%]:focus{outline:0}.navbar-toggler[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]{display:block;width:22px;height:2px;border-radius:1px;margin:4px 0;transition:all .2s}.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]{background:#8c8c8c}.scrolled.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]{background:color(phuongbinh)!important}.navbar-toggler[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]:nth-of-type(1){-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:10% 10%;transform-origin:10% 10%}.navbar-toggler[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]:nth-of-type(2){opacity:0;filter:alpha(opacity=0)}.navbar-toggler[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]:nth-of-type(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:10% 90%;transform-origin:10% 90%}.navbar-toggler.collapsed[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]:nth-of-type(1){-webkit-transform:rotate(0);transform:rotate(0)}.navbar-toggler.collapsed[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]:nth-of-type(2){opacity:1;filter:alpha(opacity=100)}.navbar-toggler.collapsed[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%]:nth-of-type(3){-webkit-transform:rotate(0);transform:rotate(0)}#backToTopBtn[_ngcontent-%COMP%]{cursor:pointer;display:block;position:fixed;opacity:0;max-height:40px;bottom:10px;right:10px;z-index:99;outline:0;background:#8c8c8c;color:#fff;padding:10px 15px 15px}.display[_ngcontent-%COMP%]{opacity:1!important;transition-duration:1s}"]],data:{}});function p(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,52,"nav",[["class","navbar navbar-expand-lg navbar-dark pbt_navbar bg-dark pbt-navbar-light pt-0 pb-0"],["id","pbt-navbar"]],[[2,"scrolled",null],[2,"awake",null]],null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,51,"div",[["class","container"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,3,"a",[["class","navbar-brand"],["style","cursor: pointer"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),o["\u0275did"](3,671744,null,0,i.p,[i.n,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](4,1),(l()(),o["\u0275eld"](5,0,null,null,0,"img",[["class","logo"],["width","250px"]],[[8,"src",4]],null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,3,"button",[["aria-controls","pbt-nav"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler"],["data-target","#pbt-nav"],["data-toggle","collapse"],["type","button"]],[[2,"collapsed",null]],[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.toggleCollapsed()&&o),o},null,null)),(l()(),o["\u0275eld"](7,0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),o["\u0275eld"](8,0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,0,"span",[["class","icon-bar"]],null,null,null,null,null)),(l()(),o["\u0275eld"](10,0,null,null,42,"div",[["class","navbar-collapse"],["id","pbt-nav"]],[[2,"collapse",null]],null,null,null,null)),(l()(),o["\u0275eld"](11,0,null,null,41,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),o["\u0275eld"](12,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),o["\u0275eld"](13,0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,14).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),o["\u0275did"](14,671744,null,0,i.p,[i.n,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](15,1),(l()(),o["\u0275ted"](-1,null,["Trang Ch\u1ee7"])),(l()(),o["\u0275eld"](17,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),o["\u0275eld"](18,0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,19).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),o["\u0275did"](19,671744,null,0,i.p,[i.n,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](20,1),(l()(),o["\u0275ted"](-1,null,["Tham kh\u1ea3o"])),(l()(),o["\u0275eld"](22,0,null,null,25,"li",[["class","nav-item dropdown c-pointer"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"]],function(l,n,t){var u=!0;return"keydown.ArrowUp"===n&&(u=!1!==o["\u0275nov"](l,23).onKeyDown(t)&&u),"keydown.ArrowDown"===n&&(u=!1!==o["\u0275nov"](l,23).onKeyDown(t)&&u),"keydown.Home"===n&&(u=!1!==o["\u0275nov"](l,23).onKeyDown(t)&&u),"keydown.End"===n&&(u=!1!==o["\u0275nov"](l,23).onKeyDown(t)&&u),u},null,null)),o["\u0275did"](23,737280,null,3,c.s,[o.ChangeDetectorRef,c.u,a.DOCUMENT,o.NgZone,o.ElementRef,o.Renderer2],null,null),o["\u0275qud"](335544320,1,{_menu:0}),o["\u0275qud"](335544320,2,{_menuElement:0}),o["\u0275qud"](335544320,3,{_anchor:0}),(l()(),o["\u0275eld"](27,0,null,null,3,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle dropdown-toggle"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,28).toggleOpen()&&u),u},null,null)),o["\u0275did"](28,16384,null,0,c.x,[c.s,o.ElementRef],null,null),o["\u0275prd"](2048,[[3,4]],c.t,null,[c.x]),(l()(),o["\u0275ted"](-1,null,["G\xf3i du l\u1ecbch "])),(l()(),o["\u0275eld"](31,0,[[2,0]],null,16,"div",[["class","dropdown-menu p-3"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),o["\u0275did"](32,16384,[[1,4]],1,c.v,[c.s,o.ElementRef,o.Renderer2],null,null),o["\u0275qud"](603979776,4,{menuItems:1}),(l()(),o["\u0275eld"](34,0,null,null,3,"span",[["class","dropdown-item pb-2"],["id","normalItem"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,35).onClick()&&u),u},null,null)),o["\u0275did"](35,16384,null,0,i.o,[i.n,i.a,[8,null],o.Renderer2,o.ElementRef],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](36,1),(l()(),o["\u0275ted"](-1,null,["Trong n\u01b0\u1edbc"])),(l()(),o["\u0275eld"](38,0,null,null,3,"span",[["class","dropdown-item pb-2 pt-2"],["id","normalItem"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,39).onClick()&&u),u},null,null)),o["\u0275did"](39,16384,null,0,i.o,[i.n,i.a,[8,null],o.Renderer2,o.ElementRef],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](40,1),(l()(),o["\u0275ted"](-1,null,["Demo Detail"])),(l()(),o["\u0275eld"](42,0,null,null,3,"span",[["class","dropdown-item pb-2 pt-2"],["id","normalItem"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,43).onClick()&&u),u},null,null)),o["\u0275did"](43,16384,null,0,i.o,[i.n,i.a,[8,null],o.Renderer2,o.ElementRef],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](44,1),(l()(),o["\u0275ted"](-1,null,["Login test"])),(l()(),o["\u0275eld"](46,0,null,null,1,"span",[["class","dropdown-item pt-2"],["id","lastItem"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["\u0110\u1ea1i d\u01b0\u01a1ng"])),(l()(),o["\u0275eld"](48,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),o["\u0275eld"](49,0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,50).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),o["\u0275did"](50,671744,null,0,i.p,[i.n,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](51,1),(l()(),o["\u0275ted"](-1,null,["Li\xean L\u1ea1c"])),(l()(),o["\u0275eld"](53,0,null,null,2,"div",[["id","backToTopBtn"],["title","Go to top"]],[[2,"display",null]],[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.scrollTop()&&o),o},null,null)),(l()(),o["\u0275eld"](54,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o["\u0275eld"](55,0,null,null,0,"i",[["class","far fa-arrow-up"]],null,null,null,null,null))],function(l,n){var t=l(n,4,0,"/");l(n,3,0,t);var o=l(n,15,0,"/");l(n,14,0,o);var u=l(n,20,0,"/booking");l(n,19,0,u),l(n,23,0);var e=l(n,36,0,"/place");l(n,35,0,e);var i=l(n,40,0,"/place/1");l(n,39,0,i);var a=l(n,44,0,"/login");l(n,43,0,a);var c=l(n,51,0,"/contact");l(n,50,0,c)},function(l,n){var t=n.component;l(n,0,0,t.scrolled,t.awake),l(n,2,0,o["\u0275nov"](n,3).target,o["\u0275nov"](n,3).href),l(n,5,0,t.logo),l(n,6,0,t.collapsed),l(n,10,0,t.collapsed),l(n,13,0,o["\u0275nov"](n,14).target,o["\u0275nov"](n,14).href),l(n,18,0,o["\u0275nov"](n,19).target,o["\u0275nov"](n,19).href),l(n,22,0,o["\u0275nov"](n,23).isOpen()),l(n,27,0,o["\u0275nov"](n,28).dropdown.isOpen()),l(n,31,0,!0,o["\u0275nov"](n,32).dropdown.isOpen(),o["\u0275nov"](n,32).placement),l(n,49,0,o["\u0275nov"](n,50).target,o["\u0275nov"](n,50).href),l(n,53,0,t.display)})}var s=function(){function l(){this.logo="/assets/images/logo.png",this.phuongbinh={infor:"M\u1ecdi chi ti\u1ebft vui l\xf2ng li\xean l\u1ea1c v\u1edbi C\xf4ng ty Tr\xe1ch nhi\u1ec7m h\u1eefu h\u1ea1n Th\u01b0\u01a1ng M\u1ea1i v\xe0 Du L\u1ecbch & V\u1eadn T\u1ea3i Ph\u01b0\u01a1ng B\xecnh Tourist. Ch\xfang t\xf4i s\u1ebd ch\u1ee7 \u0111\u1ed9ng li\xean h\u1ec7 v\u1edbi qu\xfd kh\xe1ch h\xe0ng.",address:"112/52/9, Ho\xe0ng Qu\u1ed1c VI\u1ec7t, ph\u01b0\u1eddng An B\xccnh, qu\u1eadn Ninh Ki\u1ec1u, th\xe0nh ph\u1ed1 C\u1ea7n Th\u01a1.",office:"Khu\xf4n vi\xean B\xecnh Ph\xf3 A, ph\u01b0\u1eddng Long Tuy\u1ec1n, qu\u1eadn B\xecnh Thu\u1ef7, th\xe0nh ph\u1ed1 C\u1ea7n Th\u01a1.",phone:"0909 372 319"}}return l.prototype.ngOnInit=function(){},l}(),g=o["\u0275crt"]({encapsulation:0,styles:[['*[_ngcontent-%COMP%]{box-sizing:border-box;font-size:14px}ul[_ngcontent-%COMP%]{list-style:none;padding:0}.top[_ngcontent-%COMP%]{background-color:#252525;color:#959595;padding-top:35px;padding-bottom:45px;border-top:5px solid #395c9c}.top__logo[_ngcontent-%COMP%]{max-width:100%;margin-bottom:10px}.top__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:250px}.top__btn[_ngcontent-%COMP%]{color:#898989;text-decoration:none;padding-right:13px}.top__btn[_ngcontent-%COMP%]:hover{color:#395c9c!important}.top__btn[_ngcontent-%COMP%]:hover::after{border-left:5px solid #395c9c}.top__title[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:20px;font-size:24px;font-weight:700}.top[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;display:block;border-bottom:1px solid #363636;padding:10px 20px 10px 0;font-size:15px;text-decoration:none;color:#959595}.top[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#395c9c}.top[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after{border-left:5px solid #395c9c}.top__social__item[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer;overflow:hidden;width:39px;height:39px;margin:3px}.top__social__item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;font-size:1.6rem;color:#fff}.top__social__item[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{width:100%;height:100%}.top__social__item[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:39px;height:39px}.top__social__item[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .icon--facebook[_ngcontent-%COMP%]{bottom:2%;left:45%}.top__social__item[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .icon--zalo[_ngcontent-%COMP%]{top:25%;left:15%}.top__social__item[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .icon--google[_ngcontent-%COMP%], .top__social__item[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .icon--youtube[_ngcontent-%COMP%]{top:15%;left:10%}.top__social__item[_ngcontent-%COMP%]   .origin[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;background-color:#353535;transition:all .5s}.top__social__item[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;transition:all .5s}.top__social__item[_ngcontent-%COMP%]   .hover--facebook[_ngcontent-%COMP%]{background-color:#4267b2}.top__social__item[_ngcontent-%COMP%]   .hover--zalo[_ngcontent-%COMP%]{background-color:#0fa8e1}.top__social__item[_ngcontent-%COMP%]   .hover--google[_ngcontent-%COMP%], .top__social__item[_ngcontent-%COMP%]   .hover--youtube[_ngcontent-%COMP%]{background-color:#fc000d}.top__social__item[_ngcontent-%COMP%]:hover   .origin[_ngcontent-%COMP%]{bottom:100%}.top__social__item[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%]{top:0}.top__twiter__item[_ngcontent-%COMP%]{padding:8px 0}.top__twiter__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#395c9c;text-decoration:none;margin-right:3px}.top__twiter__item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:12px;color:#464646}.top__twiter__item[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #363636}.top__lable[_ngcontent-%COMP%]{font-size:12px;margin-bottom:4px}.top__input[_ngcontent-%COMP%]{width:100%;font-size:14px;background-color:#101010;color:#555;border:1px solid #343434;padding:10px 50px 10px 10px}.top__input[_ngcontent-%COMP%]:focus{outline:unset}.top__btn-submit[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;background-color:#fb000d;color:#fff;padding:6px 20px;margin-top:15px;font-size:12px;font-weight:700}.top__btn-submit[_ngcontent-%COMP%]:hover{background-color:#395c9c;text-decoration:none}.top__phone[_ngcontent-%COMP%]{font-size:30px;color:#395c9c;padding-top:5px}.top__support[_ngcontent-%COMP%]{color:#555;text-decoration:underline}.top__support[_ngcontent-%COMP%]:hover{text-decoration:none}.top[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-selection{background:#395c9c;color:#fff}.top[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::selection{background:#395c9c;color:#fff}.-triangle[_ngcontent-%COMP%]{cursor:pointer;position:relative}.-triangle[_ngcontent-%COMP%]::after{position:absolute;content:"";top:40%;right:0;border-left:5px solid #898989;border-top:5px solid transparent;border-bottom:5px solid transparent}.bottom[_ngcontent-%COMP%]{background-color:#395c9c;padding:29px 0}.bottom__content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.bottom__left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{cursor:pointer;display:flex;color:#fff;margin:auto 0;font-size:13px;flex-wrap:wrap}.bottom__left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:13px;padding:0 6px;border-left:1.5px solid #fff}.bottom__left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%]{font-weight:700;border-left:unset}.bottom__right[_ngcontent-%COMP%]{color:#fff;font-size:13px}.bottom__right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#fff}']],data:{}});function _(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,83,"div",[["class","top"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,82,"div",[["class","container"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,81,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,9,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,4,"div",[["class","top__logo"]],null,null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==o["\u0275nov"](l,6).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),o["\u0275did"](6,671744,null,0,i.p,[i.n,i.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](7,1),(l()(),o["\u0275eld"](8,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),o["\u0275eld"](9,0,null,null,1,"p",[["class","pt-4"]],null,null,null,null,null)),(l()(),o["\u0275ted"](10,null,["",""])),(l()(),o["\u0275eld"](11,0,null,null,1,"a",[["class","top__btn -triangle"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Xem th\xeam"])),(l()(),o["\u0275eld"](13,0,null,null,38,"div",[["class","col-lg-3 col-sm-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](14,0,null,null,1,"h1",[["class","top__title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Chuy\xean gia du l\u1ecbch "])),(l()(),o["\u0275eld"](16,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),o["\u0275eld"](17,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](18,0,null,null,1,"a",[["class","-triangle"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["V\xe9 m\xe1y bay h\u1ea1ng nh\u1ea5t"])),(l()(),o["\u0275eld"](20,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](21,0,null,null,1,"a",[["class","-triangle"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Tour hi\u1ec7n c\xf3"])),(l()(),o["\u0275eld"](23,0,null,null,28,"div",[["class","top__social"]],null,null,null,null,null)),(l()(),o["\u0275eld"](24,0,null,null,6,"div",[["class","top__social__item"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,null,2,"div",[["class","origin wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](26,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](27,0,null,null,0,"i",[["class","fab fa-facebook-f icon icon--facebook"]],null,null,null,null,null)),(l()(),o["\u0275eld"](28,0,null,null,2,"div",[["class","hover hover--facebook wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](29,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](30,0,null,null,0,"i",[["class","fab fa-facebook-f icon icon--facebook"]],null,null,null,null,null)),(l()(),o["\u0275eld"](31,0,null,null,6,"div",[["class","top__social__item "]],null,null,null,null,null)),(l()(),o["\u0275eld"](32,0,null,null,2,"div",[["class","origin wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](33,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](34,0,null,null,0,"i",[["class","fab fa-google-plus-g icon icon--google"]],null,null,null,null,null)),(l()(),o["\u0275eld"](35,0,null,null,2,"div",[["class","hover hover--google wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](36,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](37,0,null,null,0,"i",[["class","fab fa-google-plus-g icon icon--google"]],null,null,null,null,null)),(l()(),o["\u0275eld"](38,0,null,null,6,"div",[["class","top__social__item"]],null,null,null,null,null)),(l()(),o["\u0275eld"](39,0,null,null,2,"div",[["class","origin wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](40,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](41,0,null,null,0,"i",[["class","fab fa-youtube icon icon--youtube"]],null,null,null,null,null)),(l()(),o["\u0275eld"](42,0,null,null,2,"div",[["class","hover hover--youtube wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](43,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](44,0,null,null,0,"i",[["class","fab fa-youtube icon icon--youtube"]],null,null,null,null,null)),(l()(),o["\u0275eld"](45,0,null,null,6,"div",[["class","top__social__item"]],null,null,null,null,null)),(l()(),o["\u0275eld"](46,0,null,null,2,"div",[["class","origin wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](47,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](48,0,null,null,0,"i",[["class","fab fa-zalo icon icon--zalo"]],null,null,null,null,null)),(l()(),o["\u0275eld"](49,0,null,null,2,"div",[["class","hover hover--zalo wrap"]],null,null,null,null,null)),(l()(),o["\u0275eld"](50,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275eld"](51,0,null,null,0,"i",[["class","fab fa-zalo icon icon--zalo"]],null,null,null,null,null)),(l()(),o["\u0275eld"](52,0,null,null,17,"div",[["class","col-lg-3 col-sm-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](53,0,null,null,1,"h1",[["class","top__title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" \u0110\xe1nh gi\xe1 "])),(l()(),o["\u0275eld"](55,0,null,null,14,"div",[["class","top__twiter"]],null,null,null,null,null)),(l()(),o["\u0275eld"](56,0,null,null,6,"div",[["class","top__twiter__item twiter-1"]],null,null,null,null,null)),(l()(),o["\u0275eld"](57,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["@letuankhoi"])),(l()(),o["\u0275eld"](59,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["\u0110\xe2y l\xe0 m\u1ed9t trang web uy t\xednh, lu\xf4n mang l\u1ea1i ch\u1ea5t l\u01b0\u1ee3ng t\u1ed1t nh\u1ea5t d\xe0nh cho kh\xe1ch h\xe0ng."])),(l()(),o["\u0275eld"](61,0,null,null,1,"div",[["class","time"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["5 ph\xfat tr\u01b0\u1edbc"])),(l()(),o["\u0275eld"](63,0,null,null,6,"div",[["class","top__twiter__item twiter-2"]],null,null,null,null,null)),(l()(),o["\u0275eld"](64,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["@aketa1458"])),(l()(),o["\u0275eld"](66,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["D\u1ecbch v\u1ee5 th\u1eadt s\u1ef1 t\u1ed1t, gi\xe1 th\xe0nh ph\xf9 h\u1ee3p v\u1edbi kh\xe1ch h\xe0ng trong n\u01b0\u1edbc. T\xf4i ngh\u0129 \u0111\xe2y l\xe0 m\u1ed9t s\u1ef1 l\u1ef1a ch\u1ecdn kh\xf4ng t\u1ed3i khi s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Ph\u01b0\u01a1ng B\xecnh"])),(l()(),o["\u0275eld"](68,0,null,null,1,"div",[["class","time"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["2 ng\xe0y tr\u01b0\u1edbc"])),(l()(),o["\u0275eld"](70,0,null,null,13,"div",[["class","col-lg-3 col-sm-12"]],null,null,null,null,null)),(l()(),o["\u0275eld"](71,0,null,null,1,"h1",[["class","top__title"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" B\u1ea3ng tin "])),(l()(),o["\u0275eld"](73,0,null,null,1,"div",[["class","top__lable"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" C\u1ea3m h\u1ee9ng, \xfd t\u01b0\u1edfng, tin t\u1ee9c v\xe0 ph\u1ea3n h\u1ed3i c\u1ee7a b\u1ea1n. "])),(l()(),o["\u0275eld"](75,0,null,null,3,"div",[["class","input"]],null,null,null,null,null)),(l()(),o["\u0275eld"](76,0,null,null,0,"input",[["class","top__input -triangle"],["placeholder","\u0110\u1ecba ch\u1ec9 Email"],["type","email"]],null,null,null,null,null)),(l()(),o["\u0275eld"](77,0,null,null,1,"a",[["class","top__btn-submit"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["G\u1eecI"])),(l()(),o["\u0275eld"](79,0,null,null,1,"h1",[["class","top__phone"]],null,null,null,null,null)),(l()(),o["\u0275ted"](80,null,["",""])),(l()(),o["\u0275eld"](81,0,null,null,2,"div",[["class","support"]],null,null,null,null,null)),(l()(),o["\u0275eld"](82,0,null,null,1,"a",[["class","top__support"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["pkd.phuongbinhtouris@gmail.com"])),(l()(),o["\u0275eld"](84,0,null,null,22,"div",[["class","bottom"]],null,null,null,null,null)),(l()(),o["\u0275eld"](85,0,null,null,21,"div",[["class","container bottom__content"]],null,null,null,null,null)),(l()(),o["\u0275eld"](86,0,null,null,15,"div",[["class","bottom__left"]],null,null,null,null,null)),(l()(),o["\u0275eld"](87,0,null,null,14,"ul",[],null,null,null,null,null)),(l()(),o["\u0275eld"](88,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Copyright \xa9 2019 "])),(l()(),o["\u0275eld"](90,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](91,0,null,null,1,"a",[["class","bold"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["GoCodee"])),(l()(),o["\u0275eld"](93,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](94,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Ch\xednh s\xe1ch b\u1ea3o m\u1eadt"])),(l()(),o["\u0275eld"](96,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](97,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Ch\xfang t\xf4i"])),(l()(),o["\u0275eld"](99,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),o["\u0275eld"](100,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Li\xean l\u1ea1c h\u1ed5 tr\u1ee3"])),(l()(),o["\u0275eld"](102,0,null,null,4,"div",[["class","bottom__right"]],null,null,null,null,null)),(l()(),o["\u0275eld"](103,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Ph\xe1t tri\u1ec3n b\u1edfi "])),(l()(),o["\u0275eld"](105,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["GoCodee"]))],function(l,n){var t=l(n,7,0,"/");l(n,6,0,t)},function(l,n){var t=n.component;l(n,5,0,o["\u0275nov"](n,6).target,o["\u0275nov"](n,6).href),l(n,8,0,t.logo),l(n,10,0,t.phuongbinh.infor),l(n,80,0,t.phuongbinh.phone)})}var h=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),m=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"navbar",[],null,[["window","scroll"]],function(l,n,t){var u=!0;return"window:scroll"===n&&(u=!1!==o["\u0275nov"](l,1).onWindowScroll()&&u),u},p,d)),o["\u0275did"](1,114688,null,0,r,[o.PLATFORM_ID,i.n],null,null),(l()(),o["\u0275eld"](2,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),o["\u0275eld"](3,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o["\u0275did"](4,212992,[["appOutlet",4]],0,i.r,[i.b,o.ViewContainerRef,o.ComponentFactoryResolver,[8,null],o.ChangeDetectorRef],null,null),(l()(),o["\u0275eld"](5,0,null,null,1,"footer",[],null,null,null,_,g)),o["\u0275did"](6,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0),l(n,4,0),l(n,6,0)},null)}function b(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"clients",[],null,null,null,f,m)),o["\u0275did"](1,114688,null,0,h,[],null,null)],function(l,n){l(n,1,0)},null)}var v=o["\u0275ccf"]("clients",h,b,{},{},[]),C=t("9AJC"),M=t("gIcY"),O=function(){return function(){}}(),P=t("8T6J"),k=function(){return function(){}}(),w=function(){return function(){}}();t.d(n,"ClientsModuleNgFactory",function(){return y});var y=o["\u0275cmf"](u,[],function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,v,C.a,C.b,C.h,C.i,C.e,C.f,C.g]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[o.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,M.w,M.w,[]),o["\u0275mpd"](4608,M.d,M.d,[]),o["\u0275mpd"](4608,c.A,c.A,[o.ComponentFactoryResolver,o.Injector,c.kb,c.B]),o["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),o["\u0275mpd"](1073742336,i.q,i.q,[[2,i.w],[2,i.n]]),o["\u0275mpd"](1073742336,O,O,[]),o["\u0275mpd"](1073742336,M.u,M.u,[]),o["\u0275mpd"](1073742336,M.i,M.i,[]),o["\u0275mpd"](1073742336,M.r,M.r,[]),o["\u0275mpd"](1073742336,c.c,c.c,[]),o["\u0275mpd"](1073742336,c.f,c.f,[]),o["\u0275mpd"](1073742336,c.g,c.g,[]),o["\u0275mpd"](1073742336,c.k,c.k,[]),o["\u0275mpd"](1073742336,c.l,c.l,[]),o["\u0275mpd"](1073742336,c.r,c.r,[]),o["\u0275mpd"](1073742336,c.w,c.w,[]),o["\u0275mpd"](1073742336,c.C,c.C,[]),o["\u0275mpd"](1073742336,c.G,c.G,[]),o["\u0275mpd"](1073742336,c.J,c.J,[]),o["\u0275mpd"](1073742336,c.M,c.M,[]),o["\u0275mpd"](1073742336,c.P,c.P,[]),o["\u0275mpd"](1073742336,c.S,c.S,[]),o["\u0275mpd"](1073742336,c.W,c.W,[]),o["\u0275mpd"](1073742336,c.X,c.X,[]),o["\u0275mpd"](1073742336,c.Y,c.Y,[]),o["\u0275mpd"](1073742336,c.D,c.D,[]),o["\u0275mpd"](1073742336,P.a,P.a,[]),o["\u0275mpd"](1073742336,k,k,[]),o["\u0275mpd"](1073742336,w,w,[]),o["\u0275mpd"](1073742336,u,u,[]),o["\u0275mpd"](1024,i.l,function(){return[[{path:"",component:h,children:[{path:"",loadChildren:"../../routes/home/home.module#HomeModule"},{path:"booking",loadChildren:"../../routes/booking/booking.module#BookingModule"},{path:"contact",loadChildren:"../../routes/contact/contact.module#ContactModule"},{path:"place",loadChildren:"../../routes/place/place.module#PlaceModule"}]}]]},[])])})}}]);