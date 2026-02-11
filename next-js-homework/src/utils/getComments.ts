import { PostCommentsProps } from '../interface/postCommentsProps';
import { API } from './api';

export default async function GetComments(id: number): Promise<PostCommentsProps[] | null> {
    try {
        const res = await fetch(API.comments + `${id}`, {
            next: { revalidate: 5}
        });
        return res.json();
    } catch {
        return null;
    }
}
