const states = require('../data/unitedstates_states.json');

// get the venue's state code from the associated venue post's metadata
module.exports = (post, allPosts) => {
    const venueIdMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_EventVenueID');
    if (!venueIdMeta) return null;

    const venueId = venueIdMeta.meta_value[0];
    const venuePost = allPosts.find(item => item.data.post_id[0] === venueId);
    if (!venuePost) return null;

    const venueStateMeta = venuePost.data.postmeta.find(meta => meta.meta_key[0] === '_VenueStateProvince');
    if (!venueStateMeta) return null;

    const stateValue = venueStateMeta.meta_value[0];
    if (stateValue.length === 2) {
        return stateValue;
    } else {
        const state = states.find(state => state.name.toLowerCase() === stateValue.toLowerCase());
        return state ? state.abbreviation : null;
    }
};
