import { POPULATE_CATS } from './constants'

export const populateCats = data => ({
    type: POPULATE_CATS,
    data
})