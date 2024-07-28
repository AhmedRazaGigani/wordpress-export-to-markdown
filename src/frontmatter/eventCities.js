// get the venue's city from the associated venue post's metadata
module.exports = (post, allPosts) => {
    const venueIdMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_EventVenueID');
    if (!venueIdMeta) return null;

    const venueId = venueIdMeta.meta_value[0];
    const venuePost = allPosts.find(item => item.data.post_id[0] === venueId);
    if (!venuePost) return null;

    const venueCityMeta = venuePost.data.postmeta.find(meta => meta.meta_key[0] === '_VenueCity');
    return venueCityMeta ? venueCityMeta.meta_value[0] : null;
};
