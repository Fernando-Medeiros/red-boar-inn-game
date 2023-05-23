export type CreateAccountSchema = {
    firstName: string
    lastName: string
    email: string
    password: string
}

export type UpdateAccountSchema = {
    firstName?: string
    lastName?: string
    email?: string
}
