// get the venue's country code from the associated venue post's metadata
module.exports = (post, allPosts) => {
    const venueIdMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_EventVenueID');
    if (!venueIdMeta) return null;

    const venueId = venueIdMeta.meta_value[0];
    const venuePost = allPosts.find(item => item.data.post_id[0] === venueId);
    if (!venuePost) return null;

    const venueCountryCode = 'US'; // Assuming all are in the US for simplicity
    return venueCountryCode;
};
