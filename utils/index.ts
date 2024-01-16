import { CarProps, FilterProps } from "@/types";

const NEXT_PUBLIC_IMAGIN_API_KEY='hrjavascript-mastery';

export async function fetchCars (filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
        'X-RapidAPI-Key': '84673e5b3emsha38df24b3a9782fp10646ejsn424e942fec00',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    });

    const result = await response.json();

    return result; 
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 

  export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    
    // Update or delete the 'model' search parameter based on the 'model' value
    searchParams.set(type, value);

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
  }

//   // Mocks useRouter
// const useRouter = jest.spyOn(require("next/router"), "useRouter");

// /**
//  * mockNextUseRouter
//  * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
//  */
// export function mockNextUseRouter(props: {
//     route: string;
//     pathname: string;
//     query: string;
//     asPath: string;
// }) {
//     useRouter.mockImplementationOnce(() => ({
//         route: props.route,
//         pathname: props.pathname,
//         query: props.query,
//         asPath: props.asPath,
//     }));
// }