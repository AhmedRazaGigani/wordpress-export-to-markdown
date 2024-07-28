const states = require('../data/unitedstates_states.json');

// get the venue's state name from the associated venue post's metadata
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
        const state = states.find(state => state.abbreviation === stateValue);
        return state ? state.name : null;
    } else {
        return stateValue;
    }
};
