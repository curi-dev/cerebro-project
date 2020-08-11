class HeaderView {


    constructor(element) {
        
        this.domElement = element;
    }

    render() {
        this.domElement.innerHTML = this._headerTemplate();
        this._configHeader();

    };

    _headerTemplate() {
        const motivationSentence = MotivationSentences.raffleSentence();
    
        return `
            <img src='_assets/brain-logo.png' id='brain-logo'>
            <span>${motivationSentence}</span>
        `
    };

    _configHeader() {
        this.domElement.style.flexDirection = 'column';
        this.domElement.style.textAlign = 'center';
    };

};




