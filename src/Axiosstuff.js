import axios from 'axios';

const API_URL = "https://65d559d03f1ab8c63436c31f.mockapi.io/Final/NerdStuff";

export const fetchData = async () => {
    try{
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error){
        console.log("Error fetching data: ", error); //Error will play if data is unavailable 
        return []
    }
};