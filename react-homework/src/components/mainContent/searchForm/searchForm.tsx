import { useState, useRef, FormEvent } from 'react';
import Input from '../../ui/input/input';
import Button from '../../ui/button/button';
import Form from '../../ui/form/form';
import { ChangeEvent } from 'react';
import { LoginForm, SearchFormProps } from './searchForm.props';


export default function SearchForm({getData}: SearchFormProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);

  const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const { search } = target;
    await getData(search.value);
    setInputValue('');
  };

  return (
    <>
        <Form onSubmit={onSubmitHandler}>
            <Input
                appearance="icon"
                ref={searchRef}
                placeholder="Введите название"
                value={inputValue}
                onChange={inputChange}
                name={'search'}
                type={'text'}
            />
            <Button text="Искать" />
        </Form>
    </>
  );
}
