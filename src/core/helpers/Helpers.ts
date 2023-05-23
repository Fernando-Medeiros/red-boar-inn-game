import type { LanguageSchema } from 'core/schemas/language-schema'
import Swal from 'sweetalert2'

export default class {
    static random(array: string[]) {
        return array[Math.floor(Math.random() * array.length)]
    }

    static translate(): LanguageSchema {
        const language = localStorage.getItem('language')

        return language ? (language as LanguageSchema) : 'br'
    }

    static alertWithTimer(msg: string | undefined, statusCode: number) {
        if (msg)
            Swal.fire({
                position: 'top-end',
                icon: statusCode <= 204 ? 'success' : 'warning',
                title: msg,
                showConfirmButton: false,
                timer: 1500
            })
    }
}
