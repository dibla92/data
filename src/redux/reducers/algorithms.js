import produce from 'immer'

const initialState = {
  algorithms: [],
}

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return state
    }
  })

export default appReducer
