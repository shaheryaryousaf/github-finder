import { SEARCH_USERS, CLEAR_USERS, GET_USER, GET_REPOS, SET_LOADING } from "../types";

export default function (state, action) {

    const { type, payload } = action;

    switch (type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false
            }
        default:
            return state
    }

}