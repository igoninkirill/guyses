(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{453:function(t,e,n){"use strict";n.r(e);var o=n(321),r=n.n(o),c={name:"Posts",data:function(){return{posts:[],headers:[{text:"ID",value:"id",sortable:!1},{text:"Имя",value:"name",sortable:!1},{text:"О себе",value:"description",sortable:!1},{text:"Комментарии",value:"comments",sortable:!1}]}},created:function(){this.init()},methods:{init:function(){var t=this;r.a.get("http://rucensus.loc/api/posts",this.form,{headers:{Accept:"application/json"}}).then((function(e){t.posts=e.data}))}}},l=n(75),v=n(110),d=n.n(v),h=n(377),m=n(362),_=n(306),f=n(369),w=n(447),V=n(450),x=n(448),C=n(449),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-row",[n("v-col",{attrs:{cols:"auto"}},[n("span",{staticClass:"heading"},[t._v("Участники ПЕРВОЙ ПРАВДИВОЙ ОБЩЕМИРОВОЙ переписи населения")]),n("br"),t._v("\n        Посчитанное количество людей:\n        "),n("v-chip",{attrs:{color:"Primary"}},[t._v(t._s(t.posts.length))])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary",nuxt:"",to:"posts/create"}},[t._v("\n          Отметить себбя\n        ")])],1)],1)],1),t._v(" "),n("v-card",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.posts,"items-per-page":5},scopedSlots:t._u([{key:"item.comments",fn:function(e){var o=e.item;return[n("v-btn",{attrs:{color:"primary",to:"posts/"+o.id}},[t._v("\n          Комментарии\n        ")])]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:h.a,VCard:m.a,VCardTitle:_.c,VChip:f.a,VCol:w.a,VDataTable:V.a,VRow:x.a,VSpacer:C.a})}}]);