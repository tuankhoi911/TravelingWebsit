(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8T6J":function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},Do2H:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var l=t("mrSG"),a=t("Wcq6"),i=t("67Y/"),u=t("6blF"),r=function(){function n(n,e,t){this.angularFireDatabase=n,this.angularFirestore=e,this.basePath="",this.basePath=t}return n.prototype.getAlls=function(){return this.angularFirestore.collection(this.basePath).snapshotChanges().pipe(Object(i.a)(function(n){return n.map(function(n){var e=n.payload.doc.data();return l.__assign({id:n.payload.doc.id},e)})}))||u.a.create()},n.prototype.updateWithId=function(n,e){if(null==e)return null;var t=this.timestamp;return this.angularFirestore.collection(this.basePath).doc(e).set(l.__assign({},n,{createdAt:t}))},n.prototype.update=function(n){this.checkLog(this.basePath,"update"),this.angularFirestore.collection(this.basePath).doc(n.id).update(n)},n.prototype.getById=function(n){return this.angularFirestore.doc(this.basePath+"/"+n).valueChanges()},n.prototype.deleteById=function(n){var e=this.basePath+"/"+n;return this.checkLog(this.basePath,"delete"),this.angularFirestore.doc(e).delete()},n.prototype.create=function(n){var e=this.timestamp;return this.checkLog(this.basePath,"create"),this.angularFirestore.collection(this.basePath).add(l.__assign({},n,{createdAt:e}))},Object.defineProperty(n.prototype,"timestamp",{get:function(){return a.firestore.FieldValue.serverTimestamp()},enumerable:!0,configurable:!0}),n.prototype.updateOrCreate=function(n){var e=this.timestamp;return null==n.id?(this.checkLog(this.basePath,"create"),this.angularFirestore.collection(this.basePath).add(l.__assign({},n,{createdAt:e}))):(this.checkLog(this.basePath,"update"),this.angularFirestore.collection(this.basePath).doc(n.id).set(l.__assign({},n,{createdAt:e})))},n.prototype.setData=function(n,e){this.angularFirestore.collection(this.basePath).doc(n).set(e)},n.prototype.updateElement=function(n,e){return null==n?null:(this.checkLog(this.basePath,"update"),this.angularFirestore.collection(this.basePath).doc(n).update(e))},n.prototype.checkLog=function(n,e){var t=this.timestamp;this.angularFirestore.collection("system").add({collection:n,type:e,createdAt:t})},n}()},abRS:function(n,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"b",function(){return b});var l=t("CcnG"),a=t("xkgV"),i=t("Ip0R"),u=l["\u0275crt"]({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function r(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,e,t){var a=!0;return"keyup.enter"===e&&(a=!1!==l["\u0275nov"](n.parent.parent.parent,1).previous()&&a),"click"===e&&(a=!1!==l["\u0275nov"](n.parent.parent.parent,1).previous()&&a),a},null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var t=e.component;n(e,0,0,t.previousLabel+" "+t.screenReaderPageLabel),n(e,1,0,t.previousLabel),n(e,3,0,t.screenReaderPageLabel)})}function o(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var t=e.component;n(e,1,0,t.previousLabel),n(e,3,0,t.screenReaderPageLabel)})}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,r)),l["\u0275did"](2,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,o)),l["\u0275did"](4,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,2,0,1<l["\u0275nov"](e.parent.parent,1).getCurrent()),n(e,4,0,l["\u0275nov"](e.parent.parent,1).isFirstPage())},function(n,e){n(e,0,0,l["\u0275nov"](e.parent.parent,1).isFirstPage())})}function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],function(n,e,t){var a=!0;return"keyup.enter"===e&&(a=!1!==l["\u0275nov"](n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&a),"click"===e&&(a=!1!==l["\u0275nov"](n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&a),a},null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](2,null,[""," "])),(n()(),l["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,["",""]))],null,function(n,e){n(e,2,0,e.component.screenReaderPageLabel),n(e,4,0,e.parent.context.$implicit.label)})}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](2,null,[""," "])),(n()(),l["\u0275eld"](3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,["",""]))],null,function(n,e){n(e,2,0,e.component.screenReaderCurrentLabel),n(e,4,0,e.parent.context.$implicit.label)})}function d(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,c)),l["\u0275did"](2,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,p)),l["\u0275did"](4,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,2,0,l["\u0275nov"](e.parent.parent,1).getCurrent()!==e.context.$implicit.value),n(e,4,0,l["\u0275nov"](e.parent.parent,1).getCurrent()===e.context.$implicit.value)},function(n,e){n(e,0,0,l["\u0275nov"](e.parent.parent,1).getCurrent()===e.context.$implicit.value,"..."===e.context.$implicit.label)})}function g(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,e,t){var a=!0;return"keyup.enter"===e&&(a=!1!==l["\u0275nov"](n.parent.parent.parent,1).next()&&a),"click"===e&&(a=!1!==l["\u0275nov"](n.parent.parent.parent,1).next()&&a),a},null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var t=e.component;n(e,0,0,t.nextLabel+" "+t.screenReaderPageLabel),n(e,1,0,t.nextLabel),n(e,3,0,t.screenReaderPageLabel)})}function h(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](1,null,[" "," "])),(n()(),l["\u0275eld"](2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,["",""]))],null,function(n,e){var t=e.component;n(e,1,0,t.nextLabel),n(e,3,0,t.screenReaderPageLabel)})}function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,g)),l["\u0275did"](2,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,h)),l["\u0275did"](4,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,2,0,!l["\u0275nov"](e.parent.parent,1).isLastPage()),n(e,4,0,l["\u0275nov"](e.parent.parent,1).isLastPage())},function(n,e){n(e,0,0,l["\u0275nov"](e.parent.parent,1).isLastPage())})}function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](2,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(n()(),l["\u0275ted"](4,null,[" "," / "," "])),(n()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](6,278528,null,0,i.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](8,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,2,0,t.directionLinks),n(e,6,0,l["\u0275nov"](e.parent,1).pages),n(e,8,0,t.directionLinks)},function(n,e){var t=e.component;n(e,0,0,t.screenReaderPaginationLabel,t.responsive),n(e,4,0,l["\u0275nov"](e.parent,1).getCurrent(),l["\u0275nov"](e.parent,1).getLastPage())})}function b(n){return l["\u0275vid"](2,[(n()(),l["\u0275eld"](0,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"]],function(n,e,t){var l=!0;return"pageChange"===e&&(l=!1!==n.component.pageChange.emit(t)&&l),l},null,null)),l["\u0275did"](1,737280,[["p",4]],0,a.d,[a.e,l.ChangeDetectorRef],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange"}),(n()(),l["\u0275and"](16777216,null,null,1,null,m)),l["\u0275did"](3,16384,null,0,i.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,1,0,t.id,t.maxSize),n(e,3,0,!(t.autoHide&&l["\u0275nov"](e,1).pages.length<=1))},null)}},c3RY:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var l=t("mrSG"),a=(t("6233"),t("CqG3"),function(n){function e(e,t){var l=n.call(this,e,t,"tour")||this;return l.angularFireDatabase=e,l.angularFirestore=t,l}return l.__extends(e,n),e}(t("Do2H").a))},gYN0:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){function n(n,e,t){this.meta=n,this.titleService=e,this.doc=t}return n.prototype.generateTags=function(n){(n=Object.assign({title:"Ph\u01b0\u01a1ng B\xecnh | Tin \u0111\u0103ng du lich, c\xe1c g\xf3i du l\u1ecbch v\xe0 k\xec ngh\u1ec9 d\xe0i, ng\u1eafn h\u1ea1n.",description:"K\xeanh du l\u1ecbch h\xe0ng \u0111\u1ea7u mi\u1ec1n T\xe2y Vi\u1ec7t Nam v\u1edbi c\xe1c g\xf3i k\xec ngh\u1ec9 trong v\xe0 ngo\xe0i n\u01b0\u1edbc ch\u1ea5t l\u01b0\u1ee3ng v\u1edbi gi\xe1 r\u1ebb",image:"https://phuongbinh-2019.firebaseapp.com/assets/images/background-beach.jpg",slug:"",keywords:""},n)).image||(n.image="https://phuongbinh-2019.firebaseapp.com/assets/images/background-beach.jpg"),this.meta.updateTag({name:"slug",content:n.slug}),this.meta.updateTag({name:"image",content:n.image}),this.meta.updateTag({name:"description",content:n.description}),this.meta.updateTag({name:"keywords",content:n.keywords}),this.meta.updateTag({name:"title",content:n.title}),this.meta.updateTag({name:"twitter:card",content:"summary"}),this.meta.updateTag({name:"twitter:site",content:"@phuongbinh"}),this.meta.updateTag({name:"twitter:title",content:n.title}),this.meta.updateTag({name:"twitter:description",content:n.description}),this.meta.updateTag({name:"twitter:image",content:n.image}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:site_name",content:"Ph\u01b0\u01a1ng B\xecnh | Tin \u0111\u0103ng du lich, c\xe1c g\xf3i du l\u1ecbch v\xe0 k\xec ngh\u1ec9 d\xe0i, ng\u1eafn h\u1ea1n."}),this.meta.updateTag({property:"og:title",content:n.title}),this.meta.updateTag({property:"og:description",content:n.description}),this.meta.updateTag({property:"og:image",content:n.image}),this.titleService.setTitle(n.title),this.setCanonical()},n.prototype.setCanonical=function(){var n=this.doc.createElement("link");n.setAttribute("rel","canonical"),this.doc.head.appendChild(n);var e=this.doc.URL,t=e.slice(0,e.lastIndexOf("?")>0?e.lastIndexOf("?"):e.length);n.setAttribute("href",t)},n}()}}]);