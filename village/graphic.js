//setting dimension
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var width=x;
var height=y;

//load data
nearby_lat=d3.map()
nearby_long=d3.map()
bbox_x1=d3.map()
bbox_x2=d3.map()
bbox_y1=d3.map()
bbox_y2=d3.map()
villagetype=d3.map()
var promises=[
  // d3.json("china_2000_cnty_gdp_bqa.json"),
  d3.csv("data/nearby_50.csv"),
  d3.csv("data/selected_50.csv",function(d){
    nearby_lat.set(d.village_name,d.latitude);
    nearby_long.set(d.village_name,d.longitude);
    villagetype.set(d.village_name,d.village_type);
    bbox_x1.set(d.village_name,d.x1);
    bbox_y1.set(d.village_name,d.y1);
    bbox_x2.set(d.village_name,d.x2);
    bbox_y2.set(d.village_name,d.y2);
  })
]

var button=d3.select(".div_for_button");

//add barplot
// Add an SVG element
var svg=d3.select("div#graph")
          .append("svg");


var legend = d3.select("svg")
      .append("g")
      .attr("width", width)
      .attr("height", height/3);

var bar=d3.select("svg")
          .append("g")
          .attr("width", width)
          .attr("height", height*2/3);
var bar_x=d3.scaleLinear().range([0,400]);
//line
var bar_xAxis=svg.append("g")
          .attr("transform","translate(120,500)")
          .attr("stroke","blue");

var intro=d3.select("svg")
          .append("g")
          .attr("width", width)
          .attr("height", height/3)
          .append("text")
          .attr("x", 5)
          .attr("y", height/5.5)
          .style("font-family","Ogg")
          .style("font-size","0.8rem");

let graphheight=height*4.4/60;
var color=[["Hospital",'#FF3300'],["School",'#FF6699'],["Clinic",'#FBA231'],["Retail",'#ffffbc'],["Plaza",'#FFFF33'],["Park","#ACE600"],["Mobile","#00ffb3"]];
var color_t=["black","yellow","blue"]
// var colorscale = d3.scaleOrdinal()
//     .domain([1,7])
//     .range(['#FF3300','#FF6699','#FBA231','#FF3300','#FFFF33',"#ACE600","#00ffb3"]);

//add legend
legend.selectAll("circle")
    .data(color)
    .enter()
    .append("circle")
    .attr("cx",function(d,i){
      return i*50+width/15;
    })
    .attr("cy",550)
    .attr("r",10)
    .attr("fill",function(d){return d[1];});

legend.selectAll("text")
    .data(color)
    .enter()
    .append("text")
    .attr("x",function(d,i){
      return i*50+width/15;
    })
    .attr("y",580)
    .text(function(d){return d[0];})
    .attr("text-anchor","middle")
    .style("font-size","0.6rem");



Promise.all(promises).then(function(values){
  // console.log(values[0])
  button.selectAll("button")
    .data(values[0])
    .enter()
    .append("button")
    .attr("name", function(d){return d.village_name})
    .attr("id", "villagebutton")
    .text(function(d){
      // console.log(d.Longitude)
      return d.e_name;
      })
    .on('click', function ChangeData(d){
        // console.log(d.village_name);
        var mobile=(+d.mobile)+(+d.unicom);

        // making barplot
        var list=[["hospital",d.hospital],["school",d.school],["clinic",d.clinic],["retail",d.retail],["plaza",d.plaza],["park",d.park],["mobile",mobile]];
        var list_b=[d.hospital,d.school,d.clinic,d.retail,d.plaza,d.park,mobile];
        var type_key=["Heritage Product Villages","the Most Beautiful Taobao Villages","Lifted Out of Poverty Villages"]
        x_max=d3.max(list_b,function(d){return +d});
        console.log(x_max);
        // x_min=d3.min(list_b,function(d){return d});
        // unit=x_max/7;
        // unit_w=bar_x(unit);


        bar_xAxis.transition().duration(1000).call(d3.axisBottom(bar_x));

        //add label
        var name=d.village_name;
        var index=villagetype.get(d.village_name);
        var a=+index;
        var v_type=type_key[a-1];
        // console.log(a);
        var description=name+"\nis one of a\n"+v_type;

        intro
            .text(description)
            .attr("stroke","blue");

        var u = bar.selectAll("rect")
              .data(list);

        u
          .enter()
          .append("rect")
          .merge(u)
          .transition()
          .duration(1000)
          .attr("x", 120)
          .attr("y", function(d, i) {
            // console.log(d)
              return i*graphheight/1.5+200;
            })
          .attr("height",30)
          .attr("width", function(d) {
              bar_x.domain([0,d3.max(list_b,function(d){return +d})]);
              var result=bar_x(+d[1]);
              return  result;
            })
          .attr("fill", function(d,i){

             return color[i][1];
          });
        //add tag
        bar.selectAll("text")
            .data(list)
            .enter()
            .append("text")
            .attr("x", 110)
            .attr("y", function(d, i) {
              // console.log(d)
                return i*graphheight/1.5+220;
              })
						.attr("text-anchor", "end")
            .text(function(d){return d[0]})
            .style("font-size","0.8rem");
        u
         .exit()
         .remove()

    })
    .on('dblclick',  function flymap(d) {
          var lat1=bbox_y1.get(d.village_name);
          var long1=bbox_x1.get(d.village_name);
          var lat2=bbox_y2.get(d.village_name);
          var long2=bbox_x2.get(d.village_name);
          // map.flyTo({
          // center: [+long,+lat],
          // zoom: [12],
          // essential: true // this animation is considered essential with respect to prefers-reduced-motion
          // });
          map.fitBounds([[+lat1, +long1],[+lat2, +long2]]);

        });
})

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}
function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}
function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}
function myFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}
function myFunction6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
}
function myFunction7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.toggle("show");
}