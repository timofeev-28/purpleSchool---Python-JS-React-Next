import { useEffect, useReducer, useRef, FormEvent, ChangeEvent } from 'react';
import Input from '../../ui/input/input';
import Button from '../../ui/button/button';
import Form from '../../ui/form/form';
import { formReducer, INITIAL_STATE } from './entranceForm.state.js';
import { useNavigate } from 'react-router-dom';
import { userActions, UserState } from '../../../store/userSlice/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { KEY_LOCAL_STORAGE, loadState, saveState } from '../../../store/userSlice/storage';
import { RootState } from '../../../store/store';


export default function EntranceForm() {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, value, isFormReadyToSubmit } = formState;
  const userRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogined } = useSelector((s: RootState) => s.user);

  const saveLogIn = (name: string) => {
    const res: UserState[] = loadState(KEY_LOCAL_STORAGE);
    const userLogIn = res.find(el => el.name === name);

    if (!userLogIn) {
        saveState([ ...res, {name: name, isLogined:  true, favorites: []}], KEY_LOCAL_STORAGE);
        dispatch(userActions.logIn({ name: name, isLogined:  true, favorites: [] }));
    } else {
        const changedUserLogIn = { ...userLogIn, isLogined: true};
        const filteredRes = res.filter((el) => el.name !== name);
        saveState([...filteredRes, changedUserLogIn], KEY_LOCAL_STORAGE);
        dispatch(userActions.logIn(changedUserLogIn));
    }
  }

  const focusError = () => {
    if (userRef.current) {
      userRef.current.focus();
    }
  };

  useEffect(() => {
    if (!isValid.userName) {
      focusError();
    }
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      saveLogIn(value.userName);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit]);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!value.userName) {
      dispatchForm({ type: 'RESET_VALIDITY' });
    }
    dispatchForm({
      type: 'SET_VALUE',
      payload: { userName: e.target.value }
    });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
    navigate('/');
  };

  return (
    <Form appearance="entrance" onSubmit={onSubmitHandler}>
      <Input
        ref={userRef}
        appearance="entrance"
        type='text'
        name='userName'
        isValid={isValid.userName}
        isLogined={isLogined}
        placeholder='Ваше имя'
        value={value.userName}
        onChange={inputChange}
      />
      <Button text='Войти в профиль' isLogined={isLogined} />
    </Form>
  );
}
