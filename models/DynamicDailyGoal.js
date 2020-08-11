class DynamicDailyGoal {

    constructor(monthGoal, accumulatedSales, webServiceResponse) {
        
        this.today = new Date();
        this.saleGoal = monthGoal;
        this.accumulatedSales = accumulatedSales;
        this.missingSalesValue = this.saleGoal - this.accumulatedSales; // Tornar todos os atributos privados
        this.proportionalDailyGoal = this.missingSalesValue / this._leftDays();
    };
    
    
    calculateDailyChallenge(weatherCondition) {
        
        if (weatherCondition) {
            if (this._isWeekend()) {
                return this.proportionalDailyGoal * 1.40;
            } else if (this._isSunday()) {
                return this.proportionalDailyGoal * 1.30;
            } else {                    
                return this.proportionalDailyGoal * 1.15;
            }
        } else if (this._isWeekend()) {
            return this.proportionalDailyGoal * 1.20; 
        } else {
            return this.proportionalDailyGoal * 1.10;    
        };
    };    
    
    
    calculateMinimumDailyGoal() {
    
        return this.proportionalDailyGoal * 0.85;
    }

    
    calculateProjection() {
        
        const partialGoal = this.proportionalDailyGoal * (new Date().getDate() + 1);
        
        return (this.accumulatedSales / partialGoal) * 100;        
    };

    
    _isWeekend() {
        
        return this.today.getDay() == 5 || this.today.getDay() == 6;
    };

    
    _isSunday() {
        
        return this.today.getDay() == 0;
    };

    
    _leftDays() {
        
        return (this._currentMonthLength() - (this.today.getDate() - 1))
    };

    
    _currentMonthLength() {
    
        let ano = this.today.getFullYear()
        let mes = this.today.getMonth()
        
        return new Date(ano, mes + 1, 0).getDate()
    }

};

