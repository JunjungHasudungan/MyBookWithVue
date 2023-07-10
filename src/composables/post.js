import { ref } from "vue"
import axios from "axios";
import { useRouter } from "vue-router";

// masukkan link api posts kedalam axios sebagai default url

export default function usePost() {
    
    // membuat variable global yang akan dapat diakses secara default melalui function usePost
    const posts = ref([]); // variable posts untuk menampung seluruh data post
    const post = ref([]); // variable post untuk menampung 1 data post
    const errors = ref({}); // variable errors untuk menampung semua error yang terjadi 
    const router = useRouter();
    
    const dataPost = axios.defaults.url = "http://localhost:8000/api/posts/"

    // function untuk mengambil semua data post
    const getPosts = async () => {
        // memasukkan link api kedalam var response melalui axios sebagai akses gate api
        const response = await axios.get(dataPost);

        // memasukkan nilai variable response kedalam var posts
        posts.value = response.data.data;

    };

    // mengambil data post hanya 1 berdasarkan id
    const getPost = async (id) => {
        const post = await axios.get("skill" + id);
        post.value = response.data.data;
    }

    // function melakukan store post 
    const storePost = async (data) => {

        try{
            // mengirimkan data berdasarkan parameter kedalam api posts
            await axios.post("posts", data);
            await axios.push({name: "PostIndex"});

        }catch(errror){
            if(errror.response.data === 422){
                errors.value = response.data.errors;
            }
        }
    }

    // function melakukan edit data post
    const updatePost = async (id) => {
        try{
            // meletakkan data yang akan diupdate berdasarkan id post
            await axios.put(dataPost + id, post.value); 
            // mengembalikan ke route post index
            await router.push({name: "PostInex"});
        }catch(error){
            
        }
    }

    return {
        // panggil semua variable global untuk dapat digunakan ketika digunakan nanti
        posts,
        post,
        errors, 
        errors,
        getPosts,
        getPost,
    }

}