// get the venue's phone number from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const venuePhoneMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_VenuePhone');
    return venuePhoneMeta ? venuePhoneMeta.meta_value[0] : null;
};
