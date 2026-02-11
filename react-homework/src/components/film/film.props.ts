export interface FilmProps {
    imdbId: string;
    short: {
        name: string;
        image: string;
        description: string;
        aggregateRating: {
            ratingValue: number;
        };
        '@type': string;
        datePublished: string;
        genre: string[];
        review: {
            name: string;
            dateCreated: string;
            reviewBody: string;
        }
        trailer: {
            duration: string;
        }
    }
};
