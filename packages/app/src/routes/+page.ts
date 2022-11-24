import { query } from '$lib/zeus';
import type { PageLoad } from './$types';

/** This gets called on both the server and the client to provide page data. */
export const load: PageLoad = async ({ fetch }) =>
	// Perform a GraphQL query
	query(
		{
			posts: {
				id: true,
				title: true,
				body: true
			}
		},
		{ fetch }
	);
