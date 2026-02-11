import { AnchorHTMLAttributes } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    link: string;
    text: string;
    appearance?: string;
    countFavorites?: number;
    isLogined?: boolean;
}
