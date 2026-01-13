function slide(imagenes){
	let i = 1
	const img1 = document.getElementById('img1')
	const img2 = document.getElementById('img2')
	const barradeprogreso = document.getElementById('barradeprogreso')
	const indicador = document.getElementById('indicador')
	let porcentaje_base = 100/imagenes.length
	let porcentaje_actual = porcentaje_base

	for (let index = 0; index < imagenes.length; index++) {
		const div = document.createElement('div')
		div.className += " circulos"
		div.id = index
		indicador.appendChild(div)
	}
	barradeprogreso.style.width = `${porcentaje_base}%`
	img1.src = imagenes[0]
	img2.src = imagenes[0]
	const cir = document.querySelectorAll('.circulos')
	cir[0].classList.add('resultado')
	const slideshow = () => {
		img2.src = imagenes[i]
		const circulo_actual = Array.from(cir).find(el=>el.id == i)
		Array.from(cir).forEach(C => C.classList.remove('resultado'))
		circulo_actual.classList.add('resultado')
		img2.classList.add('active')
		i++
		porcentaje_actual+=porcentaje_base
		barradeprogreso.style.width = `${porcentaje_actual}%`
		if ( i == imagenes.length){
			i = 0
			porcentaje_actual = porcentaje_base - porcentaje_base
		}
		setTimeout(()=>{
			img2.src = img2.src
			img2.classList.remove('active')
		},1000)
	}
	setInterval(slideshow, 4000)
}

function bienvenidaslide(){
	const imgs = ['imagenes/bienvenida/paint.jpeg','imagenes/bienvenida/word.png','imagenes/bienvenida/powerpoint.png']
  	slide(imgs)
}
