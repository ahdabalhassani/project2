


$('#sizePicker').submit(function(event) {
    event.preventDefult();
    height = $("inputHeight").val();
    width = $("inputWidth").val();
    makeGrid(height, width);
})

function makeGrid(l, o){
    $("table tr").remove();
    for (var r = 1; r <= l; r++){
        $("pixelCanvas").append('<tr id = box' + r + '></tr>');
        for(var c = 1; c <= o; c++){
            $("#box" + r).append("<td></td>");
        }
    }

    $("td").click(function addColor() {
        col = $("colorPicker").val();

    })
}
