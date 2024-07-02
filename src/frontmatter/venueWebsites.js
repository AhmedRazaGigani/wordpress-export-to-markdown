// get the venue's website from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const venueWebsiteMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_VenueURL');
    return venueWebsiteMeta ? venueWebsiteMeta.meta_value[0] : null;
};
