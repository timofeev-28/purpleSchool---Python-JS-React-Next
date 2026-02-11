import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';


export default function App() {
  const [count, setCount] = useState<number>(1);

  // Типизация MouseEvent должна быть импортировани именно из Реакта (при подсказке выбрать);
  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence='big' onClick={addCounter}>Кнопка</Button>
      <Input placeholder='Email' />
    </>
  );
}
