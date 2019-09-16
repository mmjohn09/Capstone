const remoteURL = "http://localhost:5002"

export default {
    createNewCollectionItem(collectionItem) {
        return fetch (`${remoteURL}/collection`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(collectionItem)
        }).then(result => result.json()) 

    },

    getAllCollectionItems(userId) {
        return fetch(`${remoteURL}/collection?userId=${userId}`)
        .then(result => result.json())
    },

    deleteCollectionItem(id) {
        return fetch(`${remoteURL}/collection/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    }
}