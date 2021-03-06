import R from 'ramda'

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS
} from '../actionTypes'

const initialState = {
  ids: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload)
      })
    case LOAD_MORE_PHONES_SUCCESS:
      const ids = R.pluck('id', payload)
      return R.merge(state, {
        ids: R.concat(ids, state.ids)
      })

    default:
      return state
  }
}