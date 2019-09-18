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
    },

    getIssueByVolume(volumeId) {
        return fetch(`https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/issues/?api_key=29f523a340e2f41efd60b3cbcfb936da5fbba4d2&filter=volume:${volumeId}&format=json`)
          .then(result => result.json())
      },

      getCollectionIssue(id) {
        return fetch(`${remoteURL}/collection/${id}`)
          .then(result => result.json())
      }
}