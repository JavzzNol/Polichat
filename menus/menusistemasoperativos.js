function menusistemasoperativos() {
	var elemento = document.getElementById('main');
	elemento.innerHTML =
	`<div id='menu' class='menu'>\
		<div class='celdas'>\
			<a href='#u2_intro' onclick="opcionmenu('u2_intro')">\
				<img src='imagenes/menusistemaoperativo/introduccion.png' class='imgmenus' alt='Introducción' title='Introducción'/>\
				<span><br>Introducción</span>\
			</a>\
		</div>\
		<div class='celdas'>\
			<a href='#u2_t1' onclick="opcionmenu('u2_t1')">\
				<img src='imagenes/menusistemaoperativo/hardware.png' class='imgmenus' alt='Hardware' title='Hardware'/>\
				<span><br>Hardware</span>\
			</a>\
		</div>\
		<div class='celdas'>\
			<a href='#u2_t2' onclick="opcionmenu('u2_t2')">\
				<img src='imagenes/menusistemaoperativo/software.png' class='imgmenus' alt='Software' title='Software'/>\
				<span><br>Software</span>\
			</a>\
		</div>\
		<div class='celdas'>\
			<a href='#u2_t3' onclick="opcionmenu('u2_t3')">\
				<img src='imagenes/menusistemaoperativo/windows.png' class='imgmenus' alt='Windows' title='Windows'/>\
				<span><br>Windows</span>\
			</a>\
		</div>\
		<div class='celdas'>\
			<a href='#u2_t4' onclick="opcionmenu('u2_t4')">\
				<img src='imagenes/menusistemaoperativo/explorador.png' class='imgmenus' alt='Explorador' title='Explorador'/>\
				<span><br>Explorador</span>\
			</a>\
		</div>\
		<div class='celdas'>\
			<a href='#u2_t5' onclick="opcionmenu('u2_t5')">\
				<img src='imagenes/menusistemaoperativo/paint.png' class='imgmenus' alt='Paint' title='Paint'/>\
				<span><br>Paint</span>\
			</a>\
		</div>\
	</div>\
	<div id='auxiliar' class='auxiliar'></div>`
}