import { loginURL } from "./Constants";

export function loginQuery (email: string, password: string) {
    fetch(loginURL, {
            method: 'POST',

        }
    ).then(response => response.json())
}