// get the organizer's email from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const organizerEmailMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_OrganizerEmail');
    return organizerEmailMeta ? organizerEmailMeta.meta_value[0] : null;
};
