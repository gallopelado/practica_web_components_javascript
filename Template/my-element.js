class myElement extends HTMLElement {
    constructor(){
        super();
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Hola mundo!</h2>
                <div>
                    <p>Soy más texto ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
    }
    // true para que clonar con todos los descendientes
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);