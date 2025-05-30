import moment from 'moment';

/**
 * Formats an ISO date string to "YYYY MM DD HH mm ss".
 * @param {string} date - The ISO 8601 date string to format.
 * @returns {string} - The formatted date string.
 */
const formatDateTime = (date) => moment(date, moment.ISO_8601, true).format('YYYY-MM-DD HH:mm:ss');

export default formatDateTime;
