import { getPage } from '@/api/getPage';
import { getProducts } from '@/api/getProducts';
import { TopPage } from '@/components/topPage/topPage';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// import Error404 from '../../404';

type Params = Promise<{ alias: string }>

export async function generateMetadata({ params }: { params: Params}): Promise<Metadata> {
    const page = await getPage((await params).alias);
	return {
	    title: page?.metaTitle,
        description: page?.metaDescription,
        openGraph: {
            title: page?.metaTitle,
            description: page?.metaDescription,
            images: [
                {
                  url: 'https://images.unsplash.com/photo-1599137258505-8871bd07cbbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGliZXR8ZW58MHx8MHx8fDA%3D',
                  width: 800,
                  height: 630,
                },
              ],
            type: 'website',
            url: 'https://timofeev-28.ru',
            locale: 'ru_RU',
        },
	}
}



export default async function PageCources({ params }: { params: Params}) {
    const page = await getPage((await params).alias);
    if (!page) {
        notFound();
        // <Error404 />
    }
    const products = await getProducts(page.category);

    return (
        <div>
            <TopPage
                page={page}
                products={products}
            />
        </div>
    ); 
}
