import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID BBoJmuZOlAE8KFXgBm49V1PMh_6kkHgfZMmzdI9UMf8'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
}

export default searchImages;