import {useSelector} from 'react-redux';

export const getDocument = (documents ,id) => {
    return documents.find((d) => {
        return d.id === id;
    });
}

export const getDocuments = (documents ,ids) => {
    return documents.filter((document) => {
        return ids.includes(document.id);
    });
}