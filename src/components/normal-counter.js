(function() {

    class NormalCounterComponent extends HTMLElement {

        constructor() {
            super();
            this.contador = 0;
        }
    
        connectedCallback() {
            this.setTemplate();
            this.setStyle();
            this.addButtonListener();
        }
    
        disconnectedCallback() {
        }
    
        addButtonListener() {
            this.querySelector('button').addEventListener('click', () => {
                this.contador++;
                this.querySelector('p').textContent = this.contador;
            });
        }
    
        setTemplate() {
            this.innerHTML = `
                <button>Normal</button>
                <p>${this.contador}</p>
            `;
        }
        setStyle() {
            let styleEl = document.createElement('style');
            styleEl.innerHTML = `
                normal-counter {
                    text-align: center;
                }
                normal-counter > p {
                    font-size: 20px;
                }
                normal-counter > button {
                    font-size: 15px;
                }
            `
            this.prepend(styleEl);
        }
    }

    customElements.define('normal-counter', NormalCounterComponent);
})();