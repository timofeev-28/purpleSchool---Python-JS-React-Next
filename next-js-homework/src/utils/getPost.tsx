import { PostItemProps } from '../interface/postItem.props';
import { API } from './api';

export default async function GetPost(id: string): Promise<PostItemProps | null> {
    try {
        const res = await fetch(API.posts + `/${id}`, {
            next: { revalidate: 5}
        });
        return res.json();
    } catch {
        return null;
    }
}
