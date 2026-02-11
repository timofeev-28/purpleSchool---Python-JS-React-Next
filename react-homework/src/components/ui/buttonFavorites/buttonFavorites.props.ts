import { ButtonHTMLAttributes } from 'react';


export interface ButtonFavoritesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    image: string;
    title: string;
    rating: number;
}
