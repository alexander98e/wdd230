var botonElement = document.getElementById("botonClick");
            var pElement = document.getElementById("areaContador");
            var contador = 0;
            botonElement.onclick = function () {
                contador++;
                pElement.textContent = contador;
            }