<!DOCTYPE html>
<html>
<head>
	<title>Kriptomercado</title>
	<meta content="#FFB000" name="theme-color">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
	<link rel="stylesheet" type="text/css" href="css/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="css/font-awesome/css/font-awesome.min.css" />
	<link rel="stylesheet" type="text/css" href="css/fonts/stylesheet.css" />
	<link rel="stylesheet" type="text/css" href="css/css_bootstrap-datetimepicker.css" />
	<link rel="stylesheet" type="text/css" href="css/landing.min.css" />
</head>
<body>
	<div class="container-fluid noPadding cabezaPrincipal paneles">
		<div class="container">
			<div class="row">
				<div class="col col-lg-4 col-md-4">
					<img src="img/logo.png" class="logo">
					<div class="contBotonesCabeza">
						<a href="#1a" data-toggle="tab" class="btn btn-negro anchoCompleto active">¿QUÉ ES KRIPTOMERCADO?</a>
						<a href="#2a" data-toggle="tab" class="btn btn-negro anchoCompleto">LA OPORTUNIDAD</a>
						<a href="#3a" data-toggle="tab" class="btn btn-negro anchoCompleto">EL MERCADO</a>
						<a href="#4a" data-toggle="tab" class="btn btn-negro anchoCompleto">LA INDUSTRIA</a>
					</div>
				</div>
				<div class="col col-lg-8 col-md-8 ">
					<div class="tab-content clearfix">
					  	<div class="tab-pane active tituloQueEs" id="1a">
							<h4>¿QUÉ</h4>
							<h2>KRIPTOMERCADO?</h2>
							<p>
								Es un portal comercial en Internet, un Marketplace, que recibe múltiples proveedores de productos y servicios en su plataforma para ser comercializados.
							</p>
						</div>
						<div class="tab-pane tituloQueEs" id="2a">
							<h2>LA OPORTUNIDAD</h2><br>
							<p>
								<ul>
									<li><i class="fa fa-circle"></i> Tener un negocio propio</li>
									<li><i class="fa fa-circle"></i> Un Producto de alta demanda</li>
									<li><i class="fa fa-circle"></i> Plataforma tecnológica</li>
									<li><i class="fa fa-circle"></i> Mercado ilimitado </li>
									<li><i class="fa fa-circle"></i> Ganancias increíbles</li>
									<li><i class="fa fa-circle"></i> Herramientas de comercialización</li>
								</ul>
							</p>
						</div>
						<div class="tab-pane tituloQueEs" id="3a">
							<h2>EL MERCADO</h2>
							<p>Un mercado de demanda, los comerciantes y empresarios ya están en buscando nuevos canales de venta que hagan sus actividades comerciales más rentables.</p>
						</div>
						<div class="tab-pane tituloQueEs" id="4a">
							<h2>LA INDUSTRIA</h2>
							<p>
								<strong>"Estamos en la Industria del Comercio Electrónico"</strong><br>

								Es la de mayor crecimiento en la última década, de tal contundencia que todo el comercio está migrando sus actividades al mundo virtual.

							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container text-center">
			<a><i class="fa fa-chevron-down felchaAbajo"></i></a>
		</div>
	</div>
	<!-- Panel 2 -->
	<div class="container-fluid panelVentajas paneles" id="porquekriptomercado">
		<div class="container contTenedor">
			<div class="row">
				<div class="col col-lg-12 col-md-12 contPestanas">
					<h2 class="tituloQueesKripto horizon" data-animate-in="preset:slideInDownShort;duration:1000ms;">Conóce las <span>tres razones</span>?</h2>
					<p class="horizon textoTresRazones" data-animate-in="preset:slideInDownShort;duration:1500ms;">Para participar en la industria del comercio</p>
					<div class="contPest text-center">
						<a  data-toggle="tab"  class="btn btn-pest2 horizon active" data-animate-in="preset:slideInDownShort;duration:1000ms;" onclick="landing.grafico1()">CRECIMIENTO</a>
						<a  data-toggle="tab"  onclick="landing.grafico2()"  class="btn btn-pest2 horizon" data-animate-in="preset:slideInDownShort;duration:1000ms;">VENTAS GLOBALES</a>
						<a  data-toggle="tab"  onclick="landing.grafico3()" class="btn btn-pest2 horizon" data-animate-in="preset:slideInDownShort;duration:1000ms;">GRANDES MERCADOS</a>
					</div>
					<div class="row" id="graficos" >
						<div class="col col-lg-6 col-md-6">
							<div class="grafico" id="grafica"></div>	
						</div>
						<div class="col col-lg-6 col-md-6">
							<p class="parrafoGraficos"></p>	
						</div>
					</div><!-- 
					<div class="col col-lg-8 col-lg-8 horizon" id="graficos" data-animate-in="preset:slideInRightShort;duration:1000ms;">
						<h2 class="titulosGraficos"></h2>
						<div class="grafico" id="grafica"></div>
						<p class="parrafoGraficos">
							
						</p>
					</div> -->

				</div>
			</div>
		</div>
	</div>
	<!-- Panel 3 -->
	<div class="container-fluid noPadding bgPadding3">
		<div class="container contTenedor">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
			  <!-- Indicators -->
			  <!-- <ol class="carousel-indicators">
			    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			    <li data-target="#myCarousel" data-slide-to="1"></li>
			    <li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol> -->

			  <!-- Wrapper for slides -->
			  <div class="carousel-inner">
			    <div class="item active">
			      <?php include("plantillas/panel3/1.php"); ?>
			    </div> 
			    <div class="item">
			      <!-- <?php include("plantillas/panel3/1.php"); ?> -->
			      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			    </div>
			    <!--
			    <div class="item">
			      <?php //include("plantillas/panel3/1.php"); ?>
			    </div> -->

			  </div>

			  <!-- Left and right controls -->
			  <a class="left carousel-control controlLeft1" href="#myCarousel" data-slide="prev">
			    <span class="glyphicon glyphicon-chevron-left"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="right carousel-control controlRight1" href="#myCarousel" data-slide="next">
			    <span class="glyphicon glyphicon-chevron-right"></span>
			    <span class="sr-only">Next</span>
			  </a>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/landing.min.js"></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
</body>
</html>