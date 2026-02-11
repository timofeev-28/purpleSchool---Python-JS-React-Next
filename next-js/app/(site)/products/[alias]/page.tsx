// import { getMenu } from '@/api/menu';
import { getPage } from '@/api/getPage';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = Promise<{ alias: string }>

export async function generateMetadata({ params }: { params: Params}): Promise<Metadata> {
    console.log(1)
    const page = await getPage((await params).alias);
console.log(page)
	return {
	    title: page?.metaTitle,
	}
}

// generateStaticParams - зарезервированное имя функции
// export async function generateStaticParams() {
//     const menu = await getMenu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias})))
// }


export default async function PageProducts({ params }: { params: Params}) {
    const page = await getPage((await params).alias);

    if (!page) {
        notFound();
    }
    return (
        <div>
            <p>Страница c alias {(await params).alias}</p>
            {page.title}
        </div>
    ); 
}
