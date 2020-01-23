import Content from "./Content"
import Prod_countries from "./Prod_countries"
import Spoken_lang from "./Spoken_lang"

export default class Movie extends Content{
    adult: boolean
    belongs_to_collection: any
    budget: number
    imdb_id: string
    original_title: string
    production_countries: Prod_countries[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Spoken_lang[]
    tagline: string
    title:string
    video: boolean

    constructor(newTitle: string){
        super()
        this.title = newTitle
    }
}