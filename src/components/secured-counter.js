(function() {

    class SecuredCounterComponent extends HTMLElement {
        shadow = null;

        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'closed'});
            this.shadow.contador = 0;
        }
    
        connectedCallback() {
            this.setTemplate();
            this.setStyle();
            this.addButtonListener();
        }
    
        disconnectedCallback() {
        }
    
        addButtonListener() {
            this.shadow.querySelector('button').addEventListener('click', () => {
                this.shadow.contador++;
                this.shadow.querySelector('p').textContent = this.shadow.contador;
            });
        }
    
        setTemplate() {
            this.shadow.innerHTML = `
                <button>Shadow Closed</button>
                <p>${this.shadow.contador}</p>
            `;
        }
        setStyle() {
            let styleEl = document.createElement('style');
            styleEl.innerHTML = `
                :host {
                    text-align: center;
                }
                :host > p {
                    font-size: 20px;
                }
                :host > button {
                    font-size: 15px;
                }
            `
            this.shadow.prepend(styleEl);
        }
    }

    customElements.define('secured-counter', SecuredCounterComponent);
})();