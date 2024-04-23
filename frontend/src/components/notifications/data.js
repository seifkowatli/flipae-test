const defaultMessages = {
    404: {
        severity: 'error',
        message: 'Sorry , resource not found !',
    },
    401: {
        severity: 'error',
        message: 'Unauthorized , please contact your admin',
    },
    500: {
        severity: 'error',
        message: 'Server Error'
    },

    generic: {
        severity: 'error',
        message: 'Something Went Wrong !'
    }
}
export const defaultNotifications = (code) =>
    defaultMessages.hasOwnProperty(code)
        ? defaultMessages[code]
        : defaultMessages.generic; 