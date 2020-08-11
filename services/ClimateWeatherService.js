class ClimateWeatherService {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada.")
    }
    
    
    static climateQuery() {

        const result = new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(pos => {
    
                const lat = pos.coords.latitude
                const lng = pos.coords.longitude
                
                const xhr = new XMLHttpRequest();
                xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e42fc4a5b1c7b5622cb4ef396fbfa32b`);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) { // Tentar desestructuring
                            const webServiceResponse = JSON.parse(xhr.responseText);
                            const id = webServiceResponse.weather[0].id;
            
                            resolve(id);

                        } else {
                            console.log(xhr.responseText)
                            reject(`${xhr.responseText}`);
                        }
                    }
                };
             
                xhr.send();
            })
        });

        return result;
        
    };

};
    



