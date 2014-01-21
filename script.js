/*function init(){

      var soloTwitter = [
            ['Meses', 'Twitter'],
            ['Enero',  400],
            ['Febrero',  1170],
            ['Marzo',  660],
            ['Abril',  1030]
          ];
          var soloFacebook = [
            ['Meses','Facebook'],
            ['Enero',1000],
            ['Febrero',460],
            ['Marzo',1120],
            ['Abril',540]
          ];
          var soloMail = [
            ['Meses','Mail'],
            ['Enero',600],
            ['Febrero',354],
            ['Marzo',467],
            ['Abril',978]
          ];
          var twitterFacebook = [
            ['Meses', 'Twitter', 'Facebook'],
            ['Enero',  400,      1000],
            ['Febrero',  1170,      460],
            ['Marzo',  660,       1120],
            ['Abril',  1030,      540]
          ];
          var twitterFacebookMail = [
            ['Enero',  400,      1000, 600],
            ['Febrero',  1170,      460, 354],
            ['Marzo',  660,       1120, 467],
            ['Abril',  1030,      540, 978]
          ];

      google.load("visualization", "1", {packages:["corechart"]});

      var buttonTwitter = document.getElementById('twitter');

      google.setOnLoadCallback(drawChart);
      var chart = new google.visualization.LineChart(document.getElementById('mainChart'));

      function drawChart() {

        var options, data;
        chart = new google.visualization.LineChart(document.getElementById('mainChart'));
        data = new google.visualization.arrayToDataTable(twitterFacebookMail);
        data = new google.visualization.DataTable();
        data.addColumn('string','Meses');
        data.addColumn('number','Twitter');
        data.addColumn('number','Facebook');
        data.addColumn('number','Mail');
        data.addRows(twitterFacebookMail);
        options = { title: 'Estadisticas Urbania' };

        chart.draw(data, options);

      }

      buttonTwitter.onclick = function(){
          data.addColumn('number','Other');
          data.addRows([['werik',500,800,978]]);
          drawChart();
      }
      drawChart();

}

init();*/

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

var options = {
      width: 400,
      height: 240,
      vAxis: {minValue:0, maxValue:100},
      animation: {
        duration: 1000,
        easing: 'in'
      }
    };
    
    var button;
    function drawChart() {
      var chart = new google.visualization.LineChart(document.getElementById('visualization'));
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'x');
      data.addColumn('number', 'y');
      data.addRow(['100', 123]);
      data.addRow(['700', 17]);
      button = document.getElementById('twitter');
      // Disabling the button while the chart is drawing.
      button.disabled = true;
      google.visualization.events.addListener(chart, 'ready',
          function() {
            button.disabled = false;
          });
      chart.draw(data, options);
    }

    button.onclick = function() {
      if (data.getNumberOfRows() > 5) {
        data.removeRow(Math.floor(Math.random() * data.getNumberOfRows()));
      }
      // Generating a random x, y pair and inserting it so rows are sorted.
      var x = Math.floor(Math.random() * 1000);
      var y = Math.floor(Math.random() * 100);
      var where = 0;
      while (where < data.getNumberOfRows() && parseInt(data.getValue(where, 0)) < x) {
        where++;
      }
      data.insertRows(where, [[x.toString(), y]]);
      drawChart();
    }

    drawChart();
