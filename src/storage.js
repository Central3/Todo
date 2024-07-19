export default function store() {
    const storeItem = (key, value) => localStorage.setItem(key, value);
    const getItem = (key) => localStorage.getItem(key);

    return { storeItem, getItem };
}
