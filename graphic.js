

 w = window,
    dc = document,
    e = dc.documentElement,
    g = dc.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var width=x;
var height=200;
var margin=height-100;


var color = d3.scaleOrdinal()
    .domain([0,2])
    .range(['rgba(100,100,0,0.3)','rgba(255, 51, 0,0.3)','rgba(0,255,179,0.3)'])

//load data
var promises=[
  // d3.json("china_2000_cnty_gdp_bqa.json"),
  d3.csv("data/nearby_5000.csv"),
  d3.csv("data/selected_50.csv"),
]
// console.log(promises[0]);

// var button=d3.select(".div_for_button");
//
// Promise.all(promises).then(function(values){
//   button.selectAll("button")
//     .data(values[1])
//     .enter()
//     .append("button")
//     .attr("name", function(d){return d.village_name})
//     .attr("id", "villagebutton")
//     .text(function(d){
//       // console.log(d.Longitude)
//       return d.e_name+","
//       })
//     // .style("background-color",function(d){return color(d.village_type)})
//     .on('click',  function flymap(d) {
//           var lat=d.latitude;
//           var long=d.longitude;
//           // console.log(lat)
//           // console.log(long)
//           map.flyTo({
//           center: [+long,+lat],
//           zoom: [13],
//           essential: true // this animation is considered essential with respect to prefers-reduced-motion
//           });
//         });
//
// })

//add legend
var color_2=[["Hospital",'#FF3300'],["School",'#FF6699'],["Park","#ACE600"],["Retail",'#ffffbc']];

var svg=d3.select("div#graph")
          .append("svg")
          .attr("width", width)
          .attr("height", height);


// var legend=d3.select("svg").append("g").attr("transform","translate("+width*0.75+",0)");
//
// legend.selectAll("circle")
//     .data(color_2)
//     .enter()
//     .append("circle")
//     .attr("cx",function(d,i){
//       return i*50+120;
//     })
//     .attr("cy",margin)
//     .attr("r",10)
//     .attr("fill",function(d){return d[1];});
//
// legend.selectAll("text")
//     .data(color_2)
//     .enter()
//     .append("text")
//     .attr("x",function(d,i){
//       return i*50+120;
//     })
//     .attr("y",margin+28)
//     .text(function(d){return d[0];})
//     .attr("text-anchor","middle")
//     .style("font-size","0.7rem");

//fly back
document.getElementById('backbutton').addEventListener('click',function(){
    map.flyTo({
    center: [105, 37.9],
    zoom: [3.61],
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  })

  // document.getElementById('barbutton').addEventListener('click',function(){
  //   data=promises[0]
  //   UpdateBar(data);
  // })

//   var margin={top: 10, right: 30, bottom: 100, left: 100},
//       width = x - margin.left - margin.right,
//       height = 500 - margin.top - margin.bottom;
//
//   var svg=d3.select("div#graph")
//             .append("svg")
//             .attr("width", width + margin.left + margin.right)
//             .attr("height", height + margin.top + margin.bottom)
//             .append("g")
//             .attr("transform","translate("+ margin.left*2 + "," + margin.top + ")");
//
// Promise.all(promises).then(function([a]){
// //make barplot
//   data=a;
// // console.log(data);
//   var subgroups=data.columns.slice(1);
//   groups=d3.map(data,function(d){return (d.village_name)}).keys();
//
//     var ax=d3.scaleBand().domain(groups).range([0,width-margin.left-margin.right]).padding([0]);
//     svg.append("g")
//         .attr("transform", "translate(0,"+height+")")
//         .call(d3.axisBottom(ax).tickSize(0))
//         .selectAll("text")
//         .attr("id","labeltext")
//         .attr("transform", "translate(-3,0)rotate(-60)")
//         .style("text-anchor", "end");
//     var ay=d3.scaleLinear()
//             .domain([0,2000])
//             .range([height,0]);
//     svg.append("g").call(d3.axisLeft(ay));
//     var stackedData=d3.stack()
//         .keys(subgroups)(data);
//
//     color = d3.scaleOrdinal()
//         .domain(subgroups)
//         .range(['#FF3300','#FF6699',"#ACE600",'#ffffbc']);
//
//     var bar = svg.append("g").selectAll("g").data(stackedData)
//
//     bar.enter()
//         .append("g")
//         .attr("fill", function(d){return color(d.key);})
//         .selectAll("rect")
//         .data(function(d){return d;}).enter().append("rect")
//         .attr("x", function(d){return ax(d.data.village_name);})
//         .attr("y", function(d){return ay(d[1]);})
//         .attr("width",ax.bandwidth())
//         .attr("height", function(d) {return ay(d[0])-ay(d[1]);});
//   })
//
//
// // When the user clicks on the button, scroll to the top of the document
// function botFunction() {
//   var scrollingElement = (document.scrollingElement || document.body);
//   scrollingElement.scrollTop = scrollingElement.scrollHeight;
// }
