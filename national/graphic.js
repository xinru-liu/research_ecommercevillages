

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
  d3.csv("data/nearby_5000_2.csv"),
  d3.csv("data/selected_50.csv"),
  d3.csv("data/Shandong.csv"),
  d3.csv("data/Henan.csv"),
  d3.csv("data/Fujian.csv"),
  d3.csv("data/Zhejiang.csv"),
  d3.csv("data/Jiangsu.csv"),  
  d3.csv("data/Guangdong.csv"),
]
// console.log(promises[0]);
var button=d3.select(".div_for_button");

Promise.all(promises).then(function(values){
  button.selectAll("button")
    .data(values[1])
    .enter()
    .append("button")
    .attr("name", function(d){return d.village_name})
    .attr("id", "villagebutton")
    .text(function(d){
      // console.log(d.Longitude)
      return d.e_name+","
      })
    // .style("background-color",function(d){return color(d.village_type)})
    .on('click',  function flymap(d) {
          var lat=d.latitude;
          var long=d.longitude;
          // console.log(lat)
          // console.log(long)
          map.flyTo({
          center: [+long,+lat],
          zoom: [13],
          essential: true // this animation is considered essential with respect to prefers-reduced-motion
          });
        });

})

//add legend
var color_2=[["Hospital",'#FF3300'],["School",'#FF6699'],["Park","#ACE600"],["Retail",'#ffffbc']];

var svg=d3.select("div#graph")
          .append("svg")
          .attr("width", width)
          .attr("height", height);


var legend=d3.select("svg").append("g").attr("transform","translate("+width*0.75+",0)");

legend.selectAll("circle")
    .data(color_2)
    .enter()
    .append("circle")
    .attr("cx",function(d,i){
      return i*50+120;
    })
    .attr("cy",margin)
    .attr("r",10)
    .attr("fill",function(d){return d[1];});

legend.selectAll("text")
    .data(color_2)
    .enter()
    .append("text")
    .attr("x",function(d,i){
      return i*50+120;
    })
    .attr("y",margin+28)
    .text(function(d){return d[0];})
    .attr("text-anchor","middle")
    .style("font-size","0.7rem");

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

  var margin={top: 30, right: 30, bottom: 100, left: 100},
      width = x*0.7 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var svg1=d3.select(".popuptext")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform","translate("+margin.right*2+","+ margin.top + ")");

  var svg2=d3.select(".popuptext1")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform","translate("+margin.right*2+","+ margin.top + ")");

  var svg3=d3.select(".popuptext2")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform","translate("+margin.right*2+","+ margin.top + ")");
  var svg4=d3.select(".popuptext3")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform","translate("+margin.right*2+","+ margin.top + ")");
  var svg5=d3.select(".popuptext4")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform","translate("+margin.right*2+","+ margin.top + ")");
          
     

