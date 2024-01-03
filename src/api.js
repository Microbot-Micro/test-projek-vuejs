import axios from "axios";

async function getData() {
    const apiUrl = 'https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth';

    try {
        const response = await axios.get(apiUrl);
        if (!response) {
            throw { name: 'CustomError', message: 'Response is empty' };
        } else {
            // Lakukan sesuatu dengan response jika diperlukan
            console.log(response.data);
        }
    } catch (error) {
        console.error(error.name, error.message);
    }
}

getData();
