const states = require('../data/unitedstates_states.json');

// get the venue's state name from the event post's metadata
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const venueStateMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_VenueStateProvince');
    if (!venueStateMeta) {
        return null;
    }

    const stateValue = venueStateMeta.meta_value[0];
    
    if (stateValue.length === 2) {
        // It is an abbreviation, find the state name
        const state = states.find(state => state.abbreviation === stateValue);
        return state ? state.name : null;
    } else {
        // It is already a full state name
        return stateValue;
    }
};
