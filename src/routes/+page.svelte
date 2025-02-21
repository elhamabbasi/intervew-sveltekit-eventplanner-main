<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { writable,  } from 'svelte/store';
	import { enhance } from '$app/forms';

	let { data }: { data: PageData } = $props();
	let dialog: HTMLDialogElement ; // Reference to the dialog tag

	let selectedEventIdAndTitle = writable({id:0 , title: ''});

	onMount(() => {
		dialog = document.getElementById('confirmation-dialog') as HTMLDialogElement;
	})

	function navigateToEvent(eventId: number) {
		console.log('Navigating to event:', eventId); // Debugging
		goto(`/${eventId}`);
	}

	const showDialogClick = (eventId: number,title: string, asModal = true) => {
		try {
			selectedEventIdAndTitle.set({id: eventId, title: title });// Store selected event ID
			setTimeout(() => dialog[asModal ? 'showModal' : 'show'](), 0);
		} catch {
		}  
	};

	const closeClick = () => {
		dialog.close();
	};

</script>

<div class="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
	<!-- Header -->
	<h1 class="text-2xl font-bold text-alaska-blue mb-4">Welcome to the Events Management Portal </h1>
	<dialog id="confirmation-dialog" class="w-96 p-4 bg-white rounded-lg shadow-lg" >
		<h1 class="pb-4">Are you sure to Delete {$selectedEventIdAndTitle.title}</h1>
		<form method="post" action="?/delete">
			<input type="hidden" name="id" value={$selectedEventIdAndTitle.id} />
			<div class="flex justify-center space-x-4">
				<button
					type="submit"
					class="bg-alaska-on-light text-white px-4 py-2 rounded-lg hover:bg-alaska-blue transition"
				>
					Delete
				</button>
				<button
					type="button"
					class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
					onclick= { () => closeClick()}
				>
					Cancel
				</button>
			</div>
		</form>
	</dialog>

	<div class="w-full max-w-4xl overflow-x-auto">
		<table class="w-full bg-white shadow-md rounded-lg border border-gray-300">
			<!-- Table Head -->
			<thead class="bg-alaska-blue text-white">
				<tr>
					<th class="py-3 px-4 text-left">Title</th>
					<th class="py-3 px-4 text-left">Description</th>
					<th class="py-3 px-4 text-left">Date</th>
					<th class="py-3 px-4 text-left">Delete Event</th>
				</tr>
			</thead>

			<!-- Table Body -->
			<tbody class="divide-y divide-gray-300">
				{#await data.events}
				    {#each Array(5) as _, i}
						<tr class="animate-pulse">
							<td class="py-3 px-4">
								<div class="h-4 bg-gray-300 rounded w-3/4"></div>
							</td>
							<td class="py-3 px-4">
								<div class="h-4 bg-gray-300 rounded w-5/6"></div>
							</td>
							<td class="py-3 px-4">
								<div class="h-4 bg-gray-300 rounded w-1/2"></div>
							</td>
							<td class="py-3 px-4">
								<div class="h-4 bg-gray-300 rounded w-1/2"></div>
							</td>
						</tr>
					{/each}
				{:then eventList}
					{#each eventList as event}
						<tr class="hover:bg-gray-100 cursor-pointer">
							<td
								class="py-3 px-4 font-semibold text-gray-900"
								onclick={() => navigateToEvent(event.id)}>{event.title}</td
							>
							<td class="py-3 px-4 text-gray-700">{event.description}</td>
							<td class="py-3 px-4 text-gray-600">{event.date}</td>
							<td class="py-3 px-4">
								<button class="text-alaska-blu hover:text-red-800 transition" title="Delete Event" aria-label="Delete button" onclick={() => showDialogClick(event.id, event.title, true)}>
									<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-2 12H7L5 7m5-3h4m-2-2v2m0 0h-4m4 0h4"></path>
									</svg>
								</button>
							</td>

						</tr>
					{/each}
				{/await}
			</tbody>
		</table>
	</div>

	<!-- Add Event Button -->
	<a
		class="mt-6 inline-block bg-alaska-on-light text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
		href="/newevent"
		role="button"
	>
		Add Event
	</a>
</div>
