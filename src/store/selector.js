import {useSelector} from 'react-redux';

export const getDocument = (documents ,id) => {
    return documents.find((d) => {
        return d.id === id;
    });
}

export const getDocuments = (documents ,ids) => {
    return documents.filter((d) => {
        return ids.includes(d.id);
    });
}

export const getVenue = (venues, id) => {
    return venues.find((venue) => {
        return venue.id === id;
    });
}