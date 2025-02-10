import {Character, CharacterResponse, ResultOrError} from "../types/types.ts";

const BASE_URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async (name: string): Promise<ResultOrError<CharacterResponse>> => {
    try {
        const response = await fetch(`${BASE_URL}/character/?name=${name}`);

        if (response.status === 404) {
            return {
                data: undefined,
                error: new Error('Character not found', {
                    cause: response.status
                })
            }
        } else if (response.status === 500) {
            return {
                data: undefined,
                error: new Error('Internal server error', {
                    cause: response.status
                })
            }
        } else {
            return {
                data: await response.json(),
                error: undefined
            };
        }

    } catch (error) {
        return {
            data: undefined,
            error: new Error('Error fetching characters', {
                cause: error
            })
        }
    }

};

export const getCharacter = async (id: number): Promise<ResultOrError<Character>> => {
    try {
        const response = await fetch(`${BASE_URL}/character/${id}`)

        if (response.status === 404) {
            return {
                data: undefined,
                error: new Error('Character not found', {
                    cause: response.status
                })
            }
        } else if (response.status === 500) {
            return {
                data: undefined,
                error: new Error('Internal server error', {
                    cause: response.status
                })
            }
        } else {
            return {
                data: await response.json(),
                error: undefined
            };
        }
    } catch
        (error) {
        return {
            data: undefined,
            error: new Error('Error fetching characters', {
                cause: error
            })
        }
    }
}