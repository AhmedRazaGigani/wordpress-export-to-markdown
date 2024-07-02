// get the venue's city from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const venueCityMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_VenueCity');
    return venueCityMeta ? venueCityMeta.meta_value[0] : null;
};
