import axios from 'axios';

export const changeLikes = async () => {
    try {
        const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/1`, {
            likes: 1
        });
        console.log(data)
    } catch(e) {
        console.error(e);
    }
};
