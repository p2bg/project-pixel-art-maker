// Select color input

// Select size input
var sizeX = $('#inputWidth').val();
var sizeY = $('#inputHeight').val();

$('#inputWidth').change(function(){
	sizeX = $(this).val();
	console.log(sizeX);
});
$('#inputHeight').change(function(){
	sizeY = $(this).val();
	console.log(sizeY);
});

// When size is submitted by the user, call makeGrid()
$('input[type=submit]').click(function(event){
	event.preventDefault();
	$('#pixelCanvas tr').remove();
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
	console.log(sizeX + sizeY);// Your code goes here!
}
