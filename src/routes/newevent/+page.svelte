<script lang="ts">

</script>

<div class=" flex items-center justify-center">
    <form method="POST" class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-semibold text-alaska-blue mb-4">Create New Event</h2>

        <!-- Title -->
        <label for="title" class="block text-gray-700 font-medium mb-1">Title</label>
        <input 
            type="text" 
            id="title" 
            name="title" 
            required 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-alaska-on-light focus:border-transparent"
        >

        <!-- Description -->
        <label for="description" class="block text-gray-700 font-medium mt-4 mb-1">Description</label>
        <textarea 
            id="description" 
            name="description" 
            rows="4" 
            cols="50" 
            placeholder="Enter event details..." 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-alaska-on-light focus:border-transparent resize-none"
        ></textarea>

        <!-- Date -->
        <label for="date" class="block text-gray-700 font-medium mt-4 mb-1">Date</label>
        <input 
            type="datetime-local" 
            id="date" 
            name="date" 
            required 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-alaska-on-light focus:border-transparent"
        >

        <!-- Submit Button -->
        <button 
            type="submit" 
            class="mt-6 w-full bg-alaska-on-light text-white py-2 px-4 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
            Create Event
        </button>
    </form>
</div>