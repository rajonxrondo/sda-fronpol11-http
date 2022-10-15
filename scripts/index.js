class Posty {

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/post";
    }

    getAllPosts() {

        const options = {
            method: 'GET'
        };

    

    const fetchPromise = fetch(this.url, options);
    return fetchPromise.then((response) => response.json());
    }
}

class Comments {

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/comments";
    }

    getAllComments() {

    const fetchPromise = fetch(this.url, options);
    return fetchPromise.then((response) => response.json());
    }

    deleteComment(commentId) {

        const options = {
            method: 'DELETE'
        };

        const url = `${this.url}/${commentId}`;
        return fetch(url, options).then((response) => response.json());
    }
}

const comments = new Comments();
comments.getAllComments().then((json) => {
    console.log(json);
}); 