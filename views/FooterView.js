class FooterView {

    constructor(elemento) {

        this.domElement = elemento;
    };


    render(model) {        
        this.domElement.innerHTML = this._footerTemplate(model);

    };


    _footerTemplate(model) {
        return `
        <p>${model.matchHint()}</p>
        <button id='btn-logon'>Cadastrar</button>
        `
    }; 

};