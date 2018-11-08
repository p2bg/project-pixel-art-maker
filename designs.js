// Select color input
var color = $('#colorPicker').val();
$('#colorPicker').change(function(){
	color = $(this).val();
	console.log(color);
});

// Select size input
var sizeX = $('#inputWidth').val();
var sizeY = $('#inputHeight').val();

$('#inputWidth').change(function(){
	sizeX = $(this).val();
});
$('#inputHeight').change(function(){
	sizeY = $(this).val();
});

// When size is submitted by the user, call makeGrid()
$('input[type=submit]').click(function(event){
	event.preventDefault(); //prevent reloading the page when hitting the submit button
	$('#pixelCanvas tr').remove();//remove previous grid
	makeGrid();
});

//construct the Grid based on the data submitted
function makeGrid() {
	for (y = 0; y < sizeY; y++ ){
		$('#pixelCanvas').append('<tr>');
			for(x = 0; x< sizeX; x++ ){
				$('#pixelCanvas tr:last-child').append('<td></td>');
			}
		$('#pixelCanvas').append('</tr>');
	}
}

//altera a cor do quadrado
$( '#pixelCanvas' ).on( 'click', 'td', function() {
	$(this).css("background-color",color);
});
