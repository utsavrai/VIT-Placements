// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart1() {

        // Create the data table.
             var data = google.visualization.arrayToDataTable([
         ['Year', 'Highest Package', 'Average Package'],
         ['2010', 740000, 430000],            // RGB value
         ['2011', 570000, 340000],            // English color name
         ['2012', 650000, 400000],
         ['2013', 740000, 450000],
         ['2014', 640000, 380000],
         ['2015', 840000, 500000],
         ['2016', 840000, 550000],
          // CSS-style declaration
      ]);
        // Set chart options
        var options = {title:'Highest & Average package of Branches',
                       width:550,
                       height:350,
                       backgroundColor:'#FFE4B5',
                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.AreaChart(document.getElementById('avgBar'));
        chart.draw(data, options);
      }

      function drawChart2() {

        var oldData = google.visualization.arrayToDataTable([
      ['Company', 'Number of students'],
         ['Ford',45],            // RGB value
         ['BMW', 7],            // English color name
         ['Maruti', 56],
         ['Hyundai', 34],
         ['TVS', 89], // CSS-style declaration
         ]);

    var newData = google.visualization.arrayToDataTable([
      ['Company', 'Number of students'],
         ['Ford',56],            // RGB value
         ['BMW', 8],            // English color name
         ['Maruti', 49],
         ['Hyundai', 43],
         ['TVS', 78], // CSS-style declaration
         ]);

    var options = {'title':'Number of students placed',
                       'width':400,
                       'height':350,
                       'backgroundColor':'#FFE4B5',
                    pieSliceText: 'none'};
var chartDiff = new google.visualization.PieChart(document.getElementById('avgBarr'));
    var diffData = chartDiff.computeDiff(oldData, newData);
    chartDiff.draw(diffData, options);
  }