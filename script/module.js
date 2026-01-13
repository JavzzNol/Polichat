
/*Origin rute*/
const path = window.location.origin;

/*Class to the Polilibro header*/ 

class Header extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <section id="identify-container">
                <img id="ipn-logo" src="${path}/imagenes/logoipn.png">
                <div id="name-logo">Computaci&oacute;n B&aacute;sica I</div>
                <img id="voca-logo" src="${path}/imagenes/logovoca7.png">
                <button id="icon-menu">
                    <span></span>
                </button>
        </section>
        <nav id="menu-container">
            <ul id="navigation">
                <li><a href="${path}/index.html">Inicio</a></li>
                <li><a href="${path}/bienvenida.html">Bienvenida</a></li>
                <li><a href="${path}/contenido/antesdeiniciar.html">Antes de iniciar</a></li>
                <li><a href="${path}/contenido/internet.html">Internet</a></li>
                <li><a href="${path}/contenido/sistemasoperativos.html">Sistema operativo</a></li>
                <li><a href="${path}/contenido/procesadordetextos.html">Procesador de textos</a></li>
                <li><a href="${path}/contenido/presentaciones.html">Presentaciones electr&oacute;nicas</a></li>
                <li><a href="${path}/contenido/recursosdeapoyo.html">Recursos de apoyo</a></li>
            </ul>
        </nav>`;
    }
}

class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="footer-legend">
                CECyT No. 7 - IPN. Av. Ermita Iztapalapa No. 3241, Alcaldía Iztapalapa,  C.P. 09500, CDMX, 2023.
                <br/>
                D.R. Esta página es una obra intelectual, utilizada exclusivamente con fines académicos, sin cuestiones de lucro, se otorgan los derechos de autor, créditos, autoría y marcas registradas.
        </div>`;
    }
}

/*Class to menus*/

class Menu extends HTMLElement{
    constructor(){
        super();
        this.arrayURLs = [];
        this.arraySources = [];
        this.arrayTitles = [];
    }

    static get observedAttributes() {
        return ['urls-config','sources-config','titles-config'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        try{
            const config = JSON.parse(newValue);
            switch(name){
                case 'urls-config':
                    this.arrayURLs = config;
                    break;
                case 'sources-config':
                    this.arraySources = config;
                    break;
                case 'titles-config':
                    this.arrayTitles = config;
                    break;
            }
        }   
        catch(error){
            console.error('Error parsing some attribute:', error);
        }
    }

    connectedCallback(){
        let elem = "";
        for(let i = 0; i < this.arrayURLs.length; i++){
            elem += `
                <div class="menu-cell">
			        <a href="${path}/${this.arrayURLs[i]}">
				        <img src="${path}/${this.arraySources[i]}" class="menu-image" alt="${this.arrayTitles[i]}" title="${this.arrayTitles[i]}">
				        <span><br>${this.arrayTitles[i]}</span>
			        </a>
		        </div>`;
        }
        this.innerHTML = elem;
    }
}

class Loader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="Load">
            <div class="cargador">
                <div class="linea"></div>
                <div class="linea"></div>
                <div class="linea"></div>
                <div class="linea"></div>
                <div class="linea"></div>
                <div class="linea"></div>
                <div class="linea"></div>
                <div class="linea"></div>
            </div>
        </div>`;
    }
}

customElements.define('header-container',Header);
customElements.define('footer-container',Footer);
customElements.define('menu-container',Menu);
customElements.define('loader-container',Loader);