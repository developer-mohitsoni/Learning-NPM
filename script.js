import axios from 'axios'
import Quote from 'inspirational-quotes'

// fetch data using axios

axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>{
        console.log(response.data);  // Later Executed
    });

    console.log(Quote.getQuote());  // Executed First
