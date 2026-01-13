var i = 0
var ejecucion

function importarScript(script) {
    var s = document.createElement("script");
    s.src = script;
    document.querySelector("head").appendChild(s);
}

importarScript("inicio.js")
importarScript("bienvenida.js")
importarScript("menus/menuantesdeiniciar.js")
importarScript("menus/menuinternet.js")
importarScript("menus/menusistemasoperativos.js")
importarScript("menus/menuprocesadordetextos.js")
importarScript("menus/menupresentaciones.js")
importarScript("menus/menurecursosdeapoyo.js")
importarScript("unidad1internet/u1_t1.js")
importarScript("unidad1internet/u1_intro.js")
importarScript("unidad2windows/u2_t1.js")
importarScript("unidad2windows/u2_t2.js")
importarScript("unidad2windows/u2_t3.js")
importarScript("unidad2windows/u2_t4.js")
importarScript("unidad2windows/u2_t5.js")

function opcionmenu(Menu){
    clearInterval(ejecucion)
    const contenidos = new Map([["inicio", inicio],["bienvenida", bienvenida],["antesdeiniciar", menuantesdeiniciar],
                                ["internet", menuinternet],["sistemasoperativos", menusistemasoperativos],["procesadordetextos", menuprocesadordetextos],["presentaciones", menupresentaciones],["recursosdeapoyo", menurecursosdeapoyo]]);
    const u1 = new Map([["u1_intro", u1_intro], ["u1_t1", u1_t1]]);
    const u2 = new Map([["u2_intro", u2_t1], ["u2_t1", u2_t1], ["u2_t2", u2_t2], ["u2_t3", u2_t3], ["u2_t4", u2_t4], ["u2_t5", u2_t5]]);
    if(Menu.split("_")[0]==="u1")
        u1.get(Menu)()
    else if(Menu.split("_")[0]==="u2")
        u2.get(Menu)()
    else{
        contenidos.get(Menu)();
        if(Menu==="bienvenida")
            bienvenidaslide()
        else if(Menu!="inicio")
            ejecutaadaptacion()
    } 
}

function adaptacionmenu(){
    let table = document.getElementById('menu')
    let compStyle = getComputedStyle(table)
    let Columns = compStyle.getPropertyValue('grid-template-columns').split(' ').length
    let celda = document.getElementsByClassName('celdas')
    let ancho = getComputedStyle(celda[0]).getPropertyValue('width')
    let gridAuxiliar = document.getElementById('auxiliar')
    let cont = 0
    if(celda.length<=Columns)
        cont = 0
    else if(celda.length%Columns==0 && gridAuxiliar.children.length>0){
        for(var j=0; j<gridAuxiliar.children.length; j++){
            gridAuxiliar.children[0].children[0].children[0].style.width = null
            var elemento = gridAuxiliar.removeChild(gridAuxiliar.children[0])
            table.innerHTML +=`<div class='celdas'>${elemento.innerHTML}</div>`;
        }
    }
    else if(table.children.length%Columns!=0 && gridAuxiliar.children.length==0){
        let indice = table.children.length - (table.children.length%Columns)
        var resto = table.children.length - indice
        while(cont < resto){
            var elemento = table.removeChild(table.children[indice]);
            gridAuxiliar.innerHTML +=`<div class='celdas'>${elemento.innerHTML}</div>`;
            cont++
        }
        gridAuxiliar.style.gridTemplateColumns = `repeat(${resto}, 1fr)`;
    }
    else if(table.children.length%Columns!=0 && gridAuxiliar.children.length > 0){
        var resto = Columns - (table.children.length%Columns)
        var auxiliar = resto - gridAuxiliar.children.length
        while(gridAuxiliar.children.length > 0 && cont <= Math.abs(auxiliar)){
            gridAuxiliar.children[0].children[0].children[0].style.width = null
            var elemento = gridAuxiliar.removeChild(gridAuxiliar.children[0])
            table.innerHTML +=`<div class='celdas'>${elemento.innerHTML}</div>`;
            cont++
        }
    } 
    for(var j=0; j<gridAuxiliar.children.length; j++)
        gridAuxiliar.children[j].children[0].children[0].style.width = ancho
}

function ejecutaadaptacion(){
    ejecucion = setInterval(adaptacionmenu,100)
}