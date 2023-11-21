import { createAsyncActionType } from './index'

export const GET_VARIABLES_ALGORITHM = createAsyncActionType(
  'algorithms',
  'GET_VARIABLES_ALGORITHM',
)
export const GET_ALGORITHMS_LIST = createAsyncActionType('algorithms', 'GET_ALGORITHMS_LIST')
export const ADD_ALGORITHM = createAsyncActionType('algorithms', 'ADD_ALGORITHM')
export const ADD_PROPORTIONAL_ALGORITHM = createAsyncActionType(
  'algorithms',
  'ADD_PROPORTIONAL_ALGORITHM',
)
export const ADD_RULES_BASED_ALGORITHM = createAsyncActionType(
  'algorithms',
  'ADD_RULES_BASED_ALGORITHM',
)
export const UPDATE_RULES_BASED_ALGORITHM = createAsyncActionType(
  'algorithms',
  'UPDATE_RULES_BASED_ALGORITHM',
)
export const DELETE_RULES_BASED_ALGORITHM = createAsyncActionType(
  'algorithms',
  'DELETE_RULES_BASED_ALGORITHM',
)
export const GET_ALGORITHMS_RULES_BASED_LIST = createAsyncActionType(
  'algorithms',
  'GET_ALGORITHMS_RULES_BASED_LIST',
)
export const UPDATE_ALGORITHM = createAsyncActionType('algorithms', 'UPDATE_ALGORITHM')
export const DELETE_ALGORITHM = createAsyncActionType('algorithms', 'DELETE_ALGORITHM')
export const GET_ALGORITHM_SCHEDULES = createAsyncActionType(
  'algorithms',
  'GET_ALGORITHM_SCHEDULES',
)
export const GET_ALGORITHM_ADVANCED_SCHEDULES = createAsyncActionType(
  'algorithms',
  'GET_ALGORITHM_ADVANCED_SCHEDULES',
)
export const ADD_ALGORITHM_ADVANCED_SCHEDULES = createAsyncActionType(
  'algorithms',
  'ADD_ALGORITHM_ADVANCED_SCHEDULES',
)
export const UPDATE_ALGORITHM_ADVANCED_SCHEDULES = createAsyncActionType(
  'algorithms',
  'UPDATE_ALGORITHM_ADVANCED_SCHEDULES',
)
export const DELETE_ALGORITHM_ADVANCED_SCHEDULES = createAsyncActionType(
  'algorithms',
  'DELETE_ALGORITHM_ADVANCED_SCHEDULES',
)
export const ADD_UPDATE_ALGORITHM_SCHEDULE = createAsyncActionType(
  'algorithms',
  'ADD_ALGORITHM_SCHEDULE',
)
export const DELETE_ALGORITHM_SCHEDULE = createAsyncActionType(
  'algorithms',
  'DELETE_ALGORITHM_SCHEDULE',
)

export const GET_SCHEDULES = createAsyncActionType('algorithms', 'GET_SCHEDULES')
export const POST_SCHEDULES = createAsyncActionType('algorithms', 'POST_SCHEDULES')
export const PUT_SCHEDULES = createAsyncActionType('algorithms', 'PUT_SCHEDULES')
export const DELETE_SCHEDULES = createAsyncActionType('algorithms', 'DELETE_SCHEDULES')

export const SET_ALGO_VARIABLES = createAsyncActionType('algorithms', 'SET_ALGO_VARIABLES')
