webpackJsonp([13],{"4Lai":function(t,a,e){var i=e("P84k");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("228aa584",i,!1)},"97hE":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticStyle:{"font-family":"'Open Sans'","font-size":"18px","margin-bottom":"10px"}},[t._v("\n        TẠO MỚI DEAL\n    ")]),i("div",{staticStyle:{padding:"10px","background-color":"white"}},[void 0===t.$store.state.adminSelectedChain._id?i("hint"):i("form",{on:{submit:function(a){t.m_formAddDealSubmit(a)}}},[i("div",[i("label",{staticClass:"bold"},[t._v("Tiêu đề")]),i("div",{staticStyle:{"max-width":"600px"}},[i("el-input",{model:{value:t.form.addDeal.title,callback:function(a){t.$set(t.form.addDeal,"title",a)},expression:"form.addDeal.title"}})],1),i("label",{staticClass:"mt-8 bold"},[t._v("Mô tả")]),i("div",{staticStyle:{"max-width":"600px"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.form.addDeal.description,callback:function(a){t.$set(t.form.addDeal,"description",a)},expression:"form.addDeal.description"}})],1),i("label",{staticClass:"mt-8 bold"},[t._v("Thời gian sử dụng")]),i("div",{staticClass:"block",staticStyle:{"max-width":"600px"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetimerange","range-separator":"đến","start-placeholder":"Thời gian bắt đầu","end-placeholder":"Thời gian kết thúc"},model:{value:t.value3,callback:function(a){t.value3=a},expression:"value3"}})],1),i("el-row",{staticStyle:{"max-width":"600px","margin-top":"10px","margin-bottom":"10px"},attrs:{gutter:20}},[i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Danh mục sản phẩm")]),i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","no-data-text":"Không có dữ liệu","no-match-text":"Không có dữ liệu phù hợp",placeholder:"Chọn danh mục sản phẩm"},model:{value:t.form.addDeal.serviceItem,callback:function(a){t.$set(t.form.addDeal,"serviceItem",a)},expression:"form.addDeal.serviceItem"}},t._l(t.v.listCategory,function(a){return i("el-option-group",{key:a.name,attrs:{value:a.name,label:a.name}},t._l(a.item,function(t){return i("el-option",{key:t.name,attrs:{label:t.name,value:t._id}})}))}))],1),i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Mặt hàng có tại")]),i("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","no-data-text":"Không có dữ liệu","no-match-text":"Không có dữ liệu phù hợp",placeholder:"Chọn danh cửa hàng"},model:{value:t.form.addDeal.shop,callback:function(a){t.$set(t.form.addDeal,"shop",a)},expression:"form.addDeal.shop"}},t._l(t.listShopGroupByChain,function(a){return i("el-option-group",{key:a.name,attrs:{value:a.name,label:a.name}},t._l(a.shop,function(t){return i("el-option",{key:t.name,attrs:{label:t.name,value:t._id}})}))}))],1)],1),i("el-row",{staticStyle:{"max-width":"600px","margin-top":"10px","margin-bottom":"10px"},attrs:{gutter:20}},[i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Số lượng")]),i("br"),i("el-input-number",{staticStyle:{width:"100%"},attrs:{"controls-position":"right",min:1,max:9999},model:{value:t.form.addDeal.quantity,callback:function(a){t.$set(t.form.addDeal,"quantity",a)},expression:"form.addDeal.quantity"}})],1),i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Giá gốc")]),i("br"),i("el-input-number",{staticStyle:{width:"100%"},attrs:{"controls-position":"right"},model:{value:t.form.addDeal.price,callback:function(a){t.$set(t.form.addDeal,"price",a)},expression:"form.addDeal.price"}})],1)],1),i("el-row",{staticStyle:{"max-width":"600px","margin-top":"10px","margin-bottom":"10px"},attrs:{gutter:20}},[i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Kiểu giảm giá")]),i("br"),i("el-select",{staticStyle:{width:"100%"},model:{value:t.form.addDeal.type,callback:function(a){t.$set(t.form.addDeal,"type",a)},expression:"form.addDeal.type"}},[i("el-option",{attrs:{value:"percent",label:"Phần trăm"}}),i("el-option",{attrs:{value:"cash",label:"Tiền"}})],1)],1),i("el-col",{attrs:{md:12,sm:12,xs:24,lg:12}},[i("label",{staticClass:"mt-8 bold"},[t._v("Giá trị")]),i("br"),i("el-input-number",{staticStyle:{width:"100%"},attrs:{"controls-position":"right"},model:{value:t.form.addDeal.value,callback:function(a){t.$set(t.form.addDeal,"value",a)},expression:"form.addDeal.value"}})],1)],1),i("label",{staticClass:"mt-8 bold"},[t._v("Hình ảnh (Tối đa 6 hình ảnh)")]),i("br"),i("div",[t._l(t.v.imageReview,function(a,e){return[i("div",{style:"background-size:cover; float:left; margin-right:5px; width:100px; height:100px; border:1px solid rgba(45,45,8,.2); background-image:url("+a+")"},[i("button",{staticClass:"pull-right remove-image-class",attrs:{type:"button"},on:{click:function(a){t.m_removeImageIndex(e)}}},[i("span",{staticClass:"el-icon-close"})])])]}),t.v.imageReview.length<6?i("img",{staticClass:"plusHover",staticStyle:{width:"100px",height:"100px",border:"1px solid rgba(45,45,8,.2)",cursor:"pointer"},attrs:{src:e("FOzE")},on:{click:t.m_openUploadImage}}):t._e(),i("img",{staticStyle:{width:"100px",visibility:"hidden",height:"100px",border:"1px solid rgba(45,45,8,.2)",cursor:"pointer"}}),i("input",{staticStyle:{display:"none"},attrs:{type:"file",multiple:"",id:"inputFileUploadLisDeal",accept:"image/jpeg"},on:{change:function(a){t.m_InputFileChange(a)}}})],2),i("label",{staticClass:"mt-8 bold"},[t._v("Nội dung chi tiết")]),i("section",{staticClass:"container-q"},[i("div",{directives:[{name:"quill",rawName:"v-quill:myQuillEditor",value:t.editorOption,expression:"editorOption",arg:"myQuillEditor"}],staticClass:"quill-editor",attrs:{id:"mcontent",content:t.content}})]),i("div",{staticStyle:{"margin-top":"20px"}},[i("grebtn",{staticStyle:{"max-width":"200px"},attrs:{title:"Tạo Deal",loading:t.v.isLoading,type:"submit"}})],1)],1)])],1)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};a.a=n},E4Ig:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.container-q .quill-editor[data-v-30f91366]{min-height:200px;max-height:400px;overflow-y:auto}.plusHover[data-v-30f91366]:hover{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="1" /></filter></svg>#filter\');-webkit-filter:blur(1px);filter:blur(1px);-webkit-transition:all .8s ease-in-out;transition:all .8s ease-in-out}.remove-image-class[data-v-30f91366]{width:25px;height:25px;border:0;border-radius:50vh;background-color:hsla(0,0%,100%,.2);outline:none}.remove-image-class[data-v-30f91366]:hover{background-color:rgba(45,45,48,.6)}.remove-image-class:hover span[data-v-30f91366]{color:#fff;outline:none}',""])},FOzE:function(t,a){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNTAwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDUwMCA1MDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0NCiAgICAuZmlsMSB7ZmlsbDojQkRCRkMxfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0KIDxnIGlkPSJMYXllcl94MDAyMF8xIj4NCiAgPG1ldGFkYXRhIGlkPSJDb3JlbENvcnBJRF8wQ29yZWwtTGF5ZXIiLz4NCiAgPHJlY3QgY2xhc3M9ImZpbDAiIHg9IjE1IiB5PSIxMyIgd2lkdGg9IjQ1OSIgaGVpZ2h0PSI0NTkiLz4NCiAgPHJlY3QgY2xhc3M9ImZpbDEiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzU3RS0wMTQgMC42NjM0MDcgLTAuNjYzNDA3IDEuNzU3RS0wMTQgMjU3LjM3OSAxNDcuMTk1KSIgd2lkdGg9IjI4OC4wMDEiIGhlaWdodD0iMzcuOTk5NyIvPg0KICA8cmVjdCBjbGFzcz0iZmlsMSIgeD0iMTQ5IiB5PSIyMzAiIHdpZHRoPSIxOTEuMDYyIiBoZWlnaHQ9IjI1LjIwOTMiLz4NCiA8L2c+DQo8L3N2Zz4NCg=="},JwKv:function(t,a,e){"use strict";var i=e("g/wM"),n=e("mKXO"),o=!1;var l=function(t){o||e("4Lai")},s=e("VU/8")(i.a,n.a,!1,l,"data-v-6f7dab1a",null);s.options.__file="components\\button.vue",a.a=s.exports},P84k:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"button[data-v-6f7dab1a]{border:0;color:#fff;font-size:16px;padding:8px 16px;outline:none;background-color:#ff5151;min-width:86px;-webkit-transition:all .6s ease-in-out;transition:all .6s ease-in-out}button[data-v-6f7dab1a]:hover{background-color:#ff6262}.icon-e[data-v-6f7dab1a]{background-color:#fff;border-radius:50vh;width:10px;height:10px;float:left;padding:10px}.e1[data-v-6f7dab1a]{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.e1[data-v-6f7dab1a],.e2[data-v-6f7dab1a]{-webkit-animation-name:abLoad-data-v-6f7dab1a;animation-name:abLoad-data-v-6f7dab1a;-webkit-animation-duration:2s;animation-duration:2s}.e2[data-v-6f7dab1a]{-webkit-animation-delay:.3s;animation-delay:.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.e3[data-v-6f7dab1a]{-webkit-animation-name:abLoad-data-v-6f7dab1a;animation-name:abLoad-data-v-6f7dab1a;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes abLoad-data-v-6f7dab1a{0%{padding:0}20%{padding:10px}to{padding:0}}@keyframes abLoad-data-v-6f7dab1a{0%{padding:0}20%{padding:10px}to{padding:0}}",""])},"g/wM":function(t,a,e){"use strict";a.a={name:"priBtn",props:{loading:{type:Boolean,default:!1},title:{type:String,default:"Button"},type:{type:String,default:"button"},noRound:{type:Boolean,default:!1}},data:function(){return{}},methods:{m_emitParent:function(){this.$emit("click")}}}},m8RI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("r9lr"),n=e("97hE"),o=!1;var l=function(t){o||e("yBxk")},s=e("VU/8")(i.a,n.a,!1,l,"data-v-30f91366",null);s.options.__file="pages\\quan-tri\\index\\deal\\tao-moi.vue",a.default=s.exports},mKXO:function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("button",{style:this.noRound?"":"border-radius: 50vh",attrs:{type:this.type,disabled:this.loading},on:{click:this.m_emitParent}},[a("table",{staticStyle:{"margin-bottom":"0",position:"absolute"},style:this.loading?"":"visibility: hidden"},[this._m(0)]),a("span",{style:this.loading?"visibility: hidden":""},[this._v(this._s(this.title))])])};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("tbody",[a("tr",[a("td",{}),a("td",{staticStyle:{height:"22px","text-align":"center","vertical-align":"middle"}},[a("div",{staticClass:"icon-e e1"})]),a("td",{staticStyle:{height:"22px","text-align":"center","vertical-align":"middle"}},[a("div",{staticClass:"icon-e e2"})]),a("td",{staticStyle:{height:"22px","text-align":"center","vertical-align":"middle"}},[a("div",{staticClass:"icon-e e3"})]),a("td",{})])])}]};a.a=n},r9lr:function(t,a,e){"use strict";var i=e("mvHQ"),n=e.n(i),o=e("0kY3"),l=e.n(o),s=e("HJMx"),r=e.n(s),d=e("7t+N"),c=e.n(d),m=(e("/5sW"),e("JwKv")),u=e("PJh5"),p=e.n(u);a.a={middleware:"clientIsManager",components:{Input:r.a,InputNumber:l.a,PriBtn:m.a},head:{},name:"deal_create",data:function(){return{content:"",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}},v:{imageReview:[],currentObjectImage:null,isLoading:!1,listCategory:[],listShop:[]},form:{addDeal:{title:"",description:"",content:"",type:"percent",quantity:1,value:10,price:1e3,from:"",to:"",shop:[],serviceItem:[],images:[]}},value3:[Date.now(),Date.now()]}},computed:{listIMG:function(){return this.v.imageReview},listShopGroupByChain:function(){var t=this,a=[],e=[],i=[];this.v.listShop.forEach(function(t){-1===e.indexOf(t.chain._id)&&(e.push(t.chain._id),i.push(t.chain.name))});for(var o=function(o){a.push({name:i[o],_id:e[o],shop:[]}),t.v.listShop.forEach(function(t){t.chain._id===e[o]&&a[o].shop.push(JSON.parse(n()(t)))})},l=0;l<e.length;l++)o(l);return a}},beforeMount:function(){c()(document).ready(function(){c()(".ql-formats button").addClass("btn cusbtn"),c()(".ql-formats .ql-picker ").addClass(" cusbtn"),c()(".ql-formats").addClass("btn-group"),c()(".ql-formats").css("margin-bottom:5px;")}),this.m_getCategory(),this.m_getListShop()},methods:{m_getListShop:function(){var t=this;this.$http.get("http://spadi.com.vn/api/shop/list",this.cf()).then(function(a){t.v.listShop=a.body}).catch(function(t){})},m_getCategory:function(){var t=this;this.$http.get("http://spadi.com.vn/api/category/service/list").then(function(a){t.v.listCategory=a.body}).catch(function(t){})},moment:function(){return p()()},m_InputFileChange:function(t){var a=this;this.v.currentObjectImage=t.target.files||t.dataTransfer.files;for(var e=0;e<this.v.currentObjectImage.length;e++)if(this.v.imageReview.length<6){this.form.addDeal.images.push(this.v.currentObjectImage[e]);var i=new FileReader;i.onload=function(t){a.v.imageReview.push(t.target.result)},i.readAsDataURL(this.v.currentObjectImage[e])}},m_openUploadImage:function(){c()("#inputFileUploadLisDeal").click()},m_removeImageIndex:function(t){var a=[];this.v.imageReview.map(function(e,i){i!==t&&a.push(e)}),this.v.imageReview=a,a=[],this.form.addDeal.images.map(function(e,i){i!==t&&a.push(e)}),this.form.addDeal.images=a},m_formAddDealSubmit:function(t){var a=this;console.log(this.form.addDeal.shop),t.preventDefault();var e=new FormData;e.append("title",this.form.addDeal.title),e.append("description",this.form.addDeal.description),e.append("type",this.form.addDeal.type),e.append("quantity",this.form.addDeal.quantity),this.form.addDeal.shop.forEach(function(t){e.append("shop",t)}),this.form.addDeal.serviceItem.forEach(function(t){e.append("serviceItem",t)}),e.append("price",this.form.addDeal.price),e.append("value",this.form.addDeal.value),e.append("content",c()("#mcontent .ql-editor").html()),e.append("from",this.value3[0]),e.append("to",this.value3[1]),this.form.addDeal.images.forEach(function(t){e.append("images",t)}),this.$confirm("Bạn có chắc muốn thêm Deal: "+this.form.addDeal.title+" không?","Chú ý",{type:"warning",confirmButtonText:"Chắc chắn",cancelButtonText:"Không"}).then(function(){a.v.isLoading=!0,a.$http.post("http://spadi.com.vn/api/deal/create",e,a.cf()).then(function(t){a.v.isLoading=!1,a.$message({type:"success",message:void 0===t.body.Message?"Thao tác thành công":t.body.Message})}).catch(function(t){a.v.isLoading=!1,a.$message({type:"error",message:void 0!==t.body&&void 0!==t.body.ErrorMessage?t.body.ErrorMessage:"Đã xảy ra sự cố, vui lòng kiểm tra và thử lại sau"})})}).catch(function(){})}}}},yBxk:function(t,a,e){var i=e("E4Ig");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("274a60ee",i,!1)}});