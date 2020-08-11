class AppController {
    
    constructor() {
        
        const $ = document.querySelector.bind(document)
        this.today = new Date()
        this.customerFlowField = $('#store-customer-flow');
        this.salesGoalField = $('#goal');
        this.accumulatedSalesField = $('#sales');
        this.headerArea = new HeaderView($('.header-content')),
        this.resultArea = new DataChallengeView($('load-result-container'))
        this.footerArea = new FooterView($('.bonus-content')) 
    }
    

    calculateDailyGoal(event) {
        
        event.preventDefault() 
        if (!this._inputDataValidation()) { // improve the validation
            return
        }
        
        this.headerArea.render(); // Render it all together less the challenge container

        this._webServiceCall()
        .then(id => {
            const isGoodWeatherForSale = this._openWeatherMapIdList();
            
            return (isGoodWeatherForSale.indexOf(id) != -1);
        })
        .then(response => {
            const dynamicDailyGoal = this._newDynamicDailyGoal(response);
            const projection = dynamicDailyGoal.calculateProjection();

            this.resultArea.render(dynamicDailyGoal);
            this.footerArea.render(new Hint(projection)) // Check if render 
        })
        .catch(err => {
            console.log(err)
            console.log('Não foi possível concluir a solicitação.')
        }); 
        
    };

    _webServiceCall() {
        const webServiceResponse = ClimateWeatherService.climateQuery();
    
        return webServiceResponse;
        
    };


    _newDynamicDailyGoal(response) {
        
        return new DynamicDailyGoal(
            this.salesGoalField.value,
            this.accumulatedSalesField.value,
            response
        )}


    _inputDataValidation() {   
        if (this.customerFlowField.value == '') {
            window.alert('Selecione uma opção para o fluxo de clientes da sua loja.');
            this.customerFlowField.focus();
            return false
        } else if (this.accumulatedSalesField.value >= this.salesGoalField.value) {
            window.alert('Objetivo já foi alcançado.');
            this.salesGoalField.focus();
            return false;
        } else {
            return true
        };
    };

    _openWeatherMapIdList() {

        const idList = [
            200, 201, 202, 210, 211, 212, 221, 230, 231, 232,
            300, 301, 302, 310, 311, 312, 313, 314, 321,
            500, 501, 502, 503, 520, 522, 531, 504,
            800, 801, 802, 804 // Tirar o 800, 801, 802;
        ];   

        return idList;
    };
                
};



