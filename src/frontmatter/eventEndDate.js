const luxon = require('luxon');
const settings = require('../settings');

// get event end date, formatted as specified in settings
module.exports = (post) => {
    if (!post.data.postmeta) {
        return null;
    }

    const eventEndDateMeta = post.data.postmeta.find(meta => meta.meta_key[0] === '_EventEndDate');
    const eventEndDate = eventEndDateMeta ? eventEndDateMeta.meta_value[0] : null;

    if (!eventEndDate) {
        return null;
    }

    const dateTime = luxon.DateTime.fromSQL(eventEndDate, { zone: settings.custom_date_timezone });

    if (settings.custom_date_formatting) {
        return dateTime.toFormat(settings.custom_date_formatting);
    } else if (settings.include_time_with_date) {
        return dateTime.toISO();
    } else {
        return dateTime.toISODate();
    }
};
