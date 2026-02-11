'use client';

import { TopPageModel } from '@/interfaces/page.interface';
import { JSX } from 'react';
import { TopPageComponent } from '../topPageComponent/topPageComponent';
import { ProductModel } from '@/interfaces/product.interface';
import { useCategoryStore } from '@/store/firstCategory';

interface TopPageProps extends Record<string, unknown> {
	page: TopPageModel;
	products: ProductModel[];
}

export function TopPage({ page, products }: TopPageProps): JSX.Element {
    const {category} = useCategoryStore();

    return <>
        <TopPageComponent
            firstCategory={category}
            page={page}
            products={products}
        />
    </>;
}
