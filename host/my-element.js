class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot name="title"></slot>
                </h2>
                <div>
                    <p>
                        <slot name="paragraph"></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-size: 20px;
                    background: aquamarine;
                }
                :host(.blue) {
                    background: blue;
                }
                :host([yellow]) {
                    background: yellow;
                }
                :host([yellow]) h2 {
                    color: gray;
                }
                :host-context(article.card){
                    display: block;
                    max-width: 100%;
                }
            </style>
        `;
    }
    // true para que clonar con todos los descendientes
    // Cada vez que se emplee el shadowDOM hay que utilizar el shadowRoo, no document
    // esto nos aisla de las colisiones con otros estilos css
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define('my-element', myElement);