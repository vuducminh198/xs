webpackJsonp([27],{"6sat":function(t,e,i){"use strict";var a=i("7t+N"),o=i.n(a),s=(i("/5sW"),i("PJh5")),n=i.n(s);e.a={components:{},head:{title:"Thêm mới bài viết cho trang của bạn - Spadi.vn"},props:{noBox:{type:Boolean,default:!1}},name:"deal_create",data:function(){return{content:"",editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]}},v:{imageReview:[],currentObjectImage:null,isLoading:!1,listCategory:[],listShop:[]},form:{addPost:{title:"",description:"",content:"",meta:[],tag:[],shop:[],images:[]}},value3:[Date.now(),Date.now()]}},computed:{listIMG:function(){return this.v.imageReview}},beforeMount:function(){o()(document).ready(function(){o()(".ql-formats button").addClass("btn cusbtn"),o()(".ql-formats .ql-picker ").addClass(" cusbtn"),o()(".ql-formats").addClass("btn-group"),o()(".ql-formats").css("margin-bottom:5px;")})},methods:{m_getCategory:function(){var t=this;this.$http.get("http://192.168.31.199:8000/api/category/service/list").then(function(e){t.v.listCategory=e.body}).catch(function(t){})},moment:function(){return n()()},m_InputFileChange:function(t){var e=this;this.v.currentObjectImage=t.target.files||t.dataTransfer.files;for(var i=0;i<this.v.currentObjectImage.length;i++)if(this.v.imageReview.length<6){this.form.addPost.images.push(this.v.currentObjectImage[i]);var a=new FileReader;a.onload=function(t){e.v.imageReview.push(t.target.result)},a.readAsDataURL(this.v.currentObjectImage[i])}},m_openUploadImage:function(){o()("#inputFileUploadLisDeal").click()},m_removeImageIndex:function(t){var e=[];this.v.imageReview.map(function(i,a){a!==t&&e.push(i)}),this.v.imageReview=e,e=[],this.form.addPost.images.map(function(i,a){a!==t&&e.push(i)}),this.form.addPost.images=e},m_formAddDealSubmit:function(t){var e=this;t.preventDefault();var i=new FormData;i.append("title",this.form.addPost.title),i.append("description",this.form.addPost.description),i.append("content",o()("#mcontent .ql-editor").html()),this.form.addPost.tag.forEach(function(t){i.append("tag",t)}),this.form.addPost.meta.forEach(function(t){i.append("meta",t)}),i.append("file",this.form.addPost.images[0]),this.$confirm("Bạn có chắc muốn thêm bài viết: "+this.form.addPost.title+" choc cửa hàng "+this.$store.state.adminSelectedChain.name+" không?","Chú ý",{type:"warning",confirmButtonText:"Chắc chắn",cancelButtonText:"Không"}).then(function(){e.isLoading=!0,e.$http.post("http://192.168.31.199:8000/api/post/create",i,e.cfA()).then(function(t){e.form.isLoading=!1,e.$message({type:"success",message:void 0===t.body.Message?"Thao tác thành công":t.body.Message})}).catch(function(t){e.v.isLoading=!1,e.$message({type:"error",message:void 0!==t.body&&void 0!==t.body.ErrorMessage?t.body.ErrorMessage:"Đã xảy ra sự cố, vui lòng kiểm tra và thử lại sau"})})}).catch(function(){})}}}},FOzE:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNyAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNTAwcHgiIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIg0Kdmlld0JveD0iMCAwIDUwMCA1MDAiDQogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KIDxkZWZzPg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgPCFbQ0RBVEFbDQogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0NCiAgICAuZmlsMSB7ZmlsbDojQkRCRkMxfQ0KICAgXV0+DQogIDwvc3R5bGU+DQogPC9kZWZzPg0KIDxnIGlkPSJMYXllcl94MDAyMF8xIj4NCiAgPG1ldGFkYXRhIGlkPSJDb3JlbENvcnBJRF8wQ29yZWwtTGF5ZXIiLz4NCiAgPHJlY3QgY2xhc3M9ImZpbDAiIHg9IjE1IiB5PSIxMyIgd2lkdGg9IjQ1OSIgaGVpZ2h0PSI0NTkiLz4NCiAgPHJlY3QgY2xhc3M9ImZpbDEiIHRyYW5zZm9ybT0ibWF0cml4KDEuNzU3RS0wMTQgMC42NjM0MDcgLTAuNjYzNDA3IDEuNzU3RS0wMTQgMjU3LjM3OSAxNDcuMTk1KSIgd2lkdGg9IjI4OC4wMDEiIGhlaWdodD0iMzcuOTk5NyIvPg0KICA8cmVjdCBjbGFzcz0iZmlsMSIgeD0iMTQ5IiB5PSIyMzAiIHdpZHRoPSIxOTEuMDYyIiBoZWlnaHQ9IjI1LjIwOTMiLz4NCiA8L2c+DQo8L3N2Zz4NCg=="},Gh01:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("6sat"),o=i("MrIo"),s=!1;var n=function(t){s||i("ydWs")},l=i("VU/8")(a.a,o.a,!1,n,"data-v-529c6481",null);l.options.__file="pages\\quan-tri\\index\\post\\tao-moi.vue",e.default=l.exports},MrIo:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.noBox?"":"box",staticStyle:{padding:"10px"}},[a("form",{on:{submit:function(e){t.m_formAddDealSubmit(e)}}},[a("div",[a("div",{staticClass:"container-fluid",staticStyle:{padding:"0"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("label",{staticClass:"bold"},[t._v("Tiêu đề")]),a("div",[a("el-input",{model:{value:t.form.addPost.title,callback:function(e){t.$set(t.form.addPost,"title",e)},expression:"form.addPost.title"}})],1),a("label",{staticClass:"mt-8 bold"},[t._v("Mô tả")]),a("div",[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.addPost.description,callback:function(e){t.$set(t.form.addPost,"description",e)},expression:"form.addPost.description"}})],1)]),a("div",{staticClass:"col-sm-4"},[a("label",{staticClass:"mt-8 bold"},[t._v("Danh mục bài viết")]),a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","no-data-text":"Không có dữ liệu","no-match-text":"Không có dữ liệu phù hợp",placeholder:"Chọn danh mục sản phẩm"},model:{value:t.form.addPost.serviceItem,callback:function(e){t.$set(t.form.addPost,"serviceItem",e)},expression:"form.addPost.serviceItem"}},t._l(t.v.listCategory,function(e){return a("el-option-group",{key:e.name,attrs:{value:e.name,label:e.name}},t._l(e.item,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t._id}})}))})),a("label",{staticClass:"mt-8 bold"},[t._v("Tag")]),a("br"),a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"Thêm thẻ tag vào bài viết","no-match-text":"Chưa có thẻ này trong danh sách","no-data-text":"Chưa có thẻ nào",multiple:"",filterable:"","allow-create":"","default-first-option":""},model:{value:t.form.addPost.tag,callback:function(e){t.$set(t.form.addPost,"tag",e)},expression:"form.addPost.tag"}},t._l(t.form.addPost.tag,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("label",{staticClass:"mt-8 bold"},[t._v("Ảnh chính (đại diện)")]),a("br"),a("div",[t._l(t.v.imageReview,function(e,i){return[a("div",{style:"background-size:cover; float:left; margin-right:5px; width:200px; height:100px; border:1px solid rgba(45,45,8,.2); background-image:url("+e+")"},[a("button",{staticClass:"pull-right remove-image-class",attrs:{type:"button"},on:{click:function(e){t.m_removeImageIndex(i)}}},[a("span",{staticClass:"el-icon-close"})])])]}),t.v.imageReview.length<1?a("img",{staticClass:"plusHover",staticStyle:{width:"100px",height:"100px",border:"1px solid rgba(45,45,8,.2)",cursor:"pointer"},attrs:{src:i("FOzE")},on:{click:t.m_openUploadImage}}):t._e(),a("img",{staticStyle:{width:"100px",visibility:"hidden",height:"100px",border:"1px solid rgba(45,45,8,.2)",cursor:"pointer"}}),a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"inputFileUploadLisDeal",accept:"image/jpeg"},on:{change:function(e){t.m_InputFileChange(e)}}})],2)])]),a("label",{staticClass:"mt-8 bold"},[t._v("Nội dung chi tiết")]),a("section",{staticClass:"container-q"},[a("div",{directives:[{name:"quill",rawName:"v-quill:myQuillEditor",value:t.editorOption,expression:"editorOption",arg:"myQuillEditor"}],staticClass:"quill-editor",attrs:{id:"mcontent",content:t.content}})]),a("div",{staticStyle:{"margin-top":"20px"}},[a("grebtn",{attrs:{title:"Thêm bài viết này",loading:t.v.isLoading,type:"submit"}})],1)])])])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},TJYT:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,'.container-q .quill-editor[data-v-529c6481]{min-height:200px;max-height:400px;overflow-y:auto}.plusHover[data-v-529c6481]:hover{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="1" /></filter></svg>#filter\');-webkit-filter:blur(1px);filter:blur(1px);-webkit-transition:all .8s ease-in-out;transition:all .8s ease-in-out}.remove-image-class[data-v-529c6481]{width:25px;height:25px;border:0;border-radius:50vh;background-color:hsla(0,0%,100%,.2);outline:none}.remove-image-class[data-v-529c6481]:hover{background-color:rgba(45,45,48,.6)}.remove-image-class:hover span[data-v-529c6481]{color:#fff;outline:none}',""])},ydWs:function(t,e,i){var a=i("TJYT");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("22c6df8c",a,!1)}});