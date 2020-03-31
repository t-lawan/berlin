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

export const getItems = (items, ids) => {
    return items.filter((item) => {
        return ids.includes(item.id);
    })
}

export const getItem = (items, id) => {
    return items.find((item) => {
        return item.id === id;
    })
}