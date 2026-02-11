import { API } from '@/app/api';
import { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	// await new Promise((res) => setTimeout(() => {res('')}, 3000));

	const res = await fetch(API.topPage.find, {
		method: 'POST',
		body: JSON.stringify({
			firstCategory
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
		next: { revalidate: 5 }
	});
	// console.log('revalidating getMenu');
	return res.json();
}
