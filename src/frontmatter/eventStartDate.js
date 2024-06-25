const luxon = require('luxon');
const settings = require('../settings');

// get event start date, formatted as specified in settings
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const eventStartDateMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_EventStartDate');
    const eventStartDate = eventStartDateMeta ? eventStartDateMeta.meta_value[0] : null;

    if (!eventStartDate) {
        return null;
    }

    const dateTime = luxon.DateTime.fromSQL(eventStartDate, { zone: settings.custom_date_timezone });

    if (settings.custom_date_formatting) {
        return dateTime.toFormat(settings.custom_date_formatting);
    } else if (settings.include_time_with_date) {
        return dateTime.toISO();
    } else {
        return dateTime.toISODate();
    }
};
