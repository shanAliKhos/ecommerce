(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{243:function(t,e,s){"use strict";s.r(e);var a=s(89),n={data:function(){return{Logo:this.$page.SiteOptions.Logo?"/"+this.$page.SiteOptions.Logo.replace("public","storage"):""}}},r=s(0),i={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"==this.align?"origin-top-left left-0":"right"==this.align?"origin-top-right right-0":"origin-top"}}},o={props:["href","as"]},l={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}},u={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}},c={components:{JetApplicationMark:Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("inertia-link",{attrs:{href:"/"}},[e("img",{attrs:{src:this.Logo,alt:""}})])}),[],!1,null,null,null).exports,JetDropdown:Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 rounded-md shadow-lg",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[s("div",{staticClass:"rounded-md shadow-xs",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports,JetDropdownLink:Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",t._b({staticClass:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},"button",t.$attrs,!1),[t._t("default")],2):s("inertia-link",t._b({staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},"inertia-link",t.$attrs,!1),[t._t("default")],2)],1)}),[],!1,null,null,null).exports,JetNavLink:Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("inertia-link",this._b({class:this.classes,attrs:{href:this.href}},"inertia-link",this.$attrs,!1),[this._t("default")],2)}),[],!1,null,null,null).exports,JetResponsiveNavLink:Object(r.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",t._b({staticClass:"w-full text-left",class:t.classes},"button",t.$attrs,!1),[t._t("default")],2):s("inertia-link",t._b({class:t.classes,attrs:{href:t.href}},"inertia-link",t.$attrs,!1),[t._t("default")],2)],1)}),[],!1,null,null,null).exports},data:function(){return{showingNavigationDropdown:!1}},methods:{switchToTeam:function(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})}}},d=Object(r.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-screen bg-gray-100"},[s("nav",{staticClass:"bg-white border-b border-gray-100"},[s("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex justify-between h-16"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-shrink-0 flex items-center"},[s("inertia-link",{attrs:{href:t.route("dashboard")}},[s("jet-application-mark",{staticClass:"block h-9 w-auto"})],1)],1),t._v(" "),s("div",{staticClass:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},[t.$page.user.is_admin?s("jet-nav-link",{attrs:{href:t.route("admin.dashboard"),active:t.route().current("admin.dashboard")}},[t._v("\n                            Dashboard\n                        ")]):s("jet-nav-link",{attrs:{href:t.route("welcome"),active:t.route().current("welcome")}},[t._v("\n                            Home\n                        ")])],1)]),t._v(" "),s("div",{staticClass:"hidden sm:flex sm:items-center sm:ml-6"},[s("div",{staticClass:"ml-3 relative"},[s("jet-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.jetstream.managesProfilePhotos?s("button",{staticClass:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},[s("img",{staticClass:"h-8 w-8 rounded-full object-cover",attrs:{src:t.$page.user.profile_photo_url,alt:t.$page.user.name}})]):s("button",{staticClass:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"},[s("div",[t._v(t._s(t.$page.user.name))]),t._v(" "),s("div",{staticClass:"ml-1"},[s("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                    Manage Account\n                                ")]),t._v(" "),s("jet-dropdown-link",{attrs:{href:t.route("profile.show")}},[t._v("\n                                    Profile\n                                ")]),t._v(" "),t.$page.jetstream.hasApiFeatures?s("jet-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                    API Tokens\n                                ")]):t._e(),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),t.$page.jetstream.hasTeamFeatures?[s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                        Manage Team\n                                    ")]),t._v(" "),s("jet-dropdown-link",{attrs:{href:t.route("teams.show",t.$page.user.current_team)}},[t._v("\n                                        Team Settings\n                                    ")]),t._v(" "),t.$page.jetstream.canCreateTeams?s("jet-dropdown-link",{attrs:{href:t.route("teams.create")}},[t._v("\n                                        Create New Team\n                                    ")]):t._e(),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                        Switch Teams\n                                    ")]),t._v(" "),t._l(t.$page.user.all_teams,(function(e){return[s("form",{key:e.id,on:{submit:function(s){return s.preventDefault(),t.switchToTeam(e)}}},[s("jet-dropdown-link",{attrs:{as:"button"}},[s("div",{staticClass:"flex items-center"},[e.id==t.$page.user.current_team_id?s("svg",{staticClass:"mr-2 h-5 w-5 text-green-400",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),s("div",[t._v(t._s(e.name))])])])],1)]})),t._v(" "),s("div",{staticClass:"border-t border-gray-100"})]:t._e(),t._v(" "),s("jet-dropdown-link",{attrs:{href:t.route("logout"),method:"post"}},[t._v("\n                                        Logout\n                                    ")])]},proxy:!0}])})],1)]),t._v(" "),s("div",{staticClass:"-mr-2 flex items-center sm:hidden"},[s("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",on:{click:function(e){t.showingNavigationDropdown=!t.showingNavigationDropdown}}},[s("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{class:{hidden:t.showingNavigationDropdown,"inline-flex":!t.showingNavigationDropdown},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}}),t._v(" "),s("path",{class:{hidden:!t.showingNavigationDropdown,"inline-flex":t.showingNavigationDropdown},attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),s("div",{staticClass:"sm:hidden",class:{block:t.showingNavigationDropdown,hidden:!t.showingNavigationDropdown}},[s("div",{staticClass:"pt-2 pb-3 space-y-1"},[s("jet-responsive-nav-link",{attrs:{href:t.route("dashboard"),active:t.route().current("dashboard")}},[t._v("\n                    Dashboard\n                ")])],1),t._v(" "),s("div",{staticClass:"pt-4 pb-1 border-t border-gray-200"},[s("div",{staticClass:"flex items-center px-4"},[s("div",{staticClass:"flex-shrink-0"},[s("img",{staticClass:"h-10 w-10 rounded-full",attrs:{src:t.$page.user.profile_photo_url,alt:t.$page.user.name}})]),t._v(" "),s("div",{staticClass:"ml-3"},[s("div",{staticClass:"font-medium text-base text-gray-800"},[t._v(t._s(t.$page.user.name))]),t._v(" "),s("div",{staticClass:"font-medium text-sm text-gray-500"},[t._v(t._s(t.$page.user.email))])])]),t._v(" "),s("div",{staticClass:"mt-3 space-y-1"},[s("jet-responsive-nav-link",{attrs:{href:t.route("profile.show"),active:t.route().current("profile.show")}},[t._v("\n                        Profile\n                    ")]),t._v(" "),t.$page.jetstream.hasApiFeatures?s("jet-responsive-nav-link",{attrs:{href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")}},[t._v("\n                        API Tokens\n                    ")]):t._e(),t._v(" "),s("jet-responsive-nav-link",{attrs:{href:t.route("logout"),method:"post"}},[t._v("\n                            Logout\n                        ")]),t._v(" "),t.$page.jetstream.hasTeamFeatures?[s("div",{staticClass:"border-t border-gray-200"}),t._v(" "),s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                            Manage Team\n                        ")]),t._v(" "),s("jet-responsive-nav-link",{attrs:{href:t.route("teams.show",t.$page.user.current_team),active:t.route().current("teams.show")}},[t._v("\n                            Team Settings\n                        ")]),t._v(" "),s("jet-responsive-nav-link",{attrs:{href:t.route("teams.create"),active:t.route().current("teams.create")}},[t._v("\n                            Create New Team\n                        ")]),t._v(" "),s("div",{staticClass:"border-t border-gray-200"}),t._v(" "),s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                            Switch Teams\n                        ")]),t._v(" "),t._l(t.$page.user.all_teams,(function(e){return[s("form",{key:e.id,on:{submit:function(s){return s.preventDefault(),t.switchToTeam(e)}}},[s("jet-responsive-nav-link",{attrs:{as:"button"}},[s("div",{staticClass:"flex items-center"},[e.id==t.$page.user.current_team_id?s("svg",{staticClass:"mr-2 h-5 w-5 text-green-400",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),s("div",[t._v(t._s(e.name))])])])],1)]}))]:t._e()],2)])])]),t._v(" "),s("header",{staticClass:"bg-white shadow"},[s("div",{staticClass:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},[t._t("header")],2)]),t._v(" "),s("main",[t._t("default")],2),t._v(" "),s("portal-target",{attrs:{name:"modal",multiple:""}})],1)}),[],!1,null,null,null).exports,v=s(35),p={props:["tokens","availablePermissions","defaultPermissions"],components:{ApiTokenManager:a.default,AppLayout:d,JetSectionBorder:v.a}},g=Object(r.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("app-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h2",{staticClass:"font-semibold text-xl text-gray-800 leading-tight"},[t._v("\n            API Tokens\n        ")])]},proxy:!0}])},[t._v(" "),s("div",[s("div",{staticClass:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},[s("api-token-manager",{attrs:{tokens:t.tokens,"available-permissions":t.availablePermissions,"default-permissions":t.defaultPermissions}})],1)])])}),[],!1,null,null,null);e.default=g.exports}}]);