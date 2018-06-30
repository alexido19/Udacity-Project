// Select color input
// Select size input
let height, width, color;

$(document).ready(function(){
	$('#sizePicker').submit(function(event){
		$('table tr').remove();
		event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
	})

	function makeGrid(x, y){
		for (let i = 1; i <= x; i++){
			$('#pixelCanvas').append('<tr></tr>');
			for(let j = 1; j <= y; j++){
				$('tr:last').append('<td></td>');
				$('td').attr("class", 'cells')
			}
		}
		//Add color to cells

		$('.cells').click(function(event){
			color = $('#colorPicker').val();
			$(event.target).css('background-color',color )
		});
	}
});
