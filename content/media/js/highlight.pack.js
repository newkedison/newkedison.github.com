var hljs=new function(){function o(r){return r.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function h(t,s,r){return RegExp(s,"m"+(t.cI?"i":"")+(r?"g":""))}function d(t){for(var r=0;r<t.childNodes.length;r++){var s=t.childNodes[r];if(s.nodeName=="CODE"){return s}if(!(s.nodeType==3&&s.nodeValue.match(/\s+/))){break}}}var c=(typeof navigator!=="undefined"&&/MSIE [678]/.test(navigator.userAgent));function j(v,u){var r="";for(var t=0;t<v.childNodes.length;t++){if(v.childNodes[t].nodeType==3){var s=v.childNodes[t].nodeValue;if(u){s=s.replace(/\n/g,"")}r+=s}else{if(v.childNodes[t].nodeName=="BR"){r+="\n"}else{r+=j(v.childNodes[t])}}}if(c){r=r.replace(/\r/g,"\n")}return r}function a(u){var t=u.className.split(/\s+/);t=t.concat(u.parentNode.className.split(/\s+/));for(var s=0;s<t.length;s++){var r=t[s].replace(/^language-/,"");if(g[r]||r=="no-highlight"){return r}}}function e(t){var r=[];(function s(v,w){for(var u=0;u<v.childNodes.length;u++){if(v.childNodes[u].nodeType==3){w+=v.childNodes[u].nodeValue.length}else{if(v.childNodes[u].nodeName=="BR"){w+=1}else{if(v.childNodes[u].nodeType==1){r.push({event:"start",offset:w,node:v.childNodes[u]});w=s(v.childNodes[u],w);r.push({event:"stop",offset:w,node:v.childNodes[u]})}}}}return w})(t,0);return r}function m(A,y,z){var s=0;var B="";var u=[];function w(){if(A.length&&y.length){if(A[0].offset!=y[0].offset){return(A[0].offset<y[0].offset)?A:y}else{return y[0].event=="start"?A:y}}else{return A.length?A:y}}function v(F){var C="<"+F.nodeName.toLowerCase();for(var D=0;D<F.attributes.length;D++){var E=F.attributes[D];C+=" "+E.nodeName.toLowerCase();if(E.value!==undefined&&E.value!==false&&E.value!==null){C+='="'+o(E.value)+'"'}}return C+">"}while(A.length||y.length){var x=w().splice(0,1)[0];B+=o(z.substr(s,x.offset-s));s=x.offset;if(x.event=="start"){B+=v(x.node);u.push(x.node)}else{if(x.event=="stop"){var r,t=u.length;do{t--;r=u[t];B+=("</"+r.nodeName.toLowerCase()+">")}while(r!=x.node);u.splice(t,1);while(t<u.length){B+=v(u[t]);t++}}}}return B+o(z.substr(s))}function l(r){function s(y,A,w){if(y.compiled){return}var u=[];if(y.k){var t={};function z(F,E){var C=E.split(" ");for(var B=0;B<C.length;B++){var D=C[B].split("|");t[D[0]]=[F,D[1]?Number(D[1]):1];u.push(D[0])}}y.lR=h(A,y.l||hljs.IR,true);if(typeof y.k=="string"){z("keyword",y.k)}else{for(var x in y.k){if(!y.k.hasOwnProperty(x)){continue}z(x,y.k[x])}}y.k=t}if(!w){if(y.bWK){y.b="\\b("+u.join("|")+")\\s"}y.bR=h(A,y.b?y.b:"\\B|\\b");if(!y.e&&!y.eW){y.e="\\B|\\b"}if(y.e){y.eR=h(A,y.e)}}if(y.i){y.iR=h(A,y.i)}if(y.r===undefined){y.r=1}if(!y.c){y.c=[]}y.compiled=true;for(var v=0;v<y.c.length;v++){if(y.c[v]=="self"){y.c[v]=y}s(y.c[v],A,false)}if(y.starts){s(y.starts,A,false)}}s(g[r].dM,g[r],true)}var b={};function f(F,G){if(!b[F]){l(F);b[F]=true}function u(r,Q){for(var P=0;P<Q.c.length;P++){var O=Q.c[P].bR.exec(r);if(O&&O.index==0){return Q.c[P]}}}function y(O,r){if(s[O].e&&s[O].eR.test(r)){return 1}if(s[O].eW){var P=y(O-1,r);return P?P+1:0}return 0}function z(r,O){return O.i&&O.iR.test(r)}function N(Q,R){var P=[];for(var O=0;O<Q.c.length;O++){P.push(Q.c[O].b)}var r=s.length-1;do{if(s[r].e){P.push(s[r].e)}r--}while(s[r+1].eW);if(Q.i){P.push(Q.i)}return P.length?h(R,P.join("|"),true):null}function t(P,O){var Q=s[s.length-1];if(Q.t===undefined){Q.t=N(Q,H)}var r;if(Q.t){Q.t.lastIndex=O;r=Q.t.exec(P)}return r?[P.substr(O,r.index-O),r[0],false]:[P.substr(O),"",true]}function C(Q,r){var O=H.cI?r[0].toLowerCase():r[0];var P=Q.k[O];if(P&&P instanceof Array){return P}return false}function I(O,S){O=o(O);if(!S.k){return O}var r="";var R=0;S.lR.lastIndex=0;var P=S.lR.exec(O);while(P){r+=O.substr(R,P.index-R);var Q=C(S,P);if(Q){A+=Q[1];r+='<span class="'+Q[0]+'">'+P[0]+"</span>"}else{r+=P[0]}R=S.lR.lastIndex;P=S.lR.exec(O)}return r+O.substr(R)}function D(O,P){var r;if(P.sL==""){r=i(O)}else{r=f(P.sL,O)}if(P.r>0){A+=r.keyword_count;E+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function M(r,O){if(O.sL&&g[O.sL]||O.sL==""){return D(r,O)}else{return I(r,O)}}function L(P,r){var O=P.cN?'<span class="'+P.cN+'">':"";if(P.rB){B+=O;P.buffer=""}else{if(P.eB){B+=o(r)+O;P.buffer=""}else{B+=O;P.buffer=r}}s.push(P);E+=P.r}function J(Q,P,T){var U=s[s.length-1];if(T){B+=M(U.buffer+Q,U);return false}var S=u(P,U);if(S){B+=M(U.buffer+Q,U);L(S,P);return S.rB}var O=y(s.length-1,P);if(O){var R=U.cN?"</span>":"";if(U.rE){B+=M(U.buffer+Q,U)+R}else{if(U.eE){B+=M(U.buffer+Q,U)+R+o(P)}else{B+=M(U.buffer+Q+P,U)+R}}while(O>1){R=s[s.length-2].cN?"</span>":"";B+=R;O--;s.length--}var r=s[s.length-1];s.length--;s[s.length-1].buffer="";if(r.starts){L(r.starts,"")}return U.rE}if(z(P,U)){throw"Illegal"}}var H=g[F];var s=[H.dM];var E=0;var A=0;var B="";try{var v,x=0;H.dM.buffer="";do{v=t(G,x);var w=J(v[0],v[1],v[2]);x+=v[0].length;if(!w){x+=v[1].length}}while(!v[2]);return{r:E,keyword_count:A,value:B,language:F}}catch(K){if(K=="Illegal"){return{r:0,keyword_count:0,value:o(G)}}else{throw K}}}function i(v){var r={keyword_count:0,r:0,value:o(v)};var t=r;for(var s in g){if(!g.hasOwnProperty(s)){continue}var u=f(s,v);u.language=s;if(u.keyword_count+u.r>t.keyword_count+t.r){t=u}if(u.keyword_count+u.r>r.keyword_count+r.r){t=r;r=u}}if(t.language){r.second_best=t}return r}function k(t,s,r){if(s){t=t.replace(/^((<[^>]+>|\t)+)/gm,function(u,x,w,v){return x.replace(/\t/g,s)})}if(r){t=t.replace(/\n/g,"<br>")}return t}function p(v,y,t){var z=j(v,t);var x=a(v);var A,u;if(x=="no-highlight"){return}if(x){A=f(x,z)}else{A=i(z);x=A.language}var s=e(v);if(s.length){u=document.createElement("pre");u.innerHTML=A.value;A.value=m(s,e(u),z)}A.value=k(A.value,y,t);var w=v.className;if(!w.match("(\\s|^)(language-)?"+x+"(\\s|$)")){w=w?(w+" "+x):x}if(c&&v.tagName=="CODE"&&v.parentNode.tagName=="PRE"){u=v.parentNode;var r=document.createElement("div");r.innerHTML="<pre><code>"+A.value+"</code></pre>";v=r.firstChild.firstChild;r.firstChild.cN=u.cN;u.parentNode.replaceChild(r.firstChild,u)}else{v.innerHTML=A.value}v.className=w;v.result={language:x,kw:A.keyword_count,re:A.r};if(A.second_best){v.second_best={language:A.second_best.language,kw:A.second_best.keyword_count,re:A.second_best.r}}}function q(){if(q.called){return}q.called=true;var t=document.getElementsByTagName("pre");for(var r=0;r<t.length;r++){var s=d(t[r]);if(s){p(s,hljs.tabReplace)}}}function n(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",q,false);window.addEventListener("load",q,false)}else{if(window.attachEvent){window.attachEvent("onload",q)}else{window.onload=q}}}var g={};this.LANGUAGES=g;this.highlight=f;this.highlightAuto=i;this.fixMarkup=k;this.highlightBlock=p;this.initHighlighting=q;this.initHighlightingOnLoad=n;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(t,u){var r={};for(var s in t){r[s]=t[s]}if(u){for(var s in u){r[s]=u[s]}}return r}}();hljs.LANGUAGES.bash=function(a){var f="true false";var c={cN:"variable",b:"\\$[a-zA-Z0-9_]+\\b"};var b={cN:"variable",b:"\\${([^}]|\\\\})+}"};var g={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE,c,b],r:0};var d={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};var e={cN:"test_condition",b:"",e:"",c:[g,d,c,b],k:{literal:f},r:0};return{dM:{k:{keyword:"if then else fi for break continue while in do done echo exit return set declare",literal:f},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},c,b,a.HCM,g,d,a.inherit(e,{b:"\\[ ",e:" \\]",r:0}),a.inherit(e,{b:"\\[\\[ ",e:" \\]\\]"})]}}}(hljs);hljs.LANGUAGES.cs=function(a){return{dM:{k:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield",c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},a.CLCM,a.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a.ASM,a.QSM,a.CNM]}}}(hljs);hljs.LANGUAGES.ruby=function(e){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var j="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"};var c={cN:"yardoctag",b:"@[A-Za-z]+"};var k=[{cN:"comment",b:"#",e:"$",c:[c]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[c],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}];var d={cN:"subst",b:"#\\{",e:"}",l:a,k:g};var i=[e.BE,d];var b=[{cN:"string",b:"'",e:"'",c:i,r:0},{cN:"string",b:'"',e:'"',c:i,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:i},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:i},{cN:"string",b:"%[qw]?{",e:"}",c:i},{cN:"string",b:"%[qw]?<",e:">",c:i,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:i,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:i,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:i,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:i,r:10}];var h={cN:"function",bWK:true,e:" |$|;",k:"def",c:[{cN:"title",b:j,l:a,k:g},{cN:"params",b:"\\(",e:"\\)",l:a,k:g}].concat(k)};var f=k.concat(b.concat([{cN:"class",bWK:true,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(k)},h,{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:b.concat([{b:a}]),r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:k.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[e.BE]}]),r:0}]));d.c=f;h.c[1].c=f;return{dM:{l:a,k:g,c:f}}}(hljs);hljs.LANGUAGES.diff=function(a){return{cI:true,dM:{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}}(hljs);hljs.LANGUAGES.javascript=function(a){return{dM:{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield",literal:"true false null undefined NaN Infinity"},c:[a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",bWK:true,e:"{",k:"function",c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[a.CLCM,a.CBLCLM],i:"[\"'\\(]"}],i:"\\[|%"}]}}}(hljs);hljs.LANGUAGES.css=function(a){var b={cN:"function",b:a.IR+"\\(",e:"\\)",c:[a.NM,a.ASM,a.QSM]};return{cI:true,dM:{i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:"import page media charset",c:[b,a.ASM,a.QSM,a.NM]},{cN:"tag",b:a.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[b,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}(hljs);hljs.LANGUAGES.xml=function(a){var c="[A-Za-z0-9\\._:-]+";var b={eW:true,c:[{cN:"attribute",b:c,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}}(hljs);hljs.LANGUAGES.http=function(a){return{dM:{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}}}(hljs);hljs.LANGUAGES.java=function(a){return{dM:{k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},a.CLCM,a.CBLCLM,a.ASM,a.QSM,{cN:"class",bWK:true,e:"{",k:"class interface",i:":",c:[{bWK:true,k:"extends implements",r:10},{cN:"title",b:a.UIR}]},a.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}}}(hljs);hljs.LANGUAGES.php=function(a){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var b=[a.inherit(a.ASM,{i:null}),a.inherit(a.QSM,{i:null}),{cN:"string",b:'b"',e:'"',c:[a.BE]},{cN:"string",b:"b'",e:"'",c:[a.BE]}];var c=[a.CNM,a.BNM];var d={cN:"title",b:a.UIR};return{cI:true,dM:{k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",c:[a.CLCM,a.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"}]},{cN:"comment",eB:true,b:"__halt_compiler.+?;",eW:true},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[a.BE]},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"},e,{cN:"function",bWK:true,e:"{",k:"function",i:"\\$|\\[|%",c:[d,{cN:"params",b:"\\(",e:"\\)",c:["self",e,a.CBLCLM].concat(b).concat(c)}]},{cN:"class",bWK:true,e:"{",k:"class",i:"[:\\(\\$]",c:[{bWK:true,eW:true,k:"extends",c:[d]},d]},{b:"=>"}].concat(b).concat(c)}}}(hljs);hljs.LANGUAGES.python=function(a){var c=[{cN:"string",b:"(u|b)?r?'''",e:"'''",r:10},{cN:"string",b:'(u|b)?r?"""',e:'"""',r:10},{cN:"string",b:"(u|r|ur)'",e:"'",c:[a.BE],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:[a.BE],r:10},{cN:"string",b:"(b|br)'",e:"'",c:[a.BE]},{cN:"string",b:'(b|br)"',e:'"',c:[a.BE]}].concat([a.ASM,a.QSM]);var e={cN:"title",b:a.UIR};var d={cN:"params",b:"\\(",e:"\\)",c:["self",a.CNM].concat(c)};var b={bWK:true,e:":",i:"[${=;\\n]",c:[e,d],r:10};return{dM:{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},i:"(</|->|\\?)",c:c.concat([a.HCM,a.inherit(b,{cN:"function",k:"def"}),a.inherit(b,{cN:"class",k:"class"}),a.CNM,{cN:"decorator",b:"@",e:"$"},{b:"\\b(print|exec)\\("}])}}}(hljs);hljs.LANGUAGES.sql=function(a){return{cI:true,dM:{i:"[^\\s]",c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}}}(hljs);hljs.LANGUAGES.ini=function(a){return{cI:true,dM:{i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM]}]}]}}}(hljs);hljs.LANGUAGES.perl=function(e){var a="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0";var d={cN:"subst",b:"[$@]\\{",e:"\\}",k:a,r:10};var b={cN:"variable",b:"\\$\\d"};var i={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};var f=[e.BE,d,b,i];var h={b:"->",c:[{b:e.IR},{b:"{",e:"}"}]};var g={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var c=[b,i,e.HCM,g,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},h,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:f,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:f,r:5},{cN:"string",b:"'",e:"'",c:[e.BE],r:0},{cN:"string",b:'"',e:'"',c:f,r:0},{cN:"string",b:"`",e:"`",c:[e.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"("+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,g,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bWK:true,e:"(\\s*\\(.*?\\))?[;{]",k:"sub",r:5},{cN:"operator",b:"-\\w\\b",r:0}];d.c=c;h.c[1].c=c;return{dM:{k:a,c:c}}}(hljs);hljs.LANGUAGES.json=function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{dM:{c:d,k:e,i:"\\S"}}}(hljs);hljs.LANGUAGES.cpp=function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};return{dM:{k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}}}(hljs);