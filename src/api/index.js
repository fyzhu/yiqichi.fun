import { get } from './helpers'

const getSeller = get('/api/seller')
const getGoods = get('/api/Goods')
const getRatings = get('api/ratings')

export {
  getSeller,
  getGoods,
  getRatings
}
