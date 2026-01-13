function menuinternet() {
	var elemento = document.getElementById('main');
	elemento.innerHTML = 
	`<div id='menu' class='menu'>\
		<div class='celdas'>\
			<a href='#' onclick="opcionmenu('u1_intro')">\
				<img src='imagenes/menuinternet/introduccion.png' class='imgmenus' alt='Introducción' title='Introducción'/>\
				<span><br>Introducción</span>\
			</a>\
		</div>\
		<div class='celdas'>\
			<a href='#' onclick="opcionmenu('u1_t1')">\
				<img src='imagenes/menuinternet/servicios.png' class='imgmenus' alt='Servicios' title='Servicios'/>\
				<span><br>Servicios</span>\
			</a>\
		</div>\
	</div>\
	<div id='auxiliar' class='auxiliar'></div>`
}