// get the serieses title using the event title for tribe_events post type
module.exports = (post) => {
    if (post.data.post_type[0] === 'tribe_events') {
        return post.data.title[0];
    }
    return null;
};
