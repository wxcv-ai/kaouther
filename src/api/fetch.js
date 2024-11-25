import axios from 'axios';

export async function fetch_data(symbol) {
    try {
        const response = await axios.get(`http://localhost:4000/?symbol=${symbol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

