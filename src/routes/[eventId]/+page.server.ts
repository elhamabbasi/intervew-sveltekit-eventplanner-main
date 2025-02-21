import { fetchEventById, updateEventById  } from "$lib/server/remote-events";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const eventId = parseInt(params.eventId);
    const event = await fetchEventById(eventId);
    return {
        event
    }
};


export const actions: Actions = {
    update: async ({ request }) => {
        const formData = await request.formData();
        const id = parseInt(formData.get("id") as string);
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const date = formData.get("date") as string;

        if (!id || !title || !description || !date) {
            return { success: false, message: "All fields are required" };
        }

        await updateEventById(id, {  title, description, date });
        redirect(303, `/`);
    }
};