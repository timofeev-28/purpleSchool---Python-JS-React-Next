'use client';

import styles from './createComment.module.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, SchemaType } from './schema';
import {zodResolver} from "@hookform/resolvers/zod";
import { useState } from 'react';
import CloseIcon from '@/public/close.svg';

export default function CreateComment() {
    const {register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<SchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(schema),
    });
    const [isSuccess, setIsSuccess] = useState<string>('');
    const [error, setError] = useState<string>();

    const onSubmit: SubmitHandler<SchemaType> = (data) => {
        console.log(data);
        try {
            // 'Я помогаю срабатывать catch )))'
            setIsSuccess(data.comment);
            reset();
        } catch {
            setError('Что-то пошло не так');
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type='text'
                    {...register('name')}
                    aria-invalid={errors?.name?.message ? 'true' : 'false'}
                    placeholder='Имя'
                    className={styles.form__name}
                />
                <div className={styles.form__text_error} >
                    {errors?.name?.message ? errors?.name?.message : ''}
                </div>
            </label>
            <label>
                <textarea
                    {...register('comment')}
                    aria-invalid={errors?.name?.message ? 'true' : 'false'}
                    placeholder='Комментарий'
                    className={styles.form__comment}
                />
                <div className={styles.form__text_error}>{errors?.comment?.message ? errors?.comment?.message : ''}</div>
            </label>
            <button className={styles.form__btn} type='submit' onClick={() => clearErrors()}>Отправить</button>

            {isSuccess &&
                <div className={styles.form__success} role="alert">
                    <div>Ваш отзыв отправлен!</div>
                    <div>Текст комментария: {isSuccess}</div>
                    <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
                    <button
                        onClick={() => setIsSuccess('')}
                        className={styles.form__close}
                        aria-label='закрыть окно'
                    >
                        <CloseIcon />
                    </button>
                </div>}

            {error &&
                <div className={styles.form__error} role="alert">
                    Что-то пошло не так, попробуйте обновить страницу
                    <button
                        onClick={() => setError(undefined)}
                        className={styles.form__close}
                        aria-label='закрыть окно'
                    >
                        <CloseIcon />
                    </button>
                </div>}
        </form>
    )
}
