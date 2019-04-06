import {SHOW_NOTIFICATIONS, HIDE_NOTIFICATIONS} from './constants';


export const showNotifications = (message) => ({
    type: SHOW_NOTIFICATIONS,
    message
})

export const hideNotifications = (message) => ({
    type: HIDE_NOTIFICATIONS,
    message
})

