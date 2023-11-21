import produce from 'immer'

const initialState = {
}

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return state
    }
    return draft
  })

export default appReducer
