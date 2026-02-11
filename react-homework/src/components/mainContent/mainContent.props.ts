export interface GetDataProps {
    description: {
        '#IMDB_ID': string;
        '#TITLE': string;
        '#IMG_POSTER': string;
        '#RANK': number;
    }[];
}

export interface StateProps {
    '#IMDB_ID': string;
    '#TITLE': string;
    '#IMG_POSTER': string;
    '#RANK': number;
}
