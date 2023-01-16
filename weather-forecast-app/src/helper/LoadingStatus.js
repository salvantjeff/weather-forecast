function displayLoading() {
    document.body.classList.add('loading');
};

function removeLoading() {
    document.body.classList.remove('loading');
};

export { displayLoading, removeLoading };