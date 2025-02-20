<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	let { data }: { data: PageData } = $props();

	function navigateToEvent(eventId: number) {
		console.log('Navigating to event:', eventId); // Debugging
		goto(`/${eventId}`);
	}
</script>

<div class="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
	<!-- Header -->
	<h1 class="text-3xl font-bold text-blue-900 mb-4">Welcome to SvelteKit</h1>
	<p class="text-gray-700">
		Visit
		<a href="https://svelte.dev/docs/kit" class="text-blue-600 hover:underline">
			svelte.dev/docs/kit
		</a>
		to read the documentation.
	</p>

	<!-- Events Section -->
	<h1 class="text-2xl font-semibold text-blue-900 mt-8 mb-4">Events</h1>

	<div class="w-full max-w-4xl overflow-x-auto">
		<table class="w-full bg-white shadow-md rounded-lg border border-gray-300">
			<!-- Table Head -->
			<thead class="bg-blue-900 text-white">
				<tr>
					<th class="py-3 px-4 text-left">Title</th>
					<th class="py-3 px-4 text-left">Description</th>
					<th class="py-3 px-4 text-left">Date</th>
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
						</tr>
					{/each}
				{/await}
			</tbody>
		</table>
	</div>

	<!-- Add Event Button -->
	<a
		class="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
		href="/newevent"
		role="button"
	>
		Add Event
	</a>
</div>
