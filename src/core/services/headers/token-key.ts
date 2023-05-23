export const apiTokenHeader = () => {
    const { VITE_API_TOKEN: TOKEN } = import.meta.env

    return { secret: TOKEN }
}
