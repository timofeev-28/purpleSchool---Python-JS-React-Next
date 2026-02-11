import { getPage } from '@/api/getPage';
import { getProducts } from '@/api/getProducts';
import { TopPage } from '@/components/topPage/topPage';
import { notFound } from 'next/navigation';

type Params = Promise<{ alias: string }>

export default async function PageServices({ params }: { params: Params}) {
    const page = await getPage((await params).alias);
    if (!page) {
        notFound();
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
