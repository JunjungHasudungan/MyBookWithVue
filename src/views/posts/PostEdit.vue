<script setup>
    import { onMounted } from 'vue';
    import usePost from '../../composables/post';
    
    const { post, getPost, updatePost, errors } = usePost();

    // menngguankan defineProps Untuk mengambil props dari pust.js
    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    });

    onMounted( () => getPost(props.id) )
</script>

<template>
    <div class="border border-gray-200 bg-gray-900 mt-4 px-2 rounded-lg">
        
    <form   @submit.prevent="updatePost($route.params.id)"
            class="mx-auto p-4  mx-w-md">
        <div class="mt-2 grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label 
                    for="title" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Judul
                </label>
                <input 
                    type="text" 
                    id="title" 
                    v-model="post.title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Masukkan Judul disini.."
                    required
                    >
                <div v-if="errors.title">
                    <span class="text-sm text-red-400">
                        {{ errors.title[0] }}
                    </span>
                </div>
            </div>
            <div>
                <label 
                    for="description" 
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Deskripsi
                </label>
                <input 
                    type="text" 
                    id="description" 
                    v-model="post.description"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Masukkan Keterangan disini.."
                    required >
                <div v-if="errors.description">
                    <span class="text-sm text-red-400">
                        {{ errors.description[0] }}
                    </span>
                </div>
            </div>
        </div>
        <div class="px-2 py-2 flex space-x-2">
            <RouterLink :to="{name: 'PostIndex'}" 
                class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Cancel
            </RouterLink>

            <button 
                type="submit" 
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Simpan
            </button>            
        </div>
    </form>

    </div>
</template>

