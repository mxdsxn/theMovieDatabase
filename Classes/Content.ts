import Genre from "./Genre"
import Prod_companies from "./Prod_companies"

export default class Content{
    backdrop_path: string
    genres: Genre[]
    homepage: string
    id: number
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Prod_companies[]
    status: string
    vote_average: number
    vote_count: number

    constructor(){}
}
