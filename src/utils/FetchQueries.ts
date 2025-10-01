import { loginURL, registerURL } from "./Constants";

export function loginQuery (email: string, password: string) {
    return fetch(loginURL, {
            method: 'POST',

        }
    ).then(response => response.json())
}


export function registerQuery (email: string, password: string, firstName: string = "", lastName: string = "") {
    return fetch(registerURL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName
            })
        }
    ).then(response => response.json())
}