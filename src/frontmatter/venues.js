// get the venue's name using the venue ID found in the event post's metadata
module.exports = (post, allPosts) => {
    if (!post.data.postmeta) {
        // console.log('Post meta data not found:', post);
        return [];
    }

    const eventVenueMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_EventVenueID');
    if (!eventVenueMeta) {
        // console.log('Event Venue ID not found in post meta:', post.data.postmeta);
        return [];
    }

    const eventVenueID = eventVenueMeta.meta_value[0];
    // console.log('Event Venue ID:', eventVenueID);

    if (!Array.isArray(allPosts)) {
        // console.log('All posts data is not an array:', allPosts);
        return [];
    }

    const venuePost = allPosts.find(item => item.data.post_id[0] === eventVenueID);
    if (!venuePost) {
        // console.log('Venue post not found for ID:', eventVenueID);
        return [];
    }

    const venueName = venuePost.data.title[0];
    return [venueName];
};
