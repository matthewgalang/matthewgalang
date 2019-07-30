/* Api methods to call /functions */

const readAll = () => {
    return fetch('/.netlify/functions/get-fauna-counts').then((response) => {
        return response.json()
    })
}

export default {
    readAll: readAll,
}