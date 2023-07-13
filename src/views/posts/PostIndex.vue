<template>

    <div class="mt-12">

        <div class="flex justify-end m-2 p-2">

            <RouterLink :to="{name: 'PostCreate'}" class="rounded-lg px-4 py-2 bg-indigo-200 hover:bg-indigo-400">New Post</RouterLink>

        </div>

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
                    
                        <tr v-for="post in posts" :key="post.id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

                            <td class="px-6 py-4">

                                {{index++ }}

                            </td>

                            <td class="px-6 py-4">

                                {{ post.title }}

                            </td>

                            <td class="px-6 py-4">

                                {{ post.description }}

                            </td>

                            <td class="px-6 py-4">

                                    <RouterLink 
                                        :to="{ name: 'PostEdit', params:{id: post.id} }" 
                                        class="rounded-lg font-medium border-lg border-gray-900 text-whitehover:underline"
                                        > Edit
                                    </RouterLink>

                                <!-- <a href="#" class="font-medium border-lg border-gray-900 text-whitehover:underline">Edit</a> -->

                            </td>

                        </tr>
                </tbody>

            </table>

        </div>

    </div>

</template>

    <script setup>
    import { onMounted, ref } from 'vue';

    import usePost from '../../composables/post';

    const {  posts, getPosts } = usePost();
    
    const index = 1;

    onMounted(() => getPosts())

    </script>
