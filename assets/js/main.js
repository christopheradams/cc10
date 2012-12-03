
$(function () {

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
	}