export async function fetchCars () {
    const headers = {
        'X-RapidAPI-Key': '84673e5b3emsha38df24b3a9782fp10646ejsn424e942fec00',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    });

    const result = await response.json();

    return result; 
}