(this["webpackJsonpchart-demo"]=this["webpackJsonpchart-demo"]||[]).push([[0],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),l=a.n(o),i=(a(83),a(13)),c=a(14),s=a(17),u=a(15),d=a(18),h=(a(53),a(84),a(75)),m=a(26),b=a(27),p=a(21),f=a(19),g=a(9),v=a.n(g);a(86);var E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){fetch("https://cors-anywhere.herokuapp.com/https://noise-wearable.herokuapp.com/api/users").then((function(e){return e.json()})).then((function(e){return e})).then((function(e){var t=JSON.stringify(e);(t=JSON.parse(t)).map((function(e){(function(e){var t="https://cors-anywhere.herokuapp.com/https://noise-wearable.herokuapp.com/api/noise_observation/user/";return t+=e,fetch(t).then((function(e){return e.json()})).then((function(e){return e}))})(e.user_id).then((function(t){var a=JSON.stringify(t);a=JSON.parse(a);var n=Math.floor((new Date).getTime()/1e3),r=Math.round(n-7200),o=a.filter((function(e){if(e.time_obs>=r&&e.time_obs<n)return e.time_obs})),l=new Object;o.map((function(e){var t,a,n,r=function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(a=a<10?"0"+a:a)+" "+n}(new Date(1e3*e.time_obs));t=r,a=e.db_reading,t in(n=l)?n[t]<a&&(n[t]=a):n[t]=a}));var i=document.createElement("canvas"),c="chart"+e.user_id;i.id=c;document.createTextNode(e.user_id);document.querySelector("#chartContainer").appendChild(i);var s=document.getElementById(c).getContext("2d");window[c]=new v.a(s,{type:"line",data:{labels:Object.keys(l).reverse(),datasets:[{label:"DB Levels",padding:100,data:Object.values(l).reverse(),borderColor:"rgb(135, 188, 200)",backgroundColor:"rgba(147, 215, 245, 0.5)",lineTension:0},{label:"Peaceful",borderColor:"rgb(33, 150, 64)",borderWidth:2,backgroundColor:"rgba(33, 150, 64, 0.5)",borderDash:[10,5]},{label:"Disruptive",borderColor:"rgba(255, 146, 0, 0.8)",backgroundColor:"rgba(255, 146, 0, 0.5)",borderWidth:2,borderDash:[10,5]},{label:"Harmful",borderColor:"rgb(255, 25, 25)",backgroundColor:"rgba(255, 25, 25, 0.5)",borderWidth:2,borderDash:[10,5]}]},options:{title:{display:!0,text:e.user_id,position:"top",fontSize:30,fontColor:"#000000"},layout:{padding:{top:20,bottom:20}},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Time (hh:mm 12-Hour)"},ticks:{maxTicksLimit:20}}],yAxes:[{scaleLabel:{display:!0,labelString:"Recorded Decibels (dB)"},ticks:{beginAtZero:!0}}]},annotation:{drawTime:"afterDatasetsDraw",annotations:[{drawTime:"afterDraw",id:"good",type:"line",mode:"horizontal",scaleID:"y-axis-0",value:"35",borderColor:"rgba(33, 150, 64, 0.8)",borderWidth:2,borderDash:[10,5]},{drawTime:"afterDraw",id:"warning",type:"line",mode:"horizontal",scaleID:"y-axis-0",value:"48",borderColor:"rgba(255, 146, 0, 0.8)",borderWidth:2,borderDash:[10,5]},{drawTime:"afterDraw",id:"bad",type:"line",mode:"horizontal",scaleID:"y-axis-0",value:"70",borderColor:"rgba(255, 25, 25, 0.8)",borderWidth:2,borderDash:[10,5]}]}}})}))}))}))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component);function w(e){(console.log("making user api call"),fetch("https://cors-anywhere.herokuapp.com/https://noise-wearable.herokuapp.com/api/users").then((function(e){return e.json()})).then((function(e){return e}))).then((function(t){var a=JSON.stringify(t);(a=JSON.parse(a)).map((function(t){(function(e){var t="https://cors-anywhere.herokuapp.com/https://noise-wearable.herokuapp.com/api/noise_observation/user/";return t+=e,console.log("making api call (users)"),fetch(t).then((function(e){return e.json()})).then((function(e){return e}))})(t.user_id).then((function(a){var n=JSON.stringify(a);n=JSON.parse(n);var r=Math.floor((new Date).getTime()/1e3),o=Math.round(r-7200),l=n.filter((function(e){if(e.time_obs>=o&&e.time_obs<r)return e.time_obs})),i=new Object;l.map((function(e){var t,a,n,r=function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(a=a<10?"0"+a:a)+" "+n}(new Date(1e3*e.time_obs));t=r,a=e.db_reading,t in(n=i)?n[t]<a&&(n[t]=a):n[t]=a}));var c=Object.keys(i).reverse(),s=Object.values(i).reverse();!function(e,t,a){for(var n=0;n<t.length;n++)0==e.data.labels.includes(t[n])&&(e.data.datasets[0].data.push(a[n]),e.data.labels.push(t[n]));e.update()}(window["chart"+t.user_id],c,s),setTimeout((function(){w(e-1)}),6e4)}))}))}))}var y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Noise Manager WebApp"),r.a.createElement("p",null,"Real time data of each section/device"),r.a.createElement("div",{id:"chartContainer"},r.a.createElement(E,null)),r.a.createElement("script",null,"$(document).ready(function() ",setTimeout((function(){w(100)}),7e4),";"))};r.a.Component;var k=a(71),D=0;function O(e,t){var a=["rgb(25, 129, 102)","rgba(171,185,255)","rgb(19, 72, 250)","rgb(174, 255, 171)","rgb(255, 205, 139)","rgb(252, 58, 113)","rgb(232, 222, 46)","rgb(178, 62, 207)","rgb(158, 56, 5)"],n=function(e){for(var t=0,a={},n=0,r=0,o=[],l=0,i=0,c=0,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u=0,d=0,h=new Date,m=0;m<e.length;m++){var b=new Date(1e3*e[m].time_obs);b.getDate()>h.getDate()-1&&b.getHours()<h.getHours()&&(0==l?l=b.getHours():b.getHours()!=l&&b.getDate()==h.getDate()&&l<=h.getHours()&&(o.push([Math.round(i/c),l]),l=b.getHours(),i=0,c=0),0==l?(u+=e[m].db_reading,d++):(i+=e[m].db_reading,c++)),i+=e[m].db_reading,e[m].db_reading>=t&&(delete a[t],t=e[m].db_reading,a[e[m].db_reading]?a[e[m].db_reading].push(b.toLocaleString()):a[e[m].db_reading]=[b.toLocaleString()]),c++}o.push([Math.round(u/d),0]);for(var p=24-h.getHours(),f=0;f<o.length;f++)s[p]=o[o.length-1-f][0],p++;for(var g=0;g<o.length;g++)0!==o[g][0]&&(n+=o[g][0],r++);return[s,Math.round(n/r),t,a[t]]}(e),r={label:t,fill:!1,backgroundColor:a[D],borderColor:a[D],data:n[0],avg:n[1],peak:n[2],peaktimes:n[3]};return D++,r}var _={showScale:!0,pointDot:!0,title:{display:!0,text:"Average Noise Levels in the Past 24 Hours (Hourly)",fontSize:20},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Noise (dB) Levels"}}]}};function j(){for(var e=[],t=[[13,1],[14,2],[15,3],[16,4],[17,5],[18,6],[19,7],[20,8],[21,9],[22,10],[23,11],[24,12]],a=(new Date).getHours(),n=0;n<25;n++){var r=a-n;if(r>=12){12==r&&e.unshift(r+"PM");for(var o=0;o<t.length;o++)t[o][0]==r&&e.unshift(t[o][1]+"PM")}else 0==r?(e.unshift("12AM"),a=n+24):r<12&&e.unshift(r+"AM")}return e}var C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).chartReference=r.a.createRef(),a.label=j(),a.state={chartData:{labels:a.label,datasets:[]},json_files:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];fetch("https://cors-anywhere.herokuapp.com/https://noise-wearable.herokuapp.com/api/users").then((function(e){return e.json()})).then((function(e){return e})).then((function(a){var n=JSON.stringify(a);(n=JSON.parse(n)).forEach((function(a,r){var o;(o=a.user_id,fetch("https://cors-anywhere.herokuapp.com/https://noise-wearable.herokuapp.com/api/noise_observation/user/"+o).then((function(e){return e.json()})).then((function(e){return e}))).then((function(a){var r=JSON.stringify(a),o=O(r=JSON.parse(r),r[0].user_id);if(console.log(o),t.push(o),t.length==n.length)return j(),e.setState({chartData:{datasets:t}}),t}))}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"lineChart"},r.a.createElement(k.a,{ref:this.chartReference,data:this.state.chartData,options:_,height:250,width:600})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("h3",null,"Daily Summary Table"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{id:"table-header"},"Section Name"),r.a.createElement("th",{id:"table-header"},"Average dB"),r.a.createElement("th",{id:"table-header"},"Peak dB"),r.a.createElement("th",{id:"table-header"},"Peak dB Time")),this.state.chartData.datasets.map((function(e){return r.a.createElement("tr",{key:e.label},r.a.createElement("td",null,e.label),r.a.createElement("td",null,e.avg),r.a.createElement("td",null," ",e.peak),r.a.createElement("td",null,e.peaktimes))}))))))}}]),t}(r.a.Component),S=a(73),N=function(){var e=new Date;return r.a.createElement("div",null,r.a.createElement("div",{className:"no-print print-btn"},r.a.createElement(S.a,{variant:"info",size:"lg",onClick:function(e){e.preventDefault(),window.print()}},"Print report")),r.a.createElement("h1",null,"Your Noise Report Summary"),r.a.createElement("p",null,"Generated on ",r.a.createElement("b",null,e.toLocaleDateString())),r.a.createElement(C,null),r.a.createElement("br",null),r.a.createElement("br",null))},x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Help"),r.a.createElement("p",null,"Please contact UCI's team Chubby Cats."),r.a.createElement("p",null,"ziv@uci.edu"))},H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(p.a,{basename:"/"},r.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"sm"},r.a.createElement(m.a.Brand,{as:p.b,to:"/"},"Wall Mount Tracking"),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(b.a.Link,{as:p.c,to:"/host-website"},"Home"),r.a.createElement(b.a.Link,{as:p.c,to:"/report"},"Report"),r.a.createElement(b.a.Link,{as:p.c,to:"/help"},"Help")))),r.a.createElement("br",null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/host-website",component:y}),r.a.createElement(f.b,{exact:!0,path:"/report",component:N}),r.a.createElement(f.b,{exact:!0,path:"/help",component:x}),r.a.createElement(f.a,{from:"/",to:"/host-website"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){},78:function(e,t,a){e.exports=a(190)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.e1086401.chunk.js.map