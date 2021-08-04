var current;
var data;

// Carga el Crucigrama
function initializeScreen(){
    var table = document.getElementById("puzzle");
    data = puzzleArray();
    for (var i = 0; i < data.length ; i++ ) {
        var row = table.insertRow(-1);
        var rowData = data[i];
        for(var j = 0 ; j < rowData.length ; j++){
            var cell = row.insertCell(-1);
            if(rowData[j] != 0){
                var ID = String('cell' + '_' + i + '_' + j);
                cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + ID + '" onfocus="textInputFocus(' + "'" + ID + "'"+ ')">';
            }else{
                cell.style.backgroundColor  = "#383838";
            }
        }
    }
    addNumbers();
}

// Números de referencia 
function addNumbers(){
    document.getElementById("cell_1_1").placeholder = "1";
    document.getElementById("cell_1_2").placeholder = "2";
    document.getElementById("cell_3_0").placeholder = "3";
    document.getElementById("cell_4_6").placeholder = "4";
    document.getElementById("cell_3_12").placeholder = "5";
    document.getElementById("cell_10_4").placeholder = "6";
    document.getElementById("cell_8_4").placeholder = "7";
}

// Celda Seleccionada
function textInputFocus(ID123){
    current = ID123;
}

// Mapa del Crucigrama 
function puzzleArray(){
    var items = [   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 'p', 'r', 'o', 'a', 'c', 't', 'i', 'v', 'o', 0, 0, 0, 0],
                    [0, 0, 'e', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                    ['m', 0, 'l', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'g', 0],
                    ['i', 0, 'a', 0, 0, 0, 'e', 's', 'c', 'u', 'c', 'h', 'a', 'r'],
                    ['s', 0, 'c', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'n', 0],
                    ['i', 0, 'i', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'a', 0],
                    ['o', 0, 'o', 0, 0, 0, 0, 0, 0, 0, 0, 0, 'r', 0],
                    ['n', 0, 'n', 0, 'u', 'r', 'g', 'e', 'n', 't', 'e', 0, 0, 0],
                    [0, 0, 'e', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 's', 0,'p', 'r', 'i', 'o', 'r', 'i', 'd', 'a', 'd', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
    return items;
}

// Revisar solución
function respuesta(){
    for (var i = 0; i < data.length ; i++ ) {
        var rowData = data[i];
        for(var j = 0 ; j < rowData.length ; j++){
            if(rowData[j] != 0){
                var seleccionado = document.getElementById('cell' + '_' + i + '_' + j);
                if(seleccionado.value != data[i][j]){
                    seleccionado.style.backgroundColor = 'crimson';                    
                } else{
                    seleccionado.style.backgroundColor = 'lime';
                }
            }
        }
    }
}

