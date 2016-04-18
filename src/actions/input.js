export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_BLUR = 'INPUT_BLUR';
export const INPUT_ERROR = 'INPUT_ERROR';

/**
 * Input change action
 * Triggers a change on the input value
 * Usage: inputChange('movieForm', 'title', 'movie', 'Chicken run');
 * @param  {string} formKey    the target form key
 * @param  {string} fieldName  the field name
 * @param  {string} entityPath  the field entity path
 * @param  {object} value      the new value
 * @return {object}            the action
 */
export const inputChange = (formKey, fieldName, entityPath, value) => ({
    type: INPUT_CHANGE,
    formKey,
    fieldName,
    entityPath,
    value
});

/**
 * Input blur action
 * Usage: inputBlur('movieForm', 'title', 'movie');
 * @param  {string} formKey    the target form key
 * @param  {string} fieldName  the field name
 * @param  {string} entityPath  the field entity path
 * @param  {object} value      the new value
 * @return {object}            the action
 */
export const inputBlur = (formKey, fieldName, entityPath, value) => ({
    type: INPUT_BLUR,
    formKey,
    fieldName,
    entityPath,
    value
});

/**
 * Input error action
 * Triggers an error on the target field
 * @param  {string} formKey    the target form key
 * @param  {string} fieldName  the field name
 * @param  {string} entityPath the field entity path
 * @param  {string} error      the error message
 * @return {object}            the action
 */
export const inputError = (formKey, fieldName, entityPath, error) => ({
    type: INPUT_ERROR,
    formKey,
    fieldName,
    entityPath,
    error
});
