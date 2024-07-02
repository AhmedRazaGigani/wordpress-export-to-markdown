// get the venue's postal code from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const venuePostalCodeMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_VenueZip');
    return venuePostalCodeMeta ? venuePostalCodeMeta.meta_value[0] : null;
};
