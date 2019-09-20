const remoteURL = "http://localhost:5002"

export default {
    createNewWishlistItem(wishlistItem) {
        return fetch(`${remoteURL}/wishlist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(wishlistItem)
        }).then(result => result.json())

    },

    getAllWishlistItems(userId) {
        return fetch(`${remoteURL}/wishlist?userId=${userId}`)
            .then(result => result.json())
    },

    deleteWishlistItem(id) {
        return fetch(`${remoteURL}/wishlist/${id}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    },

    getWishlistIssue(id) {
        return fetch(`${remoteURL}/wishlist/${id}`)
          .then(result => result.json())
      }
}
