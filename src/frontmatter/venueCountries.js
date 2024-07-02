// get the venue's country from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const venueCountryMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_VenueCountry');
    return venueCountryMeta ? venueCountryMeta.meta_value[0] : null;
};
