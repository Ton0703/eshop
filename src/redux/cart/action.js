import * as TYPES from '../types'

export const cartAdd = ({color, number, pic, size, title, price}) => {
    return {
        type: TYPES.CART_ADD,
        payload: {
            color,
            number,
            pic,
            size,
            title,
            price
        }
    }
}