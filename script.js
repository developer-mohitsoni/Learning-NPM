import axios from 'axios'

// fetch data using axios

axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>{
        console.log(response.data);
    });
