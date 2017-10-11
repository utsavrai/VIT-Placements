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
          ['Placement (Year)',  'Idea', 'Dell','Samsung','Siemens','Motorola'],
          ['2011', 45,    24,12,54,10],
          ['2012', 39,18,22,45,12],
          ['2013', 67,26,13,55,9],
          ['2014', 56,25,18,47,16],
          ['2015', 56,23,18,42,15]
        ]);

        var options = {
          title: 'Number of students placed',
          vAxis: {title: 'Year-wise Placement'},
          isStacked: true,
          'backgroundColor':'#FFE4B5',
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('avgBar'));

        chart.draw(data, options);
      }


      function drawChart2() {

        // Create the data table.
             var data = google.visualization.arrayToDataTable([
         ['Company', 'Number of students'],
         ['Idea',56],            // RGB value
         ['Dell', 23],            // English color name
         ['Samsung', 18],
         ['Siemens', 42],
         ['Motorola', 15], // CSS-style declaration
      ]);
        // Set chart options
        var options = {'title':'Number of students placed',
                       'width':400,
                       'height':350,
                       'backgroundColor':'#FFE4B5',
                       is3D: true,

                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('avgBarr'));
        chart.draw(data, options);
      }
