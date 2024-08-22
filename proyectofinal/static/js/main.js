const maincanvas = document.getElementById("main-canvas");
const context = maincanvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, 700, 500);
Color.innerText="Color: Negro";
Tamanio.innerText="Tamaño: Pequeño";
let initialX;
let initialY;
let color;
let tamanio;

const dibujar = (cursorX,cursorY) =>{
    context.beginPath();
    context.moveTo(initialX,initialY);
    context.lineWidth= tamanio;
    context.strokeStyle = color;
    context.lineCap="round";
    context.lineJoint="round";
    context.lineTo(cursorX,cursorY);
    context.stroke();
    initialX=cursorX
    initialY=cursorY
    var datoscanvas = maincanvas.toDataURL("image/jpg");
}

const mouseDown =(evt) =>{
    initialX=evt.offsetX;
    initialY=evt.offsetY;
    dibujar(initialX,initialY);
    maincanvas.addEventListener("mousemove",mouseMoving);
};

const mouseMoving =(evt) =>{
    dibujar (evt.offsetX,evt.offsetY);
}

const mouseUp = () => {
    maincanvas.removeEventListener("mousemove",mouseMoving)
}

maincanvas.addEventListener('mousedown',mouseDown);
maincanvas.addEventListener("mouseup",mouseUp);

function limpiar () {
    context.fillStyle = "white";
    context.fillRect(0, 0, 700, 500);
};

function blanco () {
    document.getElementById("boton-blanco").className="selecionado";
    document.getElementById("boton-negro").className="boton-color";
    document.getElementById("boton-rojo").className="boton-color";
    document.getElementById("boton-azul").className="boton-color";
    document.getElementById("boton-amarillo").className="boton-color";
    document.getElementById("boton-verde").className="boton-color";
    document.getElementById("boton-morado").className="boton-color";
    document.getElementById("boton-gris").className="boton-color";
    Color.innerText="Color: Blanco";
    context.strokeStyle = 'white';
};

function negro () {
    document.getElementById("boton-blanco").className="boton-color";
    document.getElementById("boton-negro").className="selecionado";
    document.getElementById("boton-rojo").className="boton-color";
    document.getElementById("boton-azul").className="boton-color";
    document.getElementById("boton-amarillo").className="boton-color";
    document.getElementById("boton-verde").className="boton-color";
    document.getElementById("boton-morado").className="boton-color";
    document.getElementById("boton-gris").className="boton-color";
    Color.innerText="Color: Negro";
    context.strokeStyle = '#000';
};

function rojo () {
    document.getElementById("boton-blanco").className="boton-color";
    document.getElementById("boton-negro").className="boton-color";
    document.getElementById("boton-rojo").className="selecionado";
    document.getElementById("boton-azul").className="boton-color";
    document.getElementById("boton-amarillo").className="boton-color";
    document.getElementById("boton-verde").className="boton-color";
    document.getElementById("boton-morado").className="boton-color";
    document.getElementById("boton-gris").className="boton-color";
    Color.innerText="Color: Rojo";
    context.strokeStyle = 'Red';
};

function azul () {
    document.getElementById("boton-blanco").className="boton-color";
    document.getElementById("boton-negro").className="boton-color";
    document.getElementById("boton-rojo").className="boton-color";
    document.getElementById("boton-azul").className="selecionado";
    document.getElementById("boton-amarillo").className="boton-color";
    document.getElementById("boton-verde").className="boton-color";
    document.getElementById("boton-morado").className="boton-color";
    document.getElementById("boton-gris").className="boton-color";
    Color.innerText="Color: Azul";
    context.strokeStyle = 'Blue';
};

function amarillo () {
    document.getElementById("boton-blanco").className="boton-color";
    document.getElementById("boton-negro").className="boton-color";
    document.getElementById("boton-rojo").className="boton-color";
    document.getElementById("boton-azul").className="boton-color";
    document.getElementById("boton-amarillo").className="selecionado";
    document.getElementById("boton-verde").className="boton-color";
    document.getElementById("boton-morado").className="boton-color";
    document.getElementById("boton-gris").className="boton-color";
    Color.innerText="Color: Amarillo";
    context.strokeStyle = 'Yellow';
};

function verde () {
    document.getElementById("boton-blanco").className="boton-color";
    document.getElementById("boton-negro").className="boton-color";
    document.getElementById("boton-rojo").className="boton-color";
    document.getElementById("boton-azul").className="boton-color";
    document.getElementById("boton-amarillo").className="boton-color";
    document.getElementById("boton-verde").className="selecionado";
    document.getElementById("boton-morado").className="boton-color";
    document.getElementById("boton-gris").className="boton-color";
    Color.innerText="Color: Verde";
    context.strokeStyle = 'Green';
};

function morado () {
    document.getElementById("boton-blanco").className="boton-color";
    document.getElementById("boton-negro").className="boton-color";
    document.getElementById("boton-rojo").className="boton-color";
    document.getElementById("boton-azul").className="boton-color";
    document.getElementById("boton-amarillo").className="boton-color";
    document.getElementById("boton-verde").className="boton-color";
    document.getElementById("boton-morado").className="selecionado";
    document.getElementById("boton-gris").className="boton-color";
    Color.innerText="Color: Morado";
    context.strokeStyle = 'Purple';
};

function gris () {
    document.getElementById("boton-blanco").className="boton-color";
    document.getElementById("boton-negro").className="boton-color";
    document.getElementById("boton-rojo").className="boton-color";
    document.getElementById("boton-azul").className="boton-color";
    document.getElementById("boton-amarillo").className="boton-color";
    document.getElementById("boton-verde").className="boton-color";
    document.getElementById("boton-morado").className="boton-color";
    document.getElementById("boton-gris").className="selecionado";
    Color.innerText="Color: Gris";
    context.strokeStyle = 'Gray';
};

function pequenio () {
    document.getElementById("tamanio-peque").className="tanamio-seleccionado";
    document.getElementById("tamanio-medio").className="tamanios";
    document.getElementById("tamanio-grande").className="tamanios";
    Tamanio.innerText="Tamaño: Pequeño";
    context.lineWidth= 3;
};
function mediano () {
    document.getElementById("tamanio-peque").className="tamanios";
    document.getElementById("tamanio-medio").className="tanamio-seleccionado";
    document.getElementById("tamanio-grande").className="tamanios";
    Tamanio.innerText="Tamaño: Mediano";
    context.lineWidth= 5;
};
function grande () {
    document.getElementById("tamanio-peque").className="tamanios";
    document.getElementById("tamanio-medio").className="tamanios";
    document.getElementById("tamanio-grande").className="tanamio-seleccionado";
    Tamanio.innerText="Tamaño: Grande";
    context.lineWidth= 10;
};
function predecir(){
    var datoscanvas = maincanvas.toDataURL("image/jpeg");
    var link =document.createElement("a");
    link.href =datoscanvas;
    link.download ="dibujito";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

    
