const remoteURL = "http://localhost:5002"

export default {
    createNewEntry(collectionItem) {
        return fetch (`${remoteURL}/collection`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(collectionItem)
        }).then(result => result.json()) 

    },

    getAllEntries(userId) {
        return fetch(`${remoteURL}/collection?userId=${userId}`)
        .then(result => result.json())
    }
}