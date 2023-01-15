function removeSeconds(string) {
    const taboo = {4:4, 5:5, 6:6}
    const splitted = string.split('');
    const filtered = splitted.filter((curr, i) => !(i in taboo));
    const joined = filtered.join('');
    return joined;
};

export default removeSeconds;