webpackJsonp([3],{"4jfe":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Dd8w"),r=a.n(s),i=a("NYxO"),u={name:"Column",data:function(){return{userName:"",userAvatar:"",articles:[]}},computed:r()({},Object(i.b)(["user"]),{articleNum:function(){return this.articles.length}}),beforeRouteEnter:function(t,e,a){a(function(e){e.setDataByParams(t.params)})},watch:{$route:function(t){this.setDataByParams(t.params)}},methods:{setDataByParams:function(t){var e=t.user,a=t.articleId,s=this.$store.getters.getArticleById(a);if(s)this.userName=s.uname,this.userAvatar=s.uavatar,this.articles=this.$store.getters.getArticlesByUid(null,s.uname);else if(e){var r=this.$store.getters.getArticlesByUid(null,e);r.length?(this.userName=r[0].uname,this.userAvatar=r[0].uavatar):this.user&&(this.userName=this.user.name,this.userAvatar=this.user.avatar),this.articles=r}}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-container"},[a("div",{staticClass:"blog-pages"},[a("router-view"),t._v(" "),a("div",{staticClass:"col-md-3 main-col pull-left"},[a("div",{staticClass:"panel panel-default corner-radius"},[a("div",{staticClass:"panel-body text-center topic-author-box blog-info"},[a("div",{staticClass:"image blog-cover"},[a("router-link",{attrs:{to:"/"+t.userName}},[a("img",{staticClass:"avatar-112 avatar img-thumbnail",attrs:{src:t.userAvatar}})])],1),t._v(" "),a("div",{staticClass:"blog-name"},[a("h4",[a("router-link",{attrs:{to:"/"+t.userName}},[t._v(t._s(t.userName)+" 的专栏")])],1)]),t._v(" "),a("hr"),t._v(" "),a("router-link",{attrs:{to:"/"+t.userName}},[a("li",{staticClass:"list-group-item"},[a("i",{staticClass:"text-md fa fa-list-ul"}),t._v(" 专栏文章（"+t._s(t.articleNum)+"）")])])],1)])])],1)])},staticRenderFns:[]};var n=a("VU/8")(u,l,!1,function(t){a("i9hk")},"data-v-feff239e",null);e.default=n.exports},i9hk:function(t,e){}});
//# sourceMappingURL=3.508e678a80b7c76f2673.js.map