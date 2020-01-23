import Content from "./Content"
import CreatedBy from "./CreatedBy"
import LastEpToAir from "./LastEpToAir"
import Network from "./Network"
import Season from "./Season"

export default class TvSeries extends Content{
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
