(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["StaffSignin"],{3389:function(t,e,n){"use strict";var a=n("38b3"),i=n.n(a);i.a},"38b3":function(t,e,n){},"454f":function(t,e,n){n("46a7");var a=n("584a").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},"456d":function(t,e,n){var a=n("4bf8"),i=n("0d58");n("5eda")("keys",(function(){return function(t){return i(a(t))}}))},"46a7":function(t,e,n){var a=n("63b6");a(a.S+a.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"5eda":function(t,e,n){var a=n("5ca1"),i=n("8378"),r=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),a(a.S+a.F*r((function(){n(1)})),"Object",s)}},7676:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layoutR-contain"},[n("el-tabs",{staticClass:"vip-tabBox pubWidth  tab-header",attrs:{id:"staffPay-tabBox"},on:{"tab-click":t.tabTotal},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{lazy:t.tabLazy,label:"打卡记录",name:"StaffSalary"}},[n("form",{staticClass:"pt-screen"},[n("el-input",{staticClass:"pt-screen-input",attrs:{placeholder:"请输入会员姓名、电话",clearable:""},model:{value:t.staffName,callback:function(e){t.staffName=e},expression:"staffName"}}),n("el-date-picker",{staticClass:"month-inp",attrs:{placeholder:"请选择月份",type:"month","value-format":"yyyy-MM"},model:{value:t.staffMonth,callback:function(e){t.staffMonth=e},expression:"staffMonth"}}),n("el-button",{staticClass:"btn-public",attrs:{icon:"el-icon-search",loading:t.loadState.searchLoad},on:{click:t.btnSeaStaffSignin}},[t._v("搜索")]),n("el-button",{staticClass:"btn-public fr",attrs:{icon:"el-icon-notebook-1"},on:{click:t.singExport}},[t._v("导出")])],1),n("div",{},[n("table",{staticClass:"staffSign-table"},[n("thead",[n("tr",{staticClass:"thead"},[n("th",{staticClass:"cell"},[t._v("姓名")]),t._l(t.signStaffList,(function(e,a){return n("th",{key:a},[n("div",{staticClass:"cell"},[t._v(t._s(e.name))])])}))],2)]),n("tbody",[n("tr",[n("td",{staticClass:"cell"},[t._v("统计")]),t._l(t.signStaffList,(function(e,a){return n("td",{key:a},[n("div",{staticClass:"cell"},[n("i",{staticClass:"iconfont icon-shangban"}),t._v("上班："+t._s(e.up)+"天")]),n("div",{staticClass:"cell"},[n("i",{staticClass:"iconfont icon-daka"}),t._v("休息："+t._s(e.rest)+"天")]),n("div",{staticClass:"cell sign-warn"},[n("i",{staticClass:"el-icon-warning"}),t._v("异常："+t._s(e.abnormal)+"天")])])}))],2),t._l(t.signStaffDate,(function(e,a){return n("tr",{key:a},[n("td",[n("div",{staticClass:"cell"},[t._v(t._s(e.day))])]),t._l(e.check,(function(e,a){return n("td",{key:a},["未到时"==e.clockin&&"未到时"==e.clockout?n("div",[n("div",{staticClass:"cell clock-in"},[t._v("\n                                        /\n                                    ")])]):n("div",["上班:未打卡"==e.clockin?n("div",{staticClass:"cell clock-in"},[t._v(t._s(e.clockin))]):"未到时"==e.clockin?n("div",{staticClass:"cell clock-in"},[t._v("/")]):n("div",{staticClass:"cell clock-out"},[t._v(t._s(e.clockin))]),"下班:未打卡"==e.clockout?n("div",{staticClass:"cell clock-in"},[t._v(t._s(e.clockout))]):"未到时"==e.clockout?n("div",{staticClass:"cell clock-in"},[t._v("/")]):n("div",{staticClass:"cell clock-out"},[t._v(t._s(e.clockout))])])])}))],2)}))],2)]),n("div",{staticClass:"page-assist"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next,total,jumper",total:t.pageTotalRows,"page-size":t.pageListRows},on:{"current-change":t.PageCurrent}})],1)])]),n("el-tab-pane",{attrs:{lazy:t.tabLazy,label:"班次设置",name:"StaffRoyalty"}},[n("div",{staticClass:"clearfix"},[n("el-button",{staticClass:"fr btn-public",attrs:{type:"primary"},on:{click:t.btnSetTime}},[n("i",{staticClass:"el-icon-setting"}),t._v("设置\n                ")])],1),n("table",{staticClass:"staffClass-table edit-table"},[n("thead",[n("tr",[n("th",[t._v("序号")]),n("th",[t._v("班次")]),n("th",[t._v("上班时间")]),n("th",[t._v("下班时间")]),n("th",[t._v("操作")])])]),n("tbody",[n("tr",[n("td",[t._v("1")]),n("td",[t._v("正班")]),n("td",[t._v(t._s(t.calssTimeForm.start_time))]),n("td",[t._v(t._s(t.calssTimeForm.end_time)+" ")]),n("td",[n("el-button",{staticClass:"btn-noBor",attrs:{size:"mini"},on:{click:function(e){return t.goStaffIndex("1")}}},[t._v("查看此班人员")])],1)]),n("tr",[n("td",[t._v("2")]),n("td",[t._v("早班")]),n("td",[t._v(t._s(t.calssTimeForm.start_time_m))]),n("td",[t._v(t._s(t.calssTimeForm.end_time_m))]),n("td",[n("el-button",{staticClass:"btn-noBor",attrs:{size:"mini"},on:{click:function(e){return t.goStaffIndex("2")}}},[t._v("查看此班人员")])],1)]),n("tr",[n("td",[t._v("3")]),n("td",[t._v("中班")]),n("td",[t._v(t._s(t.calssTimeForm.start_time_a))]),n("td",[t._v(t._s(t.calssTimeForm.end_time_a))]),n("td",[n("el-button",{staticClass:"btn-noBor",attrs:{size:"mini"},on:{click:function(e){return t.goStaffIndex("3")}}},[t._v("查看此班人员")])],1)]),n("tr",[n("td",[t._v("4")]),n("td",[t._v("晚班")]),n("td",[t._v(t._s(t.calssTimeForm.start_time_e)+" ")]),n("td",[t._v(t._s(t.calssTimeForm.end_time_e)+" ")]),n("td",[n("el-button",{staticClass:"btn-noBor",attrs:{size:"mini"},on:{click:function(e){return t.goStaffIndex("4")}}},[t._v("查看此班人员")])],1)])])])])],1),n("el-dialog",{attrs:{title:"班次设置",visible:t.EditTimeForm},on:{"update:visible":function(e){t.EditTimeForm=e}}},[n("el-form",{staticClass:"class-time",attrs:{"label-width":t.formLabelWidth},model:{value:t.calssTimeForm,callback:function(e){t.calssTimeForm=e},expression:"calssTimeForm"}},[n("el-form-item",{attrs:{label:"正班"}},[n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.start_time,callback:function(e){t.$set(t.calssTimeForm,"start_time",e)},expression:"calssTimeForm.start_time"}}),n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.end_time,callback:function(e){t.$set(t.calssTimeForm,"end_time",e)},expression:"calssTimeForm.end_time"}})],1),n("el-form-item",{attrs:{label:"早班"}},[n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.start_time_m,callback:function(e){t.$set(t.calssTimeForm,"start_time_m",e)},expression:"calssTimeForm.start_time_m"}}),n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.end_time_m,callback:function(e){t.$set(t.calssTimeForm,"end_time_m",e)},expression:"calssTimeForm.end_time_m"}})],1),n("el-form-item",{attrs:{label:"正班"}},[n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.start_time_a,callback:function(e){t.$set(t.calssTimeForm,"start_time_a",e)},expression:"calssTimeForm.start_time_a"}}),n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.end_time_a,callback:function(e){t.$set(t.calssTimeForm,"end_time_a",e)},expression:"calssTimeForm.end_time_a"}})],1),n("el-form-item",{attrs:{label:"正班"}},[n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.start_time_e,callback:function(e){t.$set(t.calssTimeForm,"start_time_e",e)},expression:"calssTimeForm.start_time_e"}}),n("el-time-picker",{attrs:{placeholder:"选择时间","value-format":"HH:mm",format:"HH:mm"},model:{value:t.calssTimeForm.end_time_e,callback:function(e){t.$set(t.calssTimeForm,"end_time_e",e)},expression:"calssTimeForm.end_time_e"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.EditTimeForm=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary",loading:t.sureDiaTime},on:{click:function(e){return t.sureDialogTIme()}}},[t._v("确 定")])],1)],1)],1)},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("c5f6"),n("7f7f"),n("bd86")),s=n("2f62"),c=n("a474");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u={inject:["reLoad"],name:"Staffsignin",data:function(){return{activeName:"StaffSalary",tabLazy:!0,formLabelWidth:"120px",loadState:{searchLoad:!1},signStaffList:[],signStaffDate:[],staffName:"",staffMonth:"",pageTotalRows:0,pageListRows:0,staffPage:1,EditTimeForm:!1,sureDiaTime:!1,calssTimeForm:{zmtek_ver:2,type:2,start_time:"",end_time:"",start_time_m:"",end_time_m:"",start_time_a:"",end_time_a:"",start_time_e:"",end_time_e:""}}},methods:m({},Object(s["b"])({ActSaveStaffClasses:"StoreTagNav/ActSaveStaffClasses"}),{tabTotal:function(t,e){var n=t.name;sessionStorage.setItem("StaffSignTabName",n)},getStaffSignin:function(){var t=this;Object(c["P"])({zmtek_ver:2,p:this.staffPage,keywords:this.staffName,starttime:this.staffMonth}).then((function(e){1==e.status&&(console.log(e),t.signStaffList=e.data.staff.list,t.signStaffDate=e.data.date,t.pageTotalRows=Number(e.data.staff.totalRows),t.pageListRows=e.data.staff.listRows)})).catch((function(t){console.log(t)}))},btnSeaStaffSignin:function(){this.GLOBAL.btnStateChange(this,"loadState","searchLoad"),this.staffPage=1,this.getStaffSignin()},PageCurrent:function(t){this.staffPage=t,this.getStaffSignin()},singExport:function(){var t=this.GLOBAL.localUrl,e=this.staffPage,n=this.staffName,a=this.staffMonth;""==a&&(a=this.$moment().format("YYYY-MM"));var i=t+"/staff/excel_sign.html?zmtek_ver=2&p="+e+"&keywords="+n+"&starttime="+a;console.log(i),window.location.href=i},staffSetcommutertime:function(){var t=this;Object(c["O"])(this.calssTimeForm).then((function(e){1==e.status?(console.log(e),2==t.calssTimeForm.type&&(t.calssTimeForm.start_time=e.data.commuterup_time,t.calssTimeForm.end_time=e.data.commuterdn_time,t.calssTimeForm.start_time_m=e.data.commuterup_time_m,t.calssTimeForm.end_time_m=e.data.commuterdn_time_m,t.calssTimeForm.start_time_a=e.data.commuterup_time_a,t.calssTimeForm.end_time_a=e.data.commuterdn_time_a,t.calssTimeForm.start_time_e=e.data.commuterup_time_e,t.calssTimeForm.end_time_e=e.data.commuterdn_time_e),1==t.calssTimeForm.type&&(t.$message.success(e.info),setTimeout((function(){t.EditTimeForm=!1}),1e3))):t.$message.error(e.info)})).catch((function(t){console.log(t)}))},btnSetTime:function(){this.EditTimeForm=!0},sureDialogTIme:function(){var t=this;this.sureDiaTime=!0,this.calssTimeForm.type=1,this.staffSetcommutertime(),setTimeout((function(){t.sureDiaTime=!1}),1e3)},goStaffIndex:function(t){this.$router.push({path:"/Staff/index"});var e=t;console.log(t),this.ActSaveStaffClasses(e)}}),created:function(){this.getStaffSignin();var t=sessionStorage.getItem("StaffSignTabName");null==t?t=this.activeName:this.activeName=t,this.staffSetcommutertime()}},l=u,f=(n("3389"),n("2877")),d=Object(f["a"])(l,a,i,!1,null,null,null);e["default"]=d.exports},"85f2":function(t,e,n){t.exports=n("454f")},"8e6e":function(t,e,n){var a=n("5ca1"),i=n("990b"),r=n("6821"),s=n("11e9"),c=n("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,a=r(t),o=s.f,m=i(a),u={},l=0;while(m.length>l)n=o(a,e=m[l++]),void 0!==n&&c(u,e,n);return u}})},"990b":function(t,e,n){var a=n("9093"),i=n("2621"),r=n("cb7c"),s=n("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=a.f(r(t)),n=i.f;return n?e.concat(n(t)):e}},a474:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"l",(function(){return m})),n.d(e,"h",(function(){return u})),n.d(e,"k",(function(){return l})),n.d(e,"g",(function(){return f})),n.d(e,"f",(function(){return d})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return _})),n.d(e,"Q",(function(){return v})),n.d(e,"R",(function(){return p})),n.d(e,"U",(function(){return h})),n.d(e,"T",(function(){return g})),n.d(e,"S",(function(){return O})),n.d(e,"y",(function(){return S})),n.d(e,"o",(function(){return j})),n.d(e,"p",(function(){return T})),n.d(e,"q",(function(){return k})),n.d(e,"w",(function(){return F})),n.d(e,"x",(function(){return y})),n.d(e,"v",(function(){return C})),n.d(e,"r",(function(){return x})),n.d(e,"u",(function(){return w})),n.d(e,"t",(function(){return H})),n.d(e,"s",(function(){return A})),n.d(e,"z",(function(){return P})),n.d(e,"A",(function(){return L})),n.d(e,"m",(function(){return N})),n.d(e,"n",(function(){return D})),n.d(e,"K",(function(){return z})),n.d(e,"G",(function(){return M})),n.d(e,"I",(function(){return W})),n.d(e,"N",(function(){return $})),n.d(e,"M",(function(){return E})),n.d(e,"J",(function(){return R})),n.d(e,"H",(function(){return I})),n.d(e,"L",(function(){return B})),n.d(e,"P",(function(){return Y})),n.d(e,"O",(function(){return G})),n.d(e,"F",(function(){return J})),n.d(e,"E",(function(){return K})),n.d(e,"D",(function(){return U})),n.d(e,"B",(function(){return q})),n.d(e,"C",(function(){return Q}));var a=n("27fe"),i=function(t){return Object(a["a"])("admin/Web/indexMenu",t)},r=function(t){return Object(a["b"])("admin/Web/login",t)},s=function(t){return Object(a["b"])("admin/Web/login_out",t)},c=function(t){return Object(a["b"])("admin/Web/update_password",t)},o=function(t){return Object(a["b"])("admin/Member/getMemberInfo",t)},m=function(t){return Object(a["b"])("admin/Web/total_membership",t)},u=function(t){return Object(a["b"])("admin/Web/new_membership",t)},l=function(t){return Object(a["b"])("admin/Web/statistics",t)},f=function(t){return Object(a["b"])("admin/Web/drawer",t)},d=function(t){return Object(a["b"])("admin/Web/curriculum",t)},b=function(t){return Object(a["b"])("admin/Web/performance",t)},_=function(t){return Object(a["b"])("admin/Web/revenue_trend",t)},v=function(t){return Object(a["b"])("admin/statis/member_number",t)},p=function(t){return Object(a["b"])("admin/statis/member_trend",t)},h=function(t){return Object(a["b"])("admin/statis/sub_card_trend",t)},g=function(t){return Object(a["b"])("admin/statis/refund_transfer_trend",t)},O=function(t){return Object(a["b"])("admin/statis/passenger_trend",t)},S=function(t){return Object(a["b"])("admin/statis/private_member_statis",t)},j=function(t){return Object(a["b"])("admin/statis/class_ranking",t)},T=function(t){return Object(a["a"])("Admin/Statis/saleroom",t)},k=function(t){return Object(a["a"])("Admin/Statis/classNumber",t)},F=function(t){return Object(a["a"])("Admin/Statis/perNumPri",t)},y=function(t){return Object(a["a"])("Admin/Statis/perNumPriparticulars",t)},C=function(t){return Object(a["a"])("Admin/statis/expire_ski",t)},x=function(t){return Object(a["a"])("Admin/statis/expire_coach",t)},w=function(t){return Object(a["a"])("Admin/statis/expire_reminder",t)},H=function(t){return Object(a["a"])("Admin/statis/expire_num",t)},A=function(t){return Object(a["a"])("Admin/statis/lazy",t)},P=function(t){return Object(a["b"])("Admin/Statis/member_tk_class",t)},L=function(t){return Object(a["b"])("Admin/Statis/saler_statis",t)},N=function(t){return Object(a["a"])("Admin/Statis/counselorsaleroom",t)},D=function(t){return Object(a["a"])("Admin/Statis/counselorclassNumber",t)},z=function(t){return Object(a["a"])("admin/staff/index",t)},M=function(t){return Object(a["b"])("admin/staff/add",t)},W=function(t){return Object(a["b"])("admin/staff/del",t)},$=function(t){return Object(a["a"])("admin/staff/salary/menuid",t)},E=function(t){return Object(a["a"])("admin/staff/reward_punish",t)},R=function(t){return Object(a["a"])("admin/staff/staff_group",t)},I=function(t){return Object(a["a"])("admin/staff/deduct",t)},B=function(t){return Object(a["a"])("admin/staff/phases",t)},Y=function(t){return Object(a["a"])("admin/staff/signin",t)},G=function(t){return Object(a["a"])("admin/Staff/setcommutertime",t)},J=function(t){return Object(a["a"])("Admin/Statis/total_revenue",t)},K=function(t){return Object(a["a"])("Admin/Statis/project_revenue_ranking",t)},U=function(t){return Object(a["a"])("Admin/Statis/pay_method_ranking",t)},q=function(t){return Object(a["a"])("Admin/Statis/contract_statis",t)},Q=function(t){return Object(a["a"])("Admin/Statis/revenueDetails",t)}},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("85f2"),i=n.n(a);function r(t,e,n){return e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},f1ae:function(t,e,n){"use strict";var a=n("86cc"),i=n("4630");t.exports=function(t,e,n){e in t?a.f(t,e,i(0,n)):t[e]=n}}}]);