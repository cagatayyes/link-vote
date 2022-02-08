import { ILink } from "../components/list/listSlice";
const localStorageName = 'links';

export const saveListToStorage = (data: Array<ILink>) => {
    localStorage.setItem(localStorageName, JSON.stringify(data));
}

export const getListFromStorage = () => {
    const list = localStorage.getItem(localStorageName);

    return JSON.parse(list as string);
}