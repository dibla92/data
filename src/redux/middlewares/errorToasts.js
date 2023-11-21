// import React from 'react'
// import { toast } from 'react-toastify'

// import { GenericErrorMessage } from '../../components/GenericErrorMessage/GenericErrorMessage'

// export default function errorToastsMiddleware() {
//   return (next) => (action) => {
//     const isError = /_FAILURE$/.test(action.type) || /_ERROR$/.test(action.type)

//     // if exists, gets a error message else code from the response.
//     const message = translationKeys.errorManagement[action.message] || action.message
//     const customId = Number(action.message) === 1555 ? 'token-expire' : action.type

//     if (isError) {
//       toast(() => <GenericErrorMessage errorMessage={message} list={action.list} />, {
//         className: 'generic-error-message',
//         hideProgressBar: true,
//         position: toast.POSITION.BOTTOM_CENTER,
//         type: toast.TYPE.ERROR,
//         toastId: customId,
//       })
//     }

//     return next(action)
//   }
// }
