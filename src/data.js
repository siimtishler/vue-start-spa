const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

export default {
    getAllPages() {
        return pagesStore;
    },

    getSinglePage(idx) {
        return pagesStore[idx];
    }
}