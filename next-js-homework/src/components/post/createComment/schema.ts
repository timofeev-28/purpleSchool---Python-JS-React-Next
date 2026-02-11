import {z} from "zod";

export const schema = z.object({
    name: z.string().min(2, {message: 'Минимум две буквы'}).regex(/^[A-Za-zа-яА-ЯёЁ ]+$/i, {message: 'Поле может содержать только буквы'}),
    comment: z.string().min(1, {message: 'Поле должно быть заполнено'})
});

export type SchemaType = z.infer<typeof schema>;
