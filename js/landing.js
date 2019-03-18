$(document).ready(function(){
	/*$('.horizon').horizon({
		threshold:0
		}
	);*/
	var panelServicios = $(".panelServicios").height();
	$(".paneles").css("height",$(document).height()+"px");

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
    }
}