// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart1() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Year', 'Coagnizant', 'Amazon', 'Microsoft', 'TCS', 'Infosys', 'Flipkart'],
         ['2011',  165,      10,         12,             56,           66,      20],
         ['2012',  135,      8,        13,             78,          87,      21],
         ['2013',  157,      12,        15,             87,           98,      18],
         ['2014',  139,      6,        16,             76,           76,      17],
         ['2015',  136,      5,         8,             78,          81,      22]
      ]);

    var options = {
      title : 'Yearly Placements In CSE Dept.',
      vAxis: {title: 'Companies'},
      hAxis: {title: 'Year'},
      seriesType: 'bars',
      series: {5: {type: 'line'}},
      'backgroundColor':'#FFE4B5'
    };

    var chart = new google.visualization.ComboChart(document.getElementById('avgBar'));
    chart.draw(data, options);
  }


      function drawChart2() {

        // Create the data table.
             var data = google.visualization.arrayToDataTable([
         ['Company', 'Number of students'],
         ['Amazon',5],            // RGB value
         ['CTS', 80],            // English color name
         ['Microsoft',8],
         ['Google', 3],
         ['IBM', 12], // CSS-style declaration
      ]);
        // Set chart options
        var options = {'title':'Number of students placed',
                       'width':400,
                       'height':350,
                       'backgroundColor':'#FFE4B5',
                        pieSliceText: 'label',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
            }
        };
          // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('avgBarr'));
        chart.draw(data, options);
      }
