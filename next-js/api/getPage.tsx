import { API } from '@/app/api';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {

	// для замедления загрузки
	// await new Promise((res) => setTimeout(() => { res('')}, 3000));
	
	const res = await fetch(API.topPage.byAlias + alias, {
		next: { revalidate: 5}
	});
	// console.log('revalidating getMenu');

	if (!res.ok) {
		return null;
	}
	return res.json();
}

// Эта часть для ревалидации добавлена
// {next: { revalidate: 10}}
