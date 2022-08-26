import axios from "axios"

export const handleFetchingData = async (url) => {
    try {
        let response = await axios({
            method: 'get',
            url: url
        });
        let data = response.data
        return data

    } catch (error) {
        return error.response
    }
}