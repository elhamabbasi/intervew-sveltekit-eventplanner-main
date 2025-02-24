import { deleteEventById, fetchAllEvents } from '$lib/server/remote-events';
import {  error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
    // Start fetching events but don't block the response
    return {
        events: fetchAllEvents() // This is still a Promise and won't block page rendering
    };
};

export const actions: Actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = parseInt(formData.get("id") as string);

        if (!id) {
            throw error(400, "Invalid event ID");
        }
        try {
            const success = await deleteEventById(id);
            if (!success) {
                throw error(404, "Event not found.");
            }

        } catch (err) {
            console.error("Error deleting event:", err);
            throw error(500, "Failed to delete event.");
        }
    }
};
