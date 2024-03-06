const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

const save = () => {
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
} 

export default {
    getAllPages() {
        return pagesStore;
    },

    getSinglePage(idx) {
        return pagesStore[idx];
    },

    editPage(idx, page) {
        pagesStore[idx] = page;
        save();
    },
    
    addPage(page) {
        pagesStore.push(page);
        save();
    },
    
    deletePage(idx) {
        pagesStore.splice(idx,1);
        save();
    }
}