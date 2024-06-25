// get the organizer's name using the organizer ID found in the event post's metadata
module.exports = (post, allPosts) => {
    if (!post.data.postmeta) {
        // console.log('Post meta data not found:', post);
        return [];
    }

    const eventOrganizerMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_EventOrganizerID');
    if (!eventOrganizerMeta) {
        // console.log('Event organizer ID not found in post meta:', post.data.postmeta);
        return [];
    }

    const eventOrganizerID = eventOrganizerMeta.meta_value[0];
    // console.log('Event Organizer ID:', eventOrganizerID);

    if (!Array.isArray(allPosts)) {
        // console.log('All posts data is not an array:', allPosts);
        return [];
    }

    const organizerPost = allPosts.find(item => item.data.post_id[0] === eventOrganizerID);
    if (!organizerPost) {
        // console.log('Organizer post not found for ID:', eventOrganizerID);
        return [];
    }

    const organizerName = organizerPost.data.title[0];
    return [organizerName];
};
