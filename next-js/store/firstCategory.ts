import {create, StateCreator} from "zustand";

type CategoryState = {
    category: number;
}

type CategoryActions = {
    setFirstCategory: (num: number)=> void;
}

const CategorySlice: StateCreator<CategoryState & CategoryActions> = (set) => ({
    category: 0,
    setFirstCategory: (num) => {
        set(() => ({
            category: num
        }));
    }
});

export const useCategoryStore = create<CategoryState & CategoryActions>(CategorySlice);
