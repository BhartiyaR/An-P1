export class Vegetables{
    id: number;
    name: string;
    image: string;
    rate: string;
    weight:string;
    comments: Comm [];
    featured: boolean;
}

class Comm {
    rating: number;
    comment: string;
    author: string;
    date: string
}