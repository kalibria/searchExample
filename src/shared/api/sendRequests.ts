const BASE_URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async (name: string) => {
    try{
        const response = await fetch(`${BASE_URL}/character/?name=${name}`)
        return await response.json()
    } catch (error){
        console.log('Error', error)
    }

}