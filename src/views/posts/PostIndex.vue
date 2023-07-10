<script setup>
// lakukan import UsePost untuk digunakan
    import { onMounted } from 'vue';
    import usePost from '../../composables/post';

    const { posts, getPosts } = usePost();
    onMounted( () => getPosts() )
</script>

<template>
    <div class="mt-12">
                
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                           No
                        </th>
                        <th scope="col" class="px-6 py-3">
                           Judul
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Keterangan
                        </th>
                       
                        <th scope="col" class="px-6 py-3">
                           
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, index) in posts" :key="index" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="px-6 py-4">
                           {{ index + 1 }}
                        </td>
                        <td class="px-6 py-4">
                           {{ post.title }}
                        </td>
                        <td class="px-6 py-4">
                            {{ post.description }}
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
