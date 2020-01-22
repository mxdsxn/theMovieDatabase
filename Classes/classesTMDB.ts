class Genre{
    id: number
    name: string

    constructor(){}
}

class Prod_companies{
    name: string
    id: number
    logo_path: string
    origin_country: string

    constructor(){}
}

class Prod_countries{
    iso_3166_1: string
    name: string

    constructor(){}
}

class Spoken_lang{
    iso_639_1: string
    name: string

    constructor(){}
}

class CreatedBy{
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string

    constructor(){}
}

class LastEpToAir{
    air_date: string
    episode_number: number
    id: number
    name: string
    overview: string
    production_code: string
    season_number: number
    show_id: number
    still_path: string
    vote_average: number
    vote_count: number

    constructor(){}
}

class Network{
    name: string
    id: number
    logo_path: string
    origin_country: string

    constructor(){}
}

class Content{
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

class TvSeries extends Content{
    created_by: CreatedBy[]
    episode_run_time: number[]
    first_air_date: string
    in_production: boolean
    languages: string[]
    last_air_date: string
    last_episode_to_air: LastEpToAir
    name: string
    next_episode_to_air: any
    networks: Network[]
    number_of_episodes: number
    number_of_seasons: number
    origin_country: string[]
    original_name: string
    seasons: Season[]
    type: string

    constructor(){
        super()
    }
}

class Season{
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number

    constructor(){}
}

class Movie extends Content{
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

    constructor(){
        super()
    }
}