<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    function handleCancel() {
        goto('/');
    }

</script>

<div class=" flex items-center justify-center ">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-alaska-blue mb-4">Edit Event</h2>

        <form method="post" action="?/update" use:enhance>
            <input type="hidden" id="id" name="id" value={data.event?.id}>

            <!-- Title -->
            <div class="mb-4">
                <label for="title" class="block text-gray-700 font-medium">Title</label>
                <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    value={data.event?.title} 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-transparent"
                >
            </div>

            <!-- Description -->
            <div class="mb-4">
                <label for="description" class="block text-gray-700 font-medium">Description</label>
                <textarea 
                    id="description" 
                    name="description"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none  focus:border-transparent resize-none"
                >{data.event?.description}</textarea>
            </div>

            <!-- Date -->
            <div class="mb-4">
                <label for="date" class="block text-gray-700 font-medium">Date</label>
                <input 
                    id="date" 
                    name="date" 
                    type="datetime-local" 
                    value={data.event?.date} 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-transparent"
                >
            </div>

            <!-- Buttons -->
            <div class="flex space-x-3">
                <button 
                    type="submit" 
                    class="w-full bg-alaska-on-light text-white py-2 px-4 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                >
                    Save
                </button>
                <button 
                    type="button" 
                    onclick={() => handleCancel()} 
                    class="w-full bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold shadow hover:bg-gray-500 transition"
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
</div>
