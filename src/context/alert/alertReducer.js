import { SET_ALERT, REMOVE_ALERT } from "../types";

export default function (state, action) {

    const { payload, type } = action;

    switch (type) {
        case SET_ALERT:
            return payload
        case REMOVE_ALERT:
            return null;
        default:
            return state;
    }

}