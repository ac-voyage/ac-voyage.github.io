(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{173:function(t,s,a){"use strict";a.r(s);var i=a(0),e=Object(i.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("略")]),t._v(" "),t._m(2),t._v(" "),a("h3",{attrs:{id:"无修改求区间第-大"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无修改求区间第-大","aria-hidden":"true"}},[t._v("#")]),t._v(" 无修改求区间第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),t._m(3)]),t._v(" 大")]),t._v(" "),a("ol",[a("li",[t._v("首先, 给你一颗值为横坐标的线段树, 每个节点上存着该值出现了多少次, 这样的一颗线段树你会求区间 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),t._m(4)]),t._v(" 大值吧. 二分即可.")]),t._v(" "),a("li",[t._v("然后, 假设区间是数组 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mi",[t._v("r")]),a("mi",[t._v("r")]),a("mo",[t._v("[")]),a("mi",[t._v("n")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("arr[n]")])],1)],1)],1),t._m(5)]),t._v(", 区间长度是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),t._m(6)]),t._v(", 那么给你 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),t._m(7)]),t._v(" 颗线段树, 第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),t._m(8)]),t._v(" 颗线段树是第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i-1")])],1)],1)],1),t._m(9)]),t._v(" 颗线段树插入 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mi",[t._v("r")]),a("mi",[t._v("r")]),a("mo",[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("arr[i]")])],1)],1)],1),t._m(10)]),t._v(" 得到.")]),t._v(" "),a("li",[t._v("如果你有了这 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),t._m(11)]),t._v(" 颗线段树, 想求区间 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("[")]),a("mi",[t._v("l")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("r")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[l,r]")])],1)],1)],1),t._m(12)]),t._v(" 中的第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),t._m(13)]),t._v(" 大值, 那么你需要在第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("r")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("r")])],1)],1)],1),t._m(14)]),t._v(" 颗和第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("l-1")])],1)],1)],1),t._m(15)]),t._v(" 颗线段树的差线段树上作二分, 就可以求得区间第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),t._m(16)]),t._v(" 大值.")]),t._v(" "),a("li",[t._v("差线段树很好理解, 比如你有一个部分和数组 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum")])],1)],1)],1),t._m(17)]),t._v(", "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mo",[t._v("[")]),a("mi",[t._v("r")]),a("mo",[t._v("]")]),a("mo",[t._v("−")]),a("mi",[t._v("s")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mo",[t._v("[")]),a("mi",[t._v("l")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("sum[r]-sum[l-1]")])],1)],1)],1),t._m(18)]),t._v(" 就是部分和的差, 代表区间 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("[")]),a("mi",[t._v("l")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("r")]),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[l,r]")])],1)],1)],1),t._m(19)]),t._v(" 的和,差线段树同理.")]),t._v(" "),a("li",[t._v("现在, 可持久化线段树出现为你解决最后一个问题, 空间问题. 内存很小, 不能够存下 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),t._m(20)]),t._v(" 颗线段树. 但是, 第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mn",[t._v("2")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2")])],1)],1)],1),t._m(21)]),t._v(" 条中提到, 由于第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),t._m(22)]),t._v(" 颗线段是是第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i-1")])],1)],1)],1),t._m(23)]),t._v(" 颗线段是插入仅一个值得到的, 两颗线段树的区别不大, 仅有 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mo",[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\log(n)")])],1)],1)],1),t._m(24)]),t._v(" 个节点发生了改变, 我们仅仅需要记录这 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mo",[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\log(n)")])],1)],1)],1),t._m(25)]),t._v(" 的数据就可以记录这个增量, 这就是可持久化线段树.")])]),t._v(" "),t._m(26)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"可持久化线段树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可持久化线段树","aria-hidden":"true"}},[this._v("#")]),this._v(" 可持久化线段树")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[this._v("k")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[this._v("k")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("r")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("r")]),s("span",{staticClass:"mopen"},[this._v("[")]),s("span",{staticClass:"mord mathit"},[this._v("n")]),s("span",{staticClass:"mclose"},[this._v("]")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("i")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.74285em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("i")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[this._v("−")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mord"},[this._v("1")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("a")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("r")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("r")]),s("span",{staticClass:"mopen"},[this._v("[")]),s("span",{staticClass:"mord mathit"},[this._v("i")]),s("span",{staticClass:"mclose"},[this._v("]")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mopen"},[this._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[this._v("l")]),s("span",{staticClass:"mpunct"},[this._v(",")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("r")]),s("span",{staticClass:"mclose"},[this._v("]")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[this._v("k")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("r")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.77777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[this._v("l")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[this._v("−")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mord"},[this._v("1")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[this._v("k")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("s")]),s("span",{staticClass:"mord mathit"},[this._v("u")]),s("span",{staticClass:"mord mathit"},[this._v("m")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base"},[a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathit"},[t._v("s")]),a("span",{staticClass:"mord mathit"},[t._v("u")]),a("span",{staticClass:"mord mathit"},[t._v("m")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mopen"},[this._v("[")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[this._v("l")]),s("span",{staticClass:"mpunct"},[this._v(",")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("r")]),s("span",{staticClass:"mclose"},[this._v("]")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord"},[this._v("2")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("i")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.74285em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("i")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[this._v("−")]),s("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mord"},[this._v("1")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mop"},[this._v("lo"),s("span",{staticStyle:{"margin-right":"0.01389em"}},[this._v("g")])]),s("span",{staticClass:"mopen"},[this._v("(")]),s("span",{staticClass:"mord mathit"},[this._v("n")]),s("span",{staticClass:"mclose"},[this._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mop"},[this._v("lo"),s("span",{staticStyle:{"margin-right":"0.01389em"}},[this._v("g")])]),s("span",{staticClass:"mopen"},[this._v("(")]),s("span",{staticClass:"mord mathit"},[this._v("n")]),s("span",{staticClass:"mclose"},[this._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("作者：Comzyh "),s("br"),this._v("\n链接：https://www.zhihu.com/question/25959110/answer/37947531 "),s("br"),this._v("\n来源：知乎 "),s("br"),this._v("\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}],!1,null,null,null);e.options.__file="persistent-segment-tree.md";s.default=e.exports}}]);