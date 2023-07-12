import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

// create default function

export default function useBooks(){
    const books = ref([]);
    const book = ref([]);


    // create function to get All boook
    const getBooks = async () => {
        await axios.get('http://127.0.0.1:8000/api/books');
    }
}