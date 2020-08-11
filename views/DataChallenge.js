class DataChallengeView {

    constructor() {
        let $ = document.querySelector.bind(document)
        this.mainArea = $('.container')
        this.dataChallengeArea = $('.data-input-container')
        this.hintArea = $('#day-hint') // Testar sem o prefixo
    }
    
    
    render(newDailyGoal) {

        this.dataChallengeArea.innerHTML = this._dataChallengeTemplate(newDailyGoal)
        this._configProjectionCell()
    }

    
    _dataChallengeTemplate(dailyGoal) {

        console.log(dailyGoal)

        const today = new Date()
        return ` 

        <table>
            <caption>
                <div class='table-header'>
                    <img src='_assets/small-calendar.png' id='small-calendar'>
                    ${today.getDate()}/${today.getMonth() + 1}
                </div>
            </caption>   
            <tr>
                <td>Desafio</td>
                <td id='challengeSpot'></td>
            </tr>
            <tr>
                <td>Diária proporcional</td>
                <td>${dailyGoal.proportionalDailyGoal.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})}</td>
            </tr>
            <tr>
                <td>Mínimo (85%)</td>
                <td>${dailyGoal.calculateMinimumDailyGoal().toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})}</td>
            </tr>
            <tr>
                <td>Falta pra bater</td>
                <td>${dailyGoal.missingSalesValue.toLocaleString('pt-BR', {style: 'currency', 'currency': 'BRL'})}</td>
            </tr>
            <tr id='projection'>
                <td>Projeção atual (%)</td>
                <td>${dailyGoal.calculateProjection().toFixed(2)}%</td>
            </tr>
        </table>
        `
    }

    _configProjectionCell() {
        
        let trProjection = document.getElementById('projection');
        let projectionValue = trProjection.lastElementChild.textContent.replace('%', '');

        this._setCellCollor(trProjection, projectionValue);
    };
    
    _setCellCollor(tr, projection) {

        if (projection >= 100) {
            tr.style.background = '#0000CD'
        } else if (projection >= 85) {
            tr.style.background = '#8B008B'
        } else {
            tr.style.background = '#FF6347'
        };
    };
        
};

