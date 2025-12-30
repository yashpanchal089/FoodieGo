import axios from 'axios';

const API_URL = 'http://localhost:8080/api/foods';

const fetchfoodList = async () => {
    const response = await axios.get(API_URL);
    setFoodList(response.data);
}