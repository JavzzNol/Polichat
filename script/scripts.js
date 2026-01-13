/*window.addEventListener('load',()=>{
	let loader = document.querySelector('.Load');
	loader.style.display = 'none';
});*/

window.addEventListener('load', function() {
	const header = document.getElementById('header');
	const content = document.getElementsByTagName('body')[0].children[1];
	const footer = document.getElementsByTagName('footer-container')[0];

	content.style.paddingTop = header.clientHeight + 'px';
	content.style.minHeight = `calc(100vh - ${footer.clientHeight}px - ${header.clientHeight}px)`;

	/*Adapting window*/
	window.addEventListener('',function(){
		content.style.paddingTop = header.clientHeight + 'px';
		content.style.minHeight = `calc(100vh - ${footer.clientHeight}px - ${header.clientHeight}px)`;
	});

    window.addEventListener('scroll', function() {
        const hidden = document.getElementById('identify-container');
		if(window.innerWidth > 900)
			hidden.style.display = window.scrollY > 0 ? 'none' : 'grid';
    });

	const menu_btn = document.getElementById('icon-menu');
	const backgroud = document.getElementById('menu-container');

	menu_btn.addEventListener('click', function () {
		if(menu_btn.classList.contains('is-active')){
			menu_btn.classList.remove('is-active');
			backgroud.classList.remove('is-active');
		}
		else{
			menu_btn.classList.add('is-active');
			backgroud.classList.add('is-active');
		}
	});

	backgroud.addEventListener('click',function(){
		menu_btn.classList.remove('is-active');
		backgroud.classList.remove('is-active');
	});
});


 

