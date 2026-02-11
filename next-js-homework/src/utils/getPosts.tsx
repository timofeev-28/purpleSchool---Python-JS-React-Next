import { PostItemProps } from '../interface/postItem.props';
import { API } from './api';

export default async function GetPosts(): Promise<PostItemProps[] | null> {
    try {
        const res = await fetch(API.posts);
        return res.json();
    } catch {
        return null;
    }
}
