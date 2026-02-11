import { ChangeEvent} from 'react';


export interface InputProps {
    placeholder: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    appearance: string;
    isValid?: boolean;
    isLogined?: boolean;
}
