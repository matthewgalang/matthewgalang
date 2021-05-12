const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken
})

export async function fetchEntries() {
    const entries = await client.getEntries({
        'content_type': 'project',
        'order': '-fields.date',
    })

    if(entries.items) return entries.items

    console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchEntry(id) {
    const entry = await client.getEntry(id)
    if (entry.fields) return entry

    console.log(`Error getting entry for ${entry.name}`)
}

export async function fetchAsset(id) {
    const asset = await client.getAsset(id)
    return asset
}
export default { fetchEntries, fetchEntry, fetchAsset }