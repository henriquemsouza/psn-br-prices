import * as types from '../constants/actionTypes'


export const getTopGames = maxResults => ({
    type: types.FIND_POPULAR_GAMES_REQUESTED,
    payload: maxResults
});

export const searchByTitle = title => ({
    type: types.SEARCH_BY_TITLE_REQUESTED,
    payload: title
});