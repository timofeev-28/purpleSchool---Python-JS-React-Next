export interface ListFilmsProps {
    movies: {
        '#IMDB_ID': string;
        '#TITLE': string;
        '#IMG_POSTER': string;
        '#RANK': number;
    }[];
    error: boolean;
    initialState: boolean;
    isLoading: boolean;
}
