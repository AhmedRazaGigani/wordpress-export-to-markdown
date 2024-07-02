// get the venue's street address from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const venueStreetMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_VenueAddress');
    return venueStreetMeta ? venueStreetMeta.meta_value[0] : null;
};
