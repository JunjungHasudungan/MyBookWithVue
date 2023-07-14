import { ref } from "vue"
import axios from "axios";
import { useRouter } from "vue-router";


export default function usePost() {
    
    const posts = ref([]);
    const post = ref([]); 
    const errors = ref({}); 
    const router = useRouter();

    axios.defaults.baseURL = "http://localhost:8000/api/";

    const getPosts = async () => {
        try{
            const response = await axios.get("posts/");
    
            posts.value = response.data.data;

           
        }catch( error ){
            if(error.response.data === 422){
                errors.value = response.data.errors;
                console.log('data kosong');
            }
        }

    };

    const getPost = async (id) => {
        const response = await axios.get("posts/" + id);
        post.value = response.data.data;
    }

    const storePost = async (data) => {

        try{
            await axios.post("posts", data);

           await router.push({name: "PostIndex"});

        }catch(error){
            if(error.response.data === 422){
                errors.value = response.data.errors;
            }
        }
    }

    const updatePost = async (id) => {
        try{
            await axios.put("posts/" + id, post.value); 
            // console.log(dataUpdatePost);

            await router.push({name: "PostIndex"});
        }catch(error){
            if(error.response.data === 422){
                error.value = error.response.data.errors;
            }
        }
    }

    const destroyPost = async (id) => {

        if(!window.confirm('Yakin menghapus data post?')){
            return;
        }
        axios.delete("posts/" + id);
        await getPosts();
    }

    return {
        posts,
        post,
        errors, 
        errors,
        getPosts,
        getPost,
        storePost,
        updatePost,
        destroyPost,
    }

}