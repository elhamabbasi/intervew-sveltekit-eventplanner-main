<!-- <script lang="ts">
	import type { PageData } from "./$types";

    let {data}: {data: PageData} = $props();
    import { enhance } from '$app/forms';
</script>


<div>
    {#if data.event}
        <h2 class="text-lg font-bold">{data.event.id}: {data.event.title}</h2>
        <p>{data.event.description}</p>
        <p>{data.event.date}</p>
    {/if}
</div> -->

<script lang="ts">
	import { goto } from "$app/navigation";
	import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
    

    let isEditing = true;

    function handleCancel() {
        goto('/');
    }


    // // Form data initialized with event values
    // let formData = {
    //     id: data.event?.id || 0,
    //     title: data.event?.title || "",
    //     description: data.event?.description || "",
    //     date: data.event?.date || ""
    // };
</script>

<div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <!-- Edit Mode -->
        <h2 class="text-xl font-bold text-blue-900 mb-4">Edit Event</h2>
        <form method="post" action="?/update" >
            <input type="hidden" id="id" name="id" value={data.event?.id}>
            <div class="mb-4">
                <label for="title" class="block text-gray-700">Title</label>
                <input id="title" name="title" type="text" value={data.event?.title} class="w-full p-2 border rounded">
            </div>

            <div class="mb-4">
                <label for="description" class="block text-gray-700">Description</label>
                <textarea id="description" name="description"value={data.event?.description} class="w-full p-2 border rounded"></textarea>
            </div>

            <div class="mb-4">
                <label for="date" class="block text-gray-700">Date</label>
                <input id="date" name="date" type="datetime-local" value={data.event?.date} class="w-full p-2 border rounded">
            </div>

            <div class="flex space-x-3">
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Save
                </button>
                <button type="button" onclick={() => handleCancel()} class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">
                    Cancel
                </button>
            </div>
        </form>

</div>