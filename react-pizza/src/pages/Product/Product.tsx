import { Await, useLoaderData } from 'react-router-dom';
import { ProductProps } from '../../interfaces/product.inteface';
import { Suspense } from 'react';

export function Product() {
  const data = useLoaderData() as ProductProps;

  return (
    <>
      {/* код здесь связан с роутингом - получение данных через loader */}
      
      <Suspense fallback={'Загрузка...'}>
        <Await
          resolve={data}
          // отсюда не показывает
        //   errorElement={<p>Не можем отобразить продукт😬</p>} 
        >
          {(resolvedData: ProductProps) => (
            <p>Product Name: {resolvedData.name}</p>
          )}
        </Await>
      </Suspense>
    </>
  );
}
