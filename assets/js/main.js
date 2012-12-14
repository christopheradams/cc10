
	
$(document).ready(function() {
    var scrollorama = $.scrollorama({
        blocks:'.block',
		enablePin: false
    });
	
	scrollorama.animate('#four-hundred-million',{ 
		delay: -200, duration: 100, property:'zoom', start:0.1 
	});
	
	//scrollorama.animate('#halfBillionPlot',{
	//    duration:100, property:'opacity', start: .1
	//});
	
	//scrollorama.animate('#halfBillionTable',{
	//    duration:100, property:'opacity', start: .1
	//}); 
	
	scrollorama.animate('#open-utopia',{
	    delay:500, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#wikipedia',{
	    delay:500, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#saylor',{
	    delay:800, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#open-learning',{
	    delay:800, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#cnx',{
	    delay:650, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#plos',{ 
		delay: 450, duration: 200, property:'zoom', start:0.1 
	});
	
	scrollorama.animate('#khanacademy',{ 
		delay: 450, duration: 300, property:'zoom', start:0.1 
	});
	
	scrollorama.animate('#minecraft',{ 
		delay: 450, duration: 200, property:'zoom', start:0.1 
	});
	
	scrollorama.animate('#ccmixter',{ 
		delay: 600, duration: 300, property:'zoom', start:0.1 
	});
	
	scrollorama.animate('#textbooks',{
	    delay:500, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#cost-zero',{
	    delay:700, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#collaboration',{
	    delay:900, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#libre-bus',{
	    delay:1200, duration:800, property:'left', start: -900
	});
	
	/*scrollorama.animate('#licenses thead',{
	    delay:300, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#licenses .success',{
	    delay:300, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#licenses .info',{
	    delay:360, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#licenses .warning',{
	    delay:420, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#licenses .error',{
	    delay:480, duration:300, property:'opacity', start: .1
	});
	
	scrollorama.animate('#scatter',{
	    delay:300, duration:100, property:'opacity', start: .1
	});
	
	scrollorama.animate('#global',{
	    delay:300, duration:100, property:'opacity', start: .1
	});
	
	scrollorama.animate('#network',{
	    delay:300, duration:100, property:'opacity', start: .1
	});*/
	
	scrollorama.animate('#wordle',{ 
		delay: 400, duration: 300, property:'zoom', start:0.1 
	});
	
	scrollorama.animate('#steps-by',{
	    delay:300, duration:100, property:'opacity', start: .1
	});
	scrollorama.animate('#tweets',{
	    delay:400, duration:300, property:'opacity', start: .1
	});
	
	
});

/*$(function () {

	var data = [
		{ label: 'Articles',  data: 45472660}, { label: 'Audio',  data: 5324129}, { label: 'Books',  data: 641806}, { label: 'Code',  data: 195275283}, { label: 'Data',  data: 297437}, { label: 'Education',  data: 3106579}, { label: 'Images',  data: 262525847}, { label: 'Media',  data: 9043494}, { label: 'Videos',  data: 6647560} ];

	$.plot($("#halfBillionPlot"), data,
	{
		series: {
			pie: { 
                innerRadius: 0.5,
				show: true,
				label: {
					show: false
				}
			}
		},
		legend: {
			show: false
		},
		grid: {
			hoverable: true
		}
	});
	$("#halfBillionPlot").bind("plothover", pieHover);

});

	function pieHover(event, pos, obj) {
		$('#halfBillionTable tr').css('background-color', 'white');
		$('#halfBillionTable tr').css('color', '#5A5A5A');
		if(!obj) {
			return;
		}
		var label = obj.series.label;
		var color = obj.series.color;
		$('#halfBillionTable tr#' + label).css('background-color', color);
		$('#halfBillionTable tr#' + label).css('color', 'white');
	}*/