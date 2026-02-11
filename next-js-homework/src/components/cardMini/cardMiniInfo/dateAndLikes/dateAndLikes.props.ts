import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DateAndLikesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: string;
    likes: number;
}
