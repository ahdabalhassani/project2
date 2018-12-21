var height, width, col;
document.getElementById('sizePicker').submit(function(event) {
    event.preventDefult();
    height = document.getElementById('inputHeight').val();
    width = document.getElementById('inputWidth').val();
    makeGrid(height, width);
})

function makeGrid(l, o){
    document.getElementById('table tr').remove();
    for (var r = 1; r <= l; r++){
        document.getElementById('pixelCanvas').append('<tr id = box' + r + '></tr>');
        for(var c = 1; c <= o; c++){
            document.getElementById("box") + r.append("<td></td>");
        }
    }

    document.getElementById("td").click(function addColor() {
        col = document.getElementById("colorPicker").val();

    })
}