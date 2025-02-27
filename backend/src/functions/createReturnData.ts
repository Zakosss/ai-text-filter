export default (statusMessage: string, data: any, error?: string) => {
    return {
        message: statusMessage,
        data: data,
        error: error
    }
}