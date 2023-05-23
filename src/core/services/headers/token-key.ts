export const apiTokenHeader = () => {
    const { VUE_APP_API_TOKEN: TOKEN } = process.env

    return { secret: TOKEN }
}
