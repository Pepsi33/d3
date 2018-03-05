;(function() {

    var __DATA__ = {
        "安徽": {
            "F": 4,
            "M": 7,
            "AVG": 40.8181818181818,
            "TOTAL": 11,
            "RATIO": 0.0120746432491767
        },
        "北京": {
            "F": 45,
            "M": 58,
            "AVG": 41.7572815533981,
            "TOTAL": 103,
            "RATIO": 0.113062568605928
        },
        "福建": {
            "F": 8,
            "M": 6,
            "AVG": 43.1428571428571,
            "TOTAL": 14,
            "RATIO": 0.0153677277716795
        },
        "甘肃": {
            "F": 2,
            "M": 1,
            "AVG": 53,
            "TOTAL": 3,
            "RATIO": 0.00329308452250274
        },
        "广东": {
            "F": 212,
            "M": 225,
            "AVG": 39.6132723112128,
            "TOTAL": 437,
            "RATIO": 0.479692645444566
        },
        "广西": {
            "F": 1,
            "M": 7,
            "AVG": 42.875,
            "TOTAL": 8,
            "RATIO": 0.00878155872667398
        },
        "贵州": {
            "F": 1,
            "M": 2,
            "AVG": 32.6666666666667,
            "TOTAL": 3,
            "RATIO": 0.00329308452250274
        },
        "海南": {
            "F": 0,
            "M": 3,
            "AVG": 30,
            "TOTAL": 3,
            "RATIO": 0.00329308452250274
        },
        "河北": {
            "F": 3,
            "M": 13,
            "AVG": 39.125,
            "TOTAL": 16,
            "RATIO": 0.017563117453348
        },
        "河南": {
            "F": 4,
            "M": 13,
            "AVG": 36.5294117647059,
            "TOTAL": 17,
            "RATIO": 0.0186608122941822
        },
        "黑龙江": {
            "F": 6,
            "M": 3,
            "AVG": 43.1111111111111,
            "TOTAL": 9,
            "RATIO": 0.00987925356750823
        },
        "湖北": {
            "F": 14,
            "M": 16,
            "AVG": 35.4,
            "TOTAL": 30,
            "RATIO": 0.0329308452250274
        },
        "湖南": {
            "F": 5,
            "M": 9,
            "AVG": 37.0714285714286,
            "TOTAL": 14,
            "RATIO": 0.0153677277716795
        },
        "吉林": {
            "F": 2,
            "M": 0,
            "AVG": 38,
            "TOTAL": 2,
            "RATIO": 0.0021953896816685
        },
        "江苏": {
            "F": 8,
            "M": 23,
            "AVG": 39.1935483870968,
            "TOTAL": 31,
            "RATIO": 0.0340285400658617
        },
        "江西": {
            "F": 4,
            "M": 10,
            "AVG": 40,
            "TOTAL": 14,
            "RATIO": 0.0153677277716795
        },
        "辽宁": {
            "F": 6,
            "M": 9,
            "AVG": 42.1333333333333,
            "TOTAL": 15,
            "RATIO": 0.0164654226125137
        },
        "内蒙古": {
            "F": 1,
            "M": 1,
            "AVG": 41,
            "TOTAL": 2,
            "RATIO": 0.0021953896816685
        },
        "青海": {
            "F": 1,
            "M": 0,
            "AVG": 42,
            "TOTAL": 1,
            "RATIO": 0.00109769484083425
        },
        "山东": {
            "F": 6,
            "M": 24,
            "AVG": 42.1,
            "TOTAL": 30,
            "RATIO": 0.0329308452250274
        },
        "山西": {
            "F": 0,
            "M": 4,
            "AVG": 38.75,
            "TOTAL": 4,
            "RATIO": 0.00439077936333699
        },
        "陕西": {
            "F": 6,
            "M": 11,
            "AVG": 39.7058823529412,
            "TOTAL": 17,
            "RATIO": 0.0186608122941822
        },
        "上海": {
            "F": 26,
            "M": 26,
            "AVG": 40.7115384615385,
            "TOTAL": 52,
            "RATIO": 0.0570801317233809
        },
        "四川": {
            "F": 8,
            "M": 14,
            "AVG": 36.3181818181818,
            "TOTAL": 22,
            "RATIO": 0.0241492864983535
        },
        "天津": {
            "F": 6,
            "M": 6,
            "AVG": 47.75,
            "TOTAL": 12,
            "RATIO": 0.013172338090011
        },
        "新疆": {
            "F": 1,
            "M": 2,
            "AVG": 40.6666666666667,
            "TOTAL": 3,
            "RATIO": 0.00329308452250274
        },
        "云南": {
            "F": 0,
            "M": 4,
            "AVG": 35.75,
            "TOTAL": 4,
            "RATIO": 0.00439077936333699
        },
        "浙江": {
            "F": 13,
            "M": 15,
            "AVG": 41.1785714285714,
            "TOTAL": 28,
            "RATIO": 0.0307354555433589
        },
        "重庆": {
            "F": 3,
            "M": 3,
            "AVG": 38.3333333333333,
            "TOTAL": 6,
            "RATIO": 0.00658616904500549
        }
    };

    var overColor = "#F08080";
    //定义颜色  
    //var b = d3.rgb(130, 140, 20);  
    var b = d3.rgb(245, 8, 26);
    var a = d3.rgb(255, 255, 180);

    //设置颜色插值  
    var color = d3.interpolate(a, b);

    var width = 1000;
    var height = 1000;
    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    //投影  
    var projection = d3.geo.mercator()
        .center([107, 30]) //中心点  
        .scale(800) //地图大小  
        .translate([width / 2, height / 2 - 50]); //地图宽度和高度  
    //投影后获得的路径  
    var path = d3.geo.path()
        .projection(projection);



    //topojson文件读取比geojson文件更快  
    d3.json("china.geojson", function(error, root) {

        //提示框 （注意设置提示框的绝对路径）  
        var tooltip = d3.select("body")
            .append("div")
            .attr("opacity", 0.0)
            .attr("class", "tooltip");


        //添加一个g标签  
        var china = svg.append("g");

        //绘制个省份的path路径  
        var provinces = china.selectAll("path")
            .data(root.features)
            .enter()
            .append("path")
            .style("fill", "#ccc")
            .attr("stroke", "black")
            .attr("stroke-width", "1px")
            .attr("d", path);

        //在地图上显示各个身份的名称  
        svg.selectAll("text")
            .data(root.features)
            .enter()
            .append("text")
            //设置各个文本（省份名称）显示的文字  
            .attr("transform", function(d, i) {
                if (d.properties.id == "20") //河北  
                {
                    return "translate(" + (path.centroid(d)[0] - 20) + "," + (path.centroid(d)[1] + 20) + ")";
                }
                return "translate(" + (path.centroid(d)[0] - 10) + "," + path.centroid(d)[1] + ")";
            })
            //显示省名  
            .text(function(d) {
                return d.properties.name;
            })
            .attr("font-size", 12);

        //读取数据文件  
        d3.json("data.json", function(error, dataset) {
            //将数据保存在数组中,(数组索引号为各省的名称)  
            var datas = [];
            var datam = [];
            for (key in dataset) {
                var name = key
                var value = dataset[key]["F"] + dataset[key]["M"];
                datas[name] = value;
                datam.push(value); //datam 数组用于求中间值 
            }

            //取出数据中的最大值和最小值  
            var maxdata = d3.max(datam, function(d) {
                return d;
            });

            var mindata = 0;

            //定义一个线性比例尺  
            var linear = d3.scale.linear()
                .domain([mindata, maxdata])
                .range([0, 1]);



            //给个省份填充颜色  
            provinces.style("fill", function(d, i) {
                    var t = linear(datas[d.properties.name]);
                    var col = color(t);
                    return col.toString();
                })
                //提示框  
                .on("mouseover", function(d, i) {
                    d3.select(this).attr("fill", overColor);

                    var $data = __DATA__[d.properties.name];
                    if (!$data) return;

                    var ratio = ($data["RATIO"] * 100).toFixed(2) + "%";
                    var arr = [];
                    arr.push('<p>省份:' + d.properties.name + '</p>');
                    arr.push('<p>年份:2017</p>');
                    arr.push('<p>占比人数:' + ratio + '</p>');
                    arr.push('<p>男:' + $data["M"] + '</p>');
                    arr.push('<p>女:' + $data["F"] + '</p>');
                    arr.push('<p>总人数:' + $data["TOTAL"] + '</p>');
                    arr.push('<p>平均年龄:' + parseInt($data["AVG"]) + '</p>');

                    tooltip.html(arr.join(""))
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY + 20) + "px")
                        .style("opacity", 1.0);
                })
                .on("mouseout", function(d, i) {
                    d3.select(this).attr("fill", color(i));

                    tooltip.style("opacity", 0.0);
                });

            //显示渐变矩形条  
            var defs = svg.append("defs");

            var linearGradient = defs.append("linearGradient")
                .attr("id", "linearColor")
                //颜色渐变方向  
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "0%");
            //设置矩形条开始颜色  
            var stop1 = linearGradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", a.toString());
            //设置结束颜色  
            var stop2 = linearGradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", b.toString());

            var colorRect = svg.append("rect")
                //x,y 矩形的左上角坐标  
                .attr("x", 50)
                .attr("y", 50)
                //矩形的宽高  
                .attr("width", 200)
                .attr("height", 20)
                //引用上面的id 设置颜色  
                .style("fill", "url(#" + linearGradient.attr("id") + ")");
            //设置文字  

            //数据初值  
            var startText = svg.append("text")
                .attr("x", 50)
                .attr("y", 45)
                .text(mindata);
            //数据中间值  
            var middleText = svg.append("text")
                .attr("x", 125)
                .attr("y", 45)
                .text(
                    //d3.mean(datam)//平均值  
                    d3.median(datam) //中间值  
                );
            //数据末值  
            var endText = svg.append("text")
                .attr("x", 250)
                .attr("y", 45)
                .text(maxdata);
        });

    });
}())