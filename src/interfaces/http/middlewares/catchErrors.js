// eslint-disable-next-line arrow-body-style
/**
 * Catches errors thrown in controllers
 * @param {Function} fn - The controller function
 */
const catchErrors = (fn) => (req, res, next) => fn(req, res, next).catch(next);

export default catchErrors;