Promise.all(promises).then(function(a){
  //make barplot
  data=a[0];
  // console.log(data);
  var subgroups=data.columns.slice(1);
  groups=d3.map(data,function(d){return (d.village_name)}).keys();

    var ax=d3.scaleBand().domain(groups).range([0,width-margin.left-margin.right]).padding([0]);
    svg1.append("g")
        .attr("transform", "translate(0,"+height+")")
        .call(d3.axisBottom(ax).tickSize(0))
        .selectAll("text")
        .attr("id","labeltext")
        .attr("transform", "translate(-3,0)rotate(-60)")
        .style("text-anchor", "end");
    
    var ay=d3.scaleLinear()
            .domain([0,2000])
            .range([height,0]);
    svg1.append("g").call(d3.axisLeft(ay));
    var stackedData=d3.stack()
        .keys(subgroups)(data);

    color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#FF3300','#FF6699',"#ACE600",'#ffffbc']);


    // console.log(groups);

    // x.domain(data.map(function(d){console.log(d);return d.village_name;}))


    // var numberlist=d3.map(data,function(d,i){return i}).keys();
    // var namelist=d3.map(data,function(d){return d.village_name}).keys();

    // var x1=d3.scaleLinear()
    //     .domain([0,3056])
    //     .range([0,width]);

    // svg.append("g")
    //     .call(d3.axisLeft(y));


    //add a clippath
    // var clip = svg.append("defs").append("svg:clipPath")
    //       .attr("id", "clip")
    //       .append("svg:rect")
    //       .attr("width", width )
    //       .attr("height", height )
    //       .attr("x", 0)
    //       .attr("y", 0);



    //add brushing
    //
    // var brush = d3.brushX()                 // Add the brush feature using the d3.brush function
    //       .extent( [ [0,0], [width,height] ] ) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
    //       .on("end", updateChart); // Each time the brush selection changes, trigger the 'updateChart' function

    var bar = svg1.append("g").selectAll("g").data(stackedData)

    bar.enter()
        .append("g")
        .attr("fill", function(d){return color(d.key);})
        .selectAll("rect")
        .data(function(d){return d;}).enter().append("rect")
        .attr("x", function(d){return ax(d.data.village_name);})
        .attr("y", function(d){return ay(d[1]);})
        .attr("width",ax.bandwidth())
        .attr("height", function(d) {return ay(d[0])-ay(d[1]);});


    // bar.append("g")
    //     .selectAll("g")
    //     .data(stackedData)
    //     .enter()
    //     .append("g")
    //     .attr("fill", function(d){return color(d.key);})
    //     .selectAll("rect")
    //     .data(function(d){return d;}).enter().append("rect")
    //     .attr("x", function(d){console.log(d);return x(d.data.village_name);})
    //     .attr("y", function(d){return y(d[1]);})
    //     .attr("width",x.bandwidth())
    //     .attr("height", function(d) {return y(d[0])-y(d[1]);});

    // bar.append("g")
    //     .attr("class","brush")
    //     .call(brush);
    //
    //   // A function that set idleTimeOut to null
    //   var idleTimeout
    //   function idled() { idleTimeout = null; }
    //
    //   // A function that update the chart for given boundaries
    //   function updateChart() {
    //
    //     var extent = d3.event.selection
    //
    //     // If no selection, back to initial coordinate. Otherwise, update X axis domain
    //     if(!extent){
    //       if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
    //       x1.domain(numberlist)
    //     }else{
    //       x1.domain([ x1.invert(extent[0]), x1.invert(extent[1]) ])
    //       bar.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
    //     }
    //   // Update axis and circle position
    //     xAxis.transition().duration(1000).call(d3.axisBottom(x));
    //     bar.selectAll("g")
    //         .transition().duration(1000)
    //         .data(stackedData)
    //         .enter()
    //         .append("g")
    //         .attr("fill", function(d){return color(d.key);})
    //         .selectAll("rect")
    //         .data(function(d){return d;}).enter().append("rect")
    //         .attr("x", function (d,i) { return x1(i)})
    //         .attr("y", function (d) { return y(d[1]);})
    //         .attr("width",function(d,i){return x1(i);})
    //         .attr("height", function(d) {return y(d[0])-y(d[1]);});
    //
    //     }
  })

     

  Promise.all(promises).then(function(a){
    shandong=a[2]
    henan=a[3]
    fujian=a[4]
    jiangsu=a[5]
    guangdong=a[6]
    console.log(shandong);
    var subgroups=shandong.columns.slice(1);
    groups=d3.map(shandong,function(d){return (d.checkname)}).keys();
      var ax=d3.scaleBand().domain(groups).range([0,width-margin.left-margin.right]).padding([0]);
      svg2.append("g")
          .attr("transform", "translate(0,"+height+")")
          .call(d3.axisBottom(ax).tickSize(0))
          .selectAll("text")
          .attr("id","labeltext")
          .attr("transform", "translate(-3,0)rotate(-60)")
          .style("text-anchor", "end");   
      var ay=d3.scaleLinear()
              .domain([0,2000])
              .range([height,0]);
      svg2.append("g").call(d3.axisLeft(ay));
      var stackedData=d3.stack()
          .keys(subgroups)(shandong);
      color = d3.scaleOrdinal()
          .domain(subgroups)
          .range(['#FF3300','#FF6699',"#ACE600",'#ffffbc']);   
      var bar2 = svg2.append("g").selectAll("g").data(stackedData)

      bar2.enter()
          .append("g")
          .attr("fill", function(d){return color(d.key);})
          .selectAll("rect")
          .data(function(d){return d;}).enter().append("rect")
          .attr("x", function(d){return ax(d.data.checkname);})
          .attr("y", function(d){return ay(d[1]);})
          .attr("width",ax.bandwidth())
          .attr("height", function(d) {return ay(d[0])-ay(d[1]);});
  })
  Promise.all(promises).then(function(a){
    henan=a[3]
    fujian=a[4]
    jiangsu=a[5]
    guangdong=a[6]
    console.log(henan);
    var subgroups=henan.columns.slice(1);
    groups=d3.map(henan,function(d){return (d.checkname)}).keys();
      var ax=d3.scaleBand().domain(groups).range([0,width-margin.left-margin.right]).padding([0]);
      svg3.append("g")
          .attr("transform", "translate(0,"+height+")")
          .call(d3.axisBottom(ax).tickSize(0))
          .selectAll("text")
          .attr("id","labeltext")
          .attr("transform", "translate(-3,0)rotate(-60)")
          .style("text-anchor", "end");   
      var ay=d3.scaleLinear()
              .domain([0,2000])
              .range([height,0]);
      svg3.append("g").call(d3.axisLeft(ay));
      var stackedData=d3.stack()
          .keys(subgroups)(henan);
      color = d3.scaleOrdinal()
          .domain(subgroups)
          .range(['#FF3300','#FF6699',"#ACE600",'#ffffbc']);   
      var bar3 = svg3.append("g").selectAll("g").data(stackedData)

      bar3.enter()
          .append("g")
          .attr("fill", function(d){return color(d.key);})
          .selectAll("rect")
          .data(function(d){return d;}).enter().append("rect")
          .attr("x", function(d){return ax(d.data.checkname);})
          .attr("y", function(d){return ay(d[1]);})
          .attr("width",ax.bandwidth())
          .attr("height", function(d) {return ay(d[0])-ay(d[1]);});
  })
  Promise.all(promises).then(function(a){
    zhejiang=a[5]
    jiangsu=a[6]
    guangdong=a[7]
    console.log(zhejiang);
    var subgroups=zhejiang.columns.slice(1);
    groups=d3.map(zhejiang,function(d){return (d.checkname)}).keys();
      var ax=d3.scaleBand().domain(groups).range([0,width-margin.left-margin.right]).padding([0]);
      svg4.append("g")
          .attr("transform", "translate(0,"+height+")")
          .call(d3.axisBottom(ax).tickSize(0))
          .selectAll("text")
          .attr("id","labeltext")
          .attr("transform", "translate(-3,0)rotate(-60)")
          .style("text-anchor", "end");   
      var ay=d3.scaleLinear()
              .domain([0,2000])
              .range([height,0]);
      svg4.append("g").call(d3.axisLeft(ay));
      var stackedData=d3.stack()
          .keys(subgroups)(zhejiang);
      color = d3.scaleOrdinal()
          .domain(subgroups)
          .range(['#FF3300','#FF6699',"#ACE600",'#ffffbc']);   
      var bar4 = svg4.append("g").selectAll("g").data(stackedData)

      bar4.enter()
          .append("g")
          .attr("fill", function(d){return color(d.key);})
          .selectAll("rect")
          .data(function(d){return d;}).enter().append("rect")
          .attr("x", function(d){return ax(d.data.checkname);})
          .attr("y", function(d){return ay(d[1]);})
          .attr("width",ax.bandwidth())
          .attr("height", function(d) {return ay(d[0])-ay(d[1]);});
  })
  Promise.all(promises).then(function(a){
    jiangsu=a[6]
    guangdong=a[6]
    console.log(jiangsu);
    var subgroups=jiangsu.columns.slice(1);
    groups=d3.map(jiangsu,function(d){return (d.checkname)}).keys();
      var ax=d3.scaleBand().domain(groups).range([0,width-margin.left-margin.right]).padding([0]);
      svg5.append("g")
          .attr("transform", "translate(0,"+height+")")
          .call(d3.axisBottom(ax).tickSize(0))
          .selectAll("text")
          .attr("id","labeltext")
          .attr("transform", "translate(-3,0)rotate(-60)")
          .style("text-anchor", "end");   
      var ay=d3.scaleLinear()
              .domain([0,2000])
              .range([height,0]);
      svg5.append("g").call(d3.axisLeft(ay));
      var stackedData=d3.stack()
          .keys(subgroups)(jiangsu);
      color = d3.scaleOrdinal()
          .domain(subgroups)
          .range(['#FF3300','#FF6699',"#ACE600",'#ffffbc']);   
      var bar5 = svg5.append("g").selectAll("g").data(stackedData)

      bar5.enter()
          .append("g")
          .attr("fill", function(d){return color(d.key);})
          .selectAll("rect")
          .data(function(d){return d;}).enter().append("rect")
          .attr("x", function(d){return ax(d.data.checkname);})
          .attr("y", function(d){return ay(d[1]);})
          .attr("width",ax.bandwidth())
          .attr("height", function(d) {return ay(d[0])-ay(d[1]);});
  })

// When the user clicks on the button, scroll to the top of the document
function botFunction() {
  var scrollingElement = (document.scrollingElement || document.body);
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
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
// color = d3.scaleOrdinal()
//     .domain(subgroups)
//     .range(['#FF3300','#FF6699',"#ACE600",'#ffffbc']);



// var bar=svg.select("svg")
//           .append("g");

           // .attr("clip-path","url(#clip)");

// svg.append("g")
//     .selectAll("g")
//     .data(stackedData)
//     .enter()
//     .append("g")
//     .attr("fill", function(d){return color(d.key);})
//     .selectAll("rect")
//     .data(function(d){return d;}).enter().append("rect")
//     .attr("x", function(d){console.log(d);return x(d.data.village_name);})
//     .attr("y", function(d){return y(d[1]);})
//     .attr("width",x.bandwidth())
//     .attr("height", function(d) {return y(d[0])-y(d[1]);});

  // Create the scatter variable: where both the circles and the brush take place

