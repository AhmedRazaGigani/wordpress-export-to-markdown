// get the organizer's phone number from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const organizerPhoneMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_OrganizerPhone');
    return organizerPhoneMeta ? organizerPhoneMeta.meta_value[0] : null;
};
