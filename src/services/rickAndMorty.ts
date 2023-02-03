export const rickAndMortyCharacter = 'https://rickandmortyapi.com/api/character'
export const rickAndMortyLocalizations = 'https://rickandmortyapi.com/api/location'
export const rickAndMortyEpisodes = 'https://rickandmortyapi.com/api/episode'

export const fetchRickAndMorty = async (url:string) => {
    return fetch(url).then(res=> res.json())
}


