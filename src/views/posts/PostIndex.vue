<script setup>

    import { onMounted, ref } from 'vue';

    import usePost from '../../composables/post';

    const {  posts, getPosts, destroyPost } = usePost();
    
    onMounted( getPosts )

</script>

<template>

    <div class="mt-12">

        <div class="flex justify-end m-2 p-2">

            <RouterLink :to="{name: 'PostCreate'}" class="rounded-lg text-white font-bold px-4 py-2 bg-indigo-400 hover:bg-indigo-300">New Post</RouterLink>

        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div v-if="posts === 0" class="px-2 py-2 w-full bg-yellow-500 text-white font-extrabold">
                <span>
                    Tidak ada data..
                </span>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">

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

                        <tr v-for="(post, index) in posts" :key="post.id" class="bg-white border-b hover:bg-gray-400 hover:text-white dark:bg-gray-600 dark:border-gray-700">

                            <td class="px-6 py-4">

                                {{ index + 1}}

                            </td>

                            <td class="px-6 py-4">

                                {{ post.title }}

                            </td>

                            <td class="px-6 py-4">

                                {{ post.description }}

                            </td>

                            <td class="px-6 py-4 space-x-2">

                                    <!-- <RouterLink 
                                        :to="{ name: 'PostEdit ', params:{id: post.id} }" 
                                        class="bg-gray-900 px-2 py-2 hover:bg-gray-600  text-white font-bold rounded-lg font-medium border border-lg border-blue-900 text-whitehover:underline"
                                        > Edit
                                    </RouterLink> -->

                                <button @click.prevent="destroyPost(post.id)"
                                    class="bg-yellow-900 hover:bg-yellow-600 border-lg rounded-lg  text-white px-2 py-2 font-medium border-lg border-gray-900 text-whitehover:underline">
                                    Delete
                                </button>

                            </td>

                        </tr>
                </tbody>

            </table>

        </div>

    </div>

</template>


