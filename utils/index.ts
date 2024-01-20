export async function fetchCars() {
    const headers= {
        'X-RapidAPI-Key': '4ba401fd93mshc5bed3a6b73fd20p17146bjsnec9d948278a5',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    });

    const result = await response.json();
    return result;
}