class Hint {

    constructor(salesProjection) {
        
        this.projection = salesProjection;

    }


    matchHint() {

        if (this._finalSprint) {
            return ' '
        };

        if (this.projection > 115) {
            return `
            DICA DO CÉREBRO: Talvez seja a hora de aumentar o sarrafo! Você está bem acima do
            seu objetivo. Que tal aumentar o Desafio?!
            `;
            
        } else if (this.projection < 80) {
            return `
            DICA DO CÉREBRO: Você está projetando menos de 80% do valor pretendido. Se possível, 
            tente alinhar os seus objetivos com a realidade de vendas.
            `;
        }; 
    }; 

    
    _finalSprint() {
        const today = new Date();
        return today.getDate() >= 14;
    }
};



