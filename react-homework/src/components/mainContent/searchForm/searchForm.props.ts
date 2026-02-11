export type LoginForm = {
    search: {
        value: string;
    };
}

export interface SearchFormProps {
    getData: (searchValue: string) => Promise<void>;
}
