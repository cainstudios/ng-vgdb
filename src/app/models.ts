export interface Game {
    background_image: string;
    name: string;
    releases: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: string;
    generes: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    ratings: Array<Rating>;
    screenshots:Array<Screenshots>;
    trailer: Array<Trailer>;
    id: string;
}

export interface APIResponse<T> {
    results: Array<T>;
}

 interface Genre {
     name: string;
 }

 interface ParentPlatform {
     platform: {
         name: string;
         slug: string;
     };
 }

 interface Publishers {
     name: string;
 }

 interface Rating{
     id: number;
     count: number;
     title: string;
 }

interface Screenshots{
    image: string;
}

interface Trailer{
    data: {
        max: string;
    }
}




