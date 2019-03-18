$(document).ready(function(){
	/*$('.horizon').horizon({
		threshold:0
		}
	);*/
	var panelServicios = $(".panelServicios").height();
	//$(".paneles").css("height",$(document).height()+"px");

//	$('#fechaCita').datetimepicker({minDate: new Date()});

	/*$('.bannerAcerca').parallax("100%", 0.10);
	$('.porqueAcerca').parallax("100%", 0.10);
	$('.finalPanelAcerca').parallax("100%", -0.30);*/

	/*$(window).scroll(function(event)
	{
		  var scrollLeft = $(window).scrollLeft();
		  var scrollTop = $(window).scrollTop();
		  if(scrollTop > 80)
		  {
		  	 $('#exTab1').addClass("menuFijo");
		  }
		  else
		  {
		  	 $('#exTab1').removeClass("menuFijo");
		  }
	});*/

	$(".btn-negro").click(function(){
	    landing.activaPest(this,'btn-negro');
	});

	$(".btn-pesta2").click(function(){
	    landing.activaPest2(this);
	});

	landing.grafico1();


});
var landing = {
	menu:function(opc)
	{
		if(opc == 1)
		{
			$("#menuMovil").slideDown();
			$(document).css("overflow","none");
		}
		else
		{
			$("#menuMovil").slideUp();
			$(document).css("overflow","auto");
		}
	},
	activaPest:function(e,clase)
    {
       $("."+clase).removeClass("active");
       $(e).addClass("active");
    },
    activaPest2:function(e)
    {
       $(".btn-pesta2").removeClass("active");
       $(e).addClass("active");
    },
    grafico1:function()
    {
        $("#grafica").html('<img src="https://distribuidor.kriptomercado.com/landingKripto/img/preview1.png" class="previewMap"/>');
        google.charts.load("current", {packages:['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ["Element", "Billones", { role: "style" } ],
            ["2014", 1.3, "color: #e5e4e2"],
            ["2015", 1.5, "color: #DBDAD7"],
            ["2016", 1.9, "color: #D3D2CF"],
            ["2017", 2.3, "color: #CCCBC8"],
            ["2018", 2.8, "color: #C1C0BD"],
            ["2019", 3.3, "color: #C0BFBC"],
            ["2020", 3.9, "color: #B7B6B3"],
            ["2021", 4.5, "color: #B3B1AE"]
          ]);
    
          var view = new google.visualization.DataView(data);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);
    
          var options = {
            title: "Ventas totales en el mundo del E-commerce en Billones de Dolares",
            width: '100%',
            height: 300,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
          };
          var chart = new google.visualization.ColumnChart(document.getElementById("grafica"));
          chart.draw(view, options);
      }
      $("#graficos .titulosGraficos").html("Aumento en las ventas online");
      $("#graficos .parrafoGraficos").html('Los datos acumulativos compilados en la Guía Empresarial para el Comercio Electrónico Mundial anticipan un aumento del 246.15% en las ventas mundiales de comercio electrónico, de $ 1.3 billones en 2014 a $ 4.5 billones en 2021. Eso es casi un aumento triple en los ingresos en línea.');
    },
    grafico2:function()
    {
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ["Element", "Ventas en trillones", { role: "style" } ],
            ["B2C Ecommerce Sales", 2.3, "#B3B1AE"],
            ["B2B Ecommerce Sales", 7.7, "#444444"]
          ]);
    
          var view = new google.visualization.DataView(data);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation" },
                           2]);
    
          var options = {
            title: "Ventas globales de comercio electrónico B2B dominan B2C",
            width: '100%',
            height: 300,
            bar: {groupWidth: "95%"},
            legend: { position: "left" },
          };
          var chart = new google.visualization.BarChart(document.getElementById("grafica"));
          chart.draw(view, options);
      }
      $("#graficos .titulosGraficos").html("Las ventas B2B dominan el B2C");
      $("#graficos .parrafoGraficos").html('El negocio B2B ahora está eclipsando el del negocio B2C". Ventas de comercio electrónico B2C: $ 2.3 billones. Ventas de comercio electrónico B2B: $ 7.7 billones. 234.78% de diferencia en el tamaño del mercado.');
    },
    grafico3:function()
    {
       google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Pais', 'Ventas'],
          ['Germany', 73000000000],
          ['United States', 340000000000],
          ['Brazil', 19000000000],
          ['Canada', 30000000000],
          ['France', 43000000000],
          ['RU', 20000000000],
          ['China', 672000000000],
          ['Japan', 79000000000],
          ['South Korea', 37000000000]
        ]);

        var options = {
          title: "Los 10 mercados más grandes del comercio electronico del mundo",
          colorAxis: {colors: ['#89877E','#716F66','#4F4E46','#3A3934']},
          backgroundColor: '#fff',
          //datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('grafica'));

        chart.draw(data, options);
      }
      $("#graficos .titulosGraficos").html("Los 10 mercados más grandes <br>del comercio electronico del mundo");
      $("#graficos .parrafoGraficos").html('China: $ 672 mil millones, Estados Unidos: $ 340 mil millones, Reino Unido: $ 99 mil millones, Japón: $ 79 mil millones, Alemania: $ 73 mil millones, Francia: $ 43 mil millones, Corea del Sur: $ 37 mil millones, Canadá: $ 30 mil millones, Rusia: $ 20 mil millones, Brasil: $ 19 mil millones');
     
    }
}