// get the organizer's website from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const organizerWebsiteMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_OrganizerWebsite');
    return organizerWebsiteMeta ? organizerWebsiteMeta.meta_value[0] : null;
};
