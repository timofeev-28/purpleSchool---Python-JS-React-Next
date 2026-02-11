import { getMenu } from '@/api/getMenu';

export async function Menu() {
	const menu = await getMenu(0);
	
	return (
		<main>
			<div>{menu.length}</div>
		</main>
	)
}
