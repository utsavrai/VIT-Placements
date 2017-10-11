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
         ['Average Package', 'Salary'],
         ['CSE', 740000],            // RGB value
         ['EEE', 570000],            // English color name
         ['ECE', 650000],
         ['Mech', 540000],
         ['Civil', 540000], // CSS-style declaration
      ]);
        // Set chart options
        var options = {title:'Average package of Branches',
                       width:550,
                       height:350,
                       backgroundColor:'#FFE4B5',
                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('avgBar'));
        chart.draw(data, options);
      }

      function drawChart2() {

        // Create the data table.
             var data = google.visualization.arrayToDataTable([
         ['Number of students placed', 'Number of students', { role: 'style' }],
         ['CSE', 4500, 'orange'],            // RGB value
         ['EEE', 3500, 'orange'],            // English color name
         ['ECE', 3000, 'orange'],
         ['Mech', 4000, 'orange'],
         ['Civil', 3400, 'orange'], // CSS-style declaration
      ]);
        // Set chart options
        var options = {'title':'Number of students placed',
                       'width':400,
                       'height':350,
                       'backgroundColor':'#FFE4B5',
                     };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('avgBarr'));
        chart.draw(data, options);
      }
