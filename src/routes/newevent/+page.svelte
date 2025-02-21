<script lang="ts">
	import { enhance } from '$app/forms';
	import Loader from '../../shared/+Loader.svelte';
	let sending = false;
    export let form; 
</script>

<div class=" flex items-center justify-center">
    <form
		method="POST"
		use:enhance={() => {
			sending = true;
			return ({ update }) => {
				update({ invalidateAll: false }).finally(async () => {
					sending = false;
				});
			};
		}}
		class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
	>
		<h2 class="text-2xl font-semibold text-alaska-blue mb-4">Create New Event</h2>

		<!-- Title -->
		<label for="title" class="block text-gray-700 font-medium mb-1">Title</label>
		<input
			type="text"
			id="title"
			name="title"
			required
            value= {form?.title || ""}
			class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-alaska-on-light "
		/>

		<!-- Description -->
		<label for="description" class="block text-gray-700 font-medium mt-4 mb-1">Description</label>
		<textarea
			id="description"
			name="description"
			rows="4"
			cols="50"
            value= {form?.description || ""}
			placeholder="Enter event details..."
			class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
		></textarea>

		<!-- Date -->
		<label for="date" class="block text-gray-700 font-medium mt-4 mb-1">Date</label>
		<input
			type="datetime-local"
			id="date"
			name="date"
			required
            value= {form?.date || ""}
			class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
		/>
        <p class="text-red-800 font-bold">{form?.message}</p>

		<!-- Submit Button -->
		{#if sending}
        <div class="flex flex-col justify-center items-center mt-6  font-semibold ">
            <p class="text-alaska-on-light">Submitting event ...</p>
            <Loader />
        </div>
        {:else}
			<button
				type="submit"
				class="mt-6 w-full bg-alaska-on-light text-white py-2 px-4 rounded-lg font-semibold  hover:bg-blue-700 "
			>
				Create Event
			</button>
		{/if}
	</form>
</div>
