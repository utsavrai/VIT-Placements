// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart','bar']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart1() {

        // Create the data table.
             var data = google.visualization.arrayToDataTable([
         ['Year', 'Highest', 'Lowest','Average Package'],
         ['2010', 640000,320000 ,430000],            // RGB value
         ['2011', 570000,300000, 340000],            // English color name
         ['2012', 650000,350000, 400000],
         ['2013', 590000,330000, 450000],
         ['2014', 540000,305000, 380000],
         ['2015', 740000,380000, 500000],
         ['2016', 740000,390000, 550000],
          // CSS-style declaration
      ]);
        // Set chart options
        var options = {'backgroundColor':'#FFE4B5',
                       chart: {
                          title: 'Company Performance',
                          subtitle: 'Highest,lowest and Average: 2010-2016',

                        },
                        bars: 'horizontal',
                         // Required for Material Bar Charts.
                     };

       var chart = new google.charts.Bar(document.getElementById('avgBar'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart2() {

        // Create the data table.
             var data = google.visualization.arrayToDataTable([
         ['Company', 'Number of students'],
         ['L&T',35],            // RGB value
         ['HCC', 24],            // English color name
         ['GMR', 56],
         ['Punj Lloyd', 44],
         ['Tata', 67], // CSS-style declaration
      ]);
        // Set chart options
        var options = {'title':'Number of students placed',
                       'width':400,
                       'height':350,
                       'backgroundColor':'#FFE4B5',
                        legend: 'none',
                        pieSliceText: 'label',
                        slices: {  4: {offset: 0.2},
                        12: {offset: 0.3},
                        14: {offset: 0.4},
                        15: {offset: 0.5}
                     }
                   };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('avgBarr'));
        chart.draw(data, options);
      }