const states = require('../data/unitedstates_states.json');

// get the venue's state code from the event post's metadata
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
        // It is already an abbreviation
        return stateValue;
    } else {
        // It is a full state name, find the abbreviation
        const state = states.find(state => state.name.toLowerCase() === stateValue.toLowerCase());
        return state ? state.abbreviation : null;
    }
};
