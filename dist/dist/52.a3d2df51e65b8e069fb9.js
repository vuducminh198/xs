webpackJsonp([52],{CmgE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("LOLO"),s=a("ytF0"),o=!1;var n=function(t){o||a("fv9q")},r=a("VU/8")(i.a,s.a,!1,n,"data-v-557d2f02",null);r.options.__file="pages\\index\\coupon\\_coupon.vue",e.default=r.exports},LOLO:function(t,e,a){"use strict";var i=a("Xxa5"),s=a.n(i),o=a("exGp"),n=a.n(o),r=a("7t+N");a.n(r);e.a={scrollToTop:!0,head:function(){return{title:this.mainData.title,meta:[{name:"description",content:this.mainData.description},{name:"og:locale",content:"vi_VN"},{name:"og:type",content:"article"},{name:"og:title",content:this.mainData.title},{name:"og:description",content:this.mainData.description},{name:"og:url",content:this.currentURLPath},{name:"og:site_name",content:this.mainData.title},{name:"og:image",content:"http://spadi.com.vn/assets/upload/"+this.mainData.images[0]},{name:"og:image:width",content:"650"},{name:"og:image:height",content:"650"}]}},asyncData:function(){var t=n()(s.a.mark(function t(e){var a,i=e.app,o=(e.query,e.route,e.store),n=e.params,r=e.redirect;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===n.coupon){t.next=7;break}return a={},t.next=4,i.$axios.$get("http://spadi.com.vn/api/coupon/public/"+n.coupon).then(function(t){a=t}).catch(function(t){r("/coupon/404")});case 4:return t.abrupt("return",{mainData:a,comment:"",currentURLPath:"123123",ClientInfo:o.state.ClientInfo});case 7:r("/coupon/404");case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{v:{dialogImageViewer:!1,currentHref:"",imageSource:"",currentTab:1,isLoading:!1,isSending:!1,dialogShowCounpon:!1,dialogGetInfoUser:!1,code:"xxxx-xxxx-xxxx-xxxx",listComment:[],dialogShowAlert:!1,OverCode:!1},form:{postMessage:{message:""},defaultUser:{name:"",phone:"",email:""}}}},beforeMount:function(){this.v.currentHref=window.location.href,this.m_getListMessageOfCoupon()},methods:{m_showShopInfo:function(t){},m_showCode:function(){"user"===this.$store.state.ClientInfo.role&&this.$store.state.ClientToken.toString().length>10?this.m_finalShowCode():this.v.dialogGetInfoUser=!0},m_finalShowCode:function(){var t=this,e={},a={headers:{"Content-Type":"application/json"}};this.$store.state.ClientToken.toString().length>10?(a.headers.Authorization="Bearer "+this.$store.state.ClientToken,this.form.defaultUser.name=this.$store.state.ClientInfo.name):e=this.form.defaultUser,e._id=this.mainData._id,this.v.isLoading=!0,this.$http.post("http://spadi.com.vn/api/coupon/get",e,a).then(function(e){t.v.isLoading=!1,t.v.code=e.body.code||e.body.Message,void 0!==e.body.Message?t.v.OverCode=!0:t.v.OverCode=!1,t.v.dialogShowCounpon=!0}).catch(function(e){t.v.isLoading=!1})},m_getListMessageOfCoupon:function(){var t=this;this.$http.get("http://spadi.com.vn/api/coupon/comment/"+this.mainData._id).then(function(e){t.v.listComment=e.body}).catch(function(t){})},m_postMessage:function(t){var e=this;t.preventDefault();var a={_id:this.mainData._id,content:this.form.postMessage.message},i={headers:{"Content-Type":"application/json"}};"user"===this.$store.state.ClientInfo.role&&this.$store.state.ClientToken.toString().length>0&&(i.headers.Authorization="Bearer "+this.$store.state.ClientToken),this.v.isSending=!1,this.$http.post("http://spadi.com.vn/api/coupon/comment",a,i).then(function(t){e.form.postMessage.message="",e.m_getListMessageOfCoupon(),e.$message({type:"success",message:"Bình luận của bạn đã được gửi đi!"})}).catch(function(t){e.$message({type:"error",message:void 0!==t.body&&void 0!==t.body.ErrorMessage?t.body.ErrorMessage:"Đã xảy ra sự cố, vui lòng kiểm tra và thử lại sau"})})}}}},Vy7b:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.imageClass[data-v-557d2f02]{width:100px;height:100px;background-size:cover;float:left;margin-right:5px;cursor:pointer}.cusTab ul li[data-v-557d2f02]:hover{background-color:#f5f5f5}.cusTab ul li.mxActive[data-v-557d2f02]{background-color:#439a46;color:#fff}.imgCaro[data-v-557d2f02]{width:100%;height:300px;background-size:cover}.lb_head[data-v-557d2f02]{font-size:15px;font-weight:700;text-transform:uppercase;font-family:Open Sans}.lb_head[data-v-557d2f02]:before{font-family:FontAwesome;font-size:16px;content:"\\F033";color:#439a46;padding-right:6px}.lb_head[data-v-557d2f02]:hover{text-decoration:none}label[data-v-557d2f02]{font-family:Open Sans}@media (min-width:769px){.align-option[data-v-557d2f02]{text-align:right}}.el-dialog__close[data-v-557d2f02]{color:#fff!important}.mxCopy[data-v-557d2f02]{margin-left:5px;color:rgba(45,45,48,.5);cursor:pointer}.mxCopy[data-v-557d2f02]:hover{color:#2d2d30}',""])},fv9q:function(t,e,a){var i=a("Vy7b");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("33516b0e",i,!1)},ytF0:function(t,e,a){"use strict";var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container",staticStyle:{"margin-top":"20px"}},[[typeof e.comment.length>0?i("div",{staticClass:"box",staticStyle:{padding:"20px"}},[e._m(0)]):void 0!==e.mainData?i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-8"},[i("div",{staticClass:"box",staticStyle:{border:"0","box-shadow":"unset","border-radius":"0"}},[i("el-carousel",{attrs:{interval:5e3,arrow:"always"}},e._l(e.mainData.images,function(t){return i("el-carousel-item",{key:t},[i("div",{staticClass:"imgCaro",style:"background-image:url("+(e.img_base+t)+")"})])})),i("div",{staticStyle:{padding:"20px","border-radius":"0"}},[i("span",{staticStyle:{"font-size":"24px"}},[e._v(e._s(e.mainData.title))]),i("hr",{staticStyle:{"border-style":"dot-dot-dash"}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("div",{staticClass:"fb-like",attrs:{"data-href":e.v.currentHref,"data-layout":"button_count","data-action":"like","data-size":"small","data-show-faces":"true","data-share":"true"}}),i("br")]),i("div",{staticClass:"com-sm-6 align-option"},[i("time-count-down",{staticStyle:{"padding-right":"20px","padding-left":"20px","font-family":"'Open Sans'","font-weight":"bold","font-size":"24px"},attrs:{to:e.mainData.to}})],1)]),i("label",{staticClass:"lb_head"},[e._v("Hình ảnh")]),i("div",{staticStyle:{height:"100px",overflow:"hidden"}},e._l(e.mainData.images,function(t){return i("div",{staticClass:"imageClass",style:"background-image:url("+(e.img_base+t)+"); ",on:{click:function(a){e.v.imageSource=""+(e.img_base+t),e.v.dialogImageViewer=!0}}})}))])],1),i("div",{staticStyle:{clear:"both"}}),i("div",{staticClass:"box",staticStyle:{border:"0","box-shadow":"unset","border-radius":"0"}},[i("label",{staticClass:"lb_head",staticStyle:{margin:"20px"}},[e._v("ĐỊA ĐIỂM SỬ DỤNG")]),i("div",{staticStyle:{clear:"both"}}),i("div",{staticStyle:{"min-height":"300px",position:"relative"}},[i("gmap-map",{staticStyle:{width:"100%",height:"100%",position:"absolute",left:"0",top:"0"},attrs:{center:{lat:e.mainData.shop[0].latitude,lng:e.mainData.shop[0].longitude},zoom:14}},e._l(e.mainData.shop,function(t,a){return i("gmap-marker",{key:a,attrs:{description:"aaaaaaaaaaaaaaa",icon:{url:"/img/market.png",scaledSize:{width:46,height:50},stylers:[{"border-radius":50}]},position:{lat:t.latitude,lng:t.longitude},clickable:!0,draggable:!0},on:{click:function(a){e.center=t.position,e.m_showShopInfo(t)}}},[i("gmap-info-window",[i("table",[i("tbody",[i("tr",[i("td",[i("img",{staticStyle:{width:"40px",height:"40px","border-radius":"3px"},attrs:{src:e.img_base+t.chain.logo}})]),i("td",[i("span",{staticStyle:{"padding-left":"5px","font-weight":"bold"}},[e._v(e._s(t.chain.name)+" - "+e._s(t.name))]),i("br")])])])])])],1)}))],1)]),i("div",{staticClass:"box",staticStyle:{border:"0","box-shadow":"unset","border-radius":"0",padding:"20px"}},[i("label",{staticClass:"lb_head"},[e._v("Danh mục")]),i("ul",e._l(e.mainData.serviceItem,function(t){return i("li",[e._v("\n                                "+e._s(t.name)+"\n                            ")])}))]),i("div",{staticStyle:{clear:"both"}}),i("div",[i("div",{staticClass:"cusTab"},[i("ul",[i("li",{class:1===e.v.currentTab?"mxActive":"",on:{click:function(t){e.v.currentTab=1}}},[e._v("CHI TIẾT")]),i("li",{class:2===e.v.currentTab?"mxActive":"",on:{click:function(t){e.v.currentTab=2}}},[e._v("ĐÁNH GIÁ")]),i("li",{class:3===e.v.currentTab?"mxActive":"",on:{click:function(t){e.v.currentTab=3}}},[e._v("BÌNH LUẬN")])])]),i("div",{staticStyle:{clear:"both"}}),i("div",{staticClass:"box child-container ",staticStyle:{padding:"10px","border-top":"2px solid #439A46","border-radius":"0"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:1===this.v.currentTab,expression:"this.v.currentTab===1"}],staticStyle:{"user-select":"none"},domProps:{innerHTML:e._s(this.mainData.content)}}),i("div",{directives:[{name:"show",rawName:"v-show",value:3===this.v.currentTab,expression:"this.v.currentTab===3"}]},[e._l(e.v.listComment,function(t){return i("div",[i("table",{staticClass:"table",staticStyle:{"padding-bottom":"0","margin-bottom":"0"}},[i("tbody",[i("tr",[e._m(1,!0),i("td",[i("span",{staticStyle:{"font-size":"14px","font-weight":"bold",color:"rgba(45,45,48,.6)"}},[e._v(e._s(t.user.name)+" - "+e._s(e._f("emailHide")(t.user.email)))]),i("br"),i("span",{staticStyle:{"font-size":"15px"}},[e._v(e._s(t.content))]),i("br"),i("span",{staticStyle:{"font-size":"13px"}},[e._v("Lúc: "+e._s(e._f("fullTimeVN")(t.createdAt)))])])])])])])}),i("div",[i("table",{staticClass:"table",staticStyle:{"padding-bottom":"0","margin-bottom":"0"}},[i("tbody",[i("tr",[e._m(2),i("td",[i("form",{on:{submit:function(t){e.m_postMessage(t)}}},[i("label",{staticClass:"bold",staticStyle:{"font-family":"'Source Sans Pro'"}},[e._v("Bình\n                                                        luận\n                                                        của bạn\n                                                        ("+e._s(e.form.postMessage.message.toString().length)+"/200) ~\n                                                        "+e._s(e.$store.state.ClientInfo.name))]),i("el-input",{attrs:{type:"textarea"},model:{value:e.form.postMessage.message,callback:function(t){e.$set(e.form.postMessage,"message",t)},expression:"form.postMessage.message"}}),i("div",{staticClass:"text-right",staticStyle:{"margin-top":"20px"}},[i("grebtn",{staticStyle:{padding:"10px",width:"100px"},attrs:{title:"Gửi",loading:e.v.isSending,type:"submit",icon:!0,iconClass:"fa fa-send"}})],1)],1)])])])])])],2)])])]),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"box",staticStyle:{padding:"30px","border-top":"0px"}},[i("btnCode",{attrs:{title:"LẤY COUPON",loading:e.v.isLoading},on:{click:function(t){e.m_showCode()}}}),i("share-on")],1)])])]):e._e(),i("el-dialog",{attrs:{visible:e.v.dialogImageViewer,"custom-class":"noBorder",top:"10px"},on:{"update:visible":function(t){e.$set(e.v,"dialogImageViewer",t)}}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("img",{staticStyle:{width:"100%"},attrs:{src:e.v.imageSource}})])]),i("el-dialog",{attrs:{visible:e.v.dialogShowCounpon,"custom-class":"noBorder",top:"calc(50vh - 200px)"},on:{"update:visible":function(t){e.$set(e.v,"dialogShowCounpon",t)}}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("div",{staticStyle:{padding:"10px"}},[e.v.OverCode?e._e():i("p",{staticStyle:{width:"100%","text-align":"center","font-size":"24px"}},[e._v("SỬ DỤNG MÃ COUPON\n                        BÊN\n                        DƯỚI")]),e.v.OverCode?i("p",{staticStyle:{width:"100%","text-align":"center","font-size":"24px"}},[e._v("Opps! HẾT MẤT\n                        RỒI")]):e._e(),i("br"),i("div",{staticStyle:{padding:"10px"}},[e._v("\n\n                        Chào: "+e._s(e.form.defaultUser.name)),i("br"),i("div",{staticStyle:{"margin-top":"10px","margin-bottom":"20px",border:"1px dashed rgba(45,45,48,.4)",padding:"10px"}},[i("table",{staticClass:"table",staticStyle:{margin:"0",padding:"0"}},[i("tbody",[i("tr",{staticStyle:{border:"0"}},[i("td",{staticStyle:{border:"0"}},[i("div",{staticStyle:{"background-color":"rgba(45,45,48,.1)",padding:"10px",width:"100%","font-size":"20px",color:"green"}},[e._v("\n                                            "+e._s(e.v.code)+"\n                                        ")])]),e.v.OverCode?e._e():i("td",{staticStyle:{border:"0",width:"50px"}},[i("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.v.code,expression:"v.code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:function(){t.$message({type:"success",message:"Đã sao chép mã vào bộ nhớ đệm!"})},expression:"()=>{\n                                                                                                                                 this.$message({\n                                                                                                                                    type:'success',\n                                                                                                                                    message:'Đã sao chép mã vào bộ nhớ đệm!'\n                                                                                                                                 })\n                                                                                                                             }",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:function(){t.$message({type:"error",message:"Đã xảy ra sự cố, không thể sao chép!"})},expression:"()=>{\n                                                                                                                                   this.$message({\n                                                                                                                                    type:'error',\n                                                                                                                                    message:'Đã xảy ra sự cố, không thể sao chép!'\n                                                                                                                                 })\n                                                                                                                             }",arg:"error"}],staticClass:"material-icons mxCopy",staticStyle:{"padding-top":"10px"}},[e._v("content_copy")])])])])])]),[i("span",{staticStyle:{"font-size":"18px","font-weight":"bold","font-family":"'Open Sans'"}},[e._v(e._s(e.mainData.title))]),i("br"),i("span",{staticStyle:{"font-size":"16px",color:"rgba(45,45,48,.6)"}},[e._v(e._s(e.mainData.description))]),i("br"),i("br"),i("span",{staticStyle:{color:"red","font-family":"'Open Sans'","margin-top":"20px"}},[i("br"),i("span",{staticClass:"fa fa-clock-o"}),e._v(" Còn "),i("time-count-down",{staticStyle:{"font-size":"18px"},attrs:{to:e.mainData.to}})],1)]],2)])])]),i("el-dialog",{attrs:{visible:e.v.dialogShowAlert},on:{"update:visible":function(t){e.$set(e.v,"dialogShowAlert",t)}}})]],2)};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("span",{staticClass:"material-icons"},[this._v("face")]),this._v("Opps! Coupon không tồn tại")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"70px",margin:"0",padding:"0"}},[e("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50vh",margin:"10px"},attrs:{src:"https://www.drupal.org/files/issues/default-avatar.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{width:"70px",margin:"0",padding:"0"}},[e("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50vh",margin:"10px"},attrs:{src:"https://www.drupal.org/files/issues/default-avatar.png"}})])}]};e.a=s}});