(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{182:function(t,s,a){"use strict";a.r(s);var i=a(0),e=Object(i.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("连接环中不相邻的两个点的边")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("一个无向图称为弦图，当且仅当图中任意长度大于 3 的环都至少有一个弦.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("设 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("N")]),a("mo",[t._v("(")]),a("mi",[t._v("v")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N(v)")])],1)],1)],1),t._m(5)]),t._v(" 表示与点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),t._m(6)]),t._v(" 相邻的点集.\n一个点称为单纯点当且仅当 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("{")]),a("mi",[t._v("v")]),a("mo",[t._v("}")]),a("mo",[t._v("+")]),a("mi",[t._v("N")]),a("mo",[t._v("(")]),a("mi",[t._v("v")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\{v\\} + N(v)")])],1)],1)],1),t._m(7)]),t._v(" 的诱导子图为一个团.")]),t._v(" "),t._m(8),t._v(" "),a("ul",[a("li",[t._v("弦图的每一个诱导子图一定是弦图")]),t._v(" "),a("li",[t._v("弦图的任一个诱导子图不同构与 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("C")]),a("mi",[t._v("n")])],1),a("mo",[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v(">")]),a("mn",[t._v("3")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("C_n(n > 3)")])],1)],1)],1),t._m(9)]),t._v(" (TODO: "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("C")]),a("mi",[t._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("C_n")])],1)],1)],1),t._m(10)]),t._v(" 是什么..感觉是含 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),t._m(11)]),t._v(" 个结点的完全图)")])]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("任何一个弦图都至少有一个单纯点，\n不是完全图的弦图至少有两个不相邻的单纯点.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("一个点的序列（每个点恰好出现一次）"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("v")]),a("mn",[t._v("1")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("v")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mo",[t._v("…")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("v")]),a("mi",[t._v("n")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v_1, v_2, \\dots, v_n")])],1)],1)],1),t._m(15)]),t._v("\n满足 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("v")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v_i")])],1)],1)],1),t._m(16)]),t._v(" 在 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("{")]),a("msub",[a("mi",[t._v("v")]),a("mi",[t._v("i")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("v")]),a("mrow",[a("mi",[t._v("i")]),a("mo",[t._v("+")]),a("mn",[t._v("1")])],1)],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mo",[t._v("…")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("v")]),a("mi",[t._v("n")])],1),a("mo",[t._v("}")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\{v_i, v_{i+1}, \\dots, v_n\\}")])],1)],1)],1),t._m(17)]),t._v(" 的诱导子图中为一个单纯点.")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("一个无向图是弦图当且仅当它有一个完美消除序列.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("ol",[a("li",[t._v("每次找一个单纯点 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),t._m(21)]),t._v("，加入到完美消除序列中.")]),t._v(" "),a("li",[t._v("将 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("v")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),t._m(22)]),t._v(" 及其相关的边从图中删掉.")]),t._v(" "),a("li",[t._v("重复以上过程直到所有点被删除（图是弦图，得到了完美消除序列）或不存在单纯点（图不是弦图）.")])]),t._v(" "),t._m(23),t._v(" "),t._m(24)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"弦图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弦图","aria-hidden":"true"}},[this._v("#")]),this._v(" 弦图")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"弦-chord"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弦-chord","aria-hidden":"true"}},[this._v("#")]),this._v(" 弦(chord)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"弦图-chordal-graph"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弦图-chordal-graph","aria-hidden":"true"}},[this._v("#")]),this._v(" 弦图(chordal graph)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"单纯点-simplicial-vertex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单纯点-simplicial-vertex","aria-hidden":"true"}},[this._v("#")]),this._v(" 单纯点(simplicial vertex)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("N")]),s("span",{staticClass:"mopen"},[this._v("(")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("v")]),s("span",{staticClass:"mclose"},[this._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("v")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base"},[a("span",{staticClass:"mopen"},[t._v("{")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v("}")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"几个性质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几个性质","aria-hidden":"true"}},[this._v("#")]),this._v(" 几个性质")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathit mtight"},[t._v("n")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit"},[t._v("n")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v(">")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord"},[t._v("3")]),a("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[this._v("C")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[s("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.07153em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathit mtight"},[this._v("n")])])])]),s("span",{staticClass:"vlist-s"},[this._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit"},[this._v("n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一个引理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个引理","aria-hidden":"true"}},[this._v("#")]),this._v(" 一个引理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"完美消除序列-perfect-elimination-ordering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完美消除序列-perfect-elimination-ordering","aria-hidden":"true"}},[this._v("#")]),this._v(" 完美消除序列(perfect elimination ordering)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("1")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.30110799999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[t._v("…")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathit mtight"},[t._v("n")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("v")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.31166399999999994em"}},[s("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathit mtight"},[this._v("i")])])])]),s("span",{staticClass:"vlist-s"},[this._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base"},[a("span",{staticClass:"mopen"},[t._v("{")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.31166399999999994em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathit mtight"},[t._v("i")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.311664em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathit mtight"},[t._v("i")]),a("span",{staticClass:"mbin mtight"},[t._v("+")]),a("span",{staticClass:"mord mtight"},[t._v("1")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.208331em"}})])])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[t._v("…")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord rule",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.03588em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathit mtight"},[t._v("n")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}})])])])]),a("span",{staticClass:"mclose"},[t._v("}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"定理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定理","aria-hidden":"true"}},[this._v("#")]),this._v(" 定理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"求完美消除序列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求完美消除序列","aria-hidden":"true"}},[this._v("#")]),this._v(" 求完美消除序列")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"朴素算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#朴素算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 朴素算法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("v")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"base"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("v")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"字典序广度优先搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字典序广度优先搜索","aria-hidden":"true"}},[this._v("#")]),this._v(" 字典序广度优先搜索")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"最大势算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最大势算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 最大势算法")])}],!1,null,null,null);e.options.__file="chord.md";s.default=e.exports}}]);