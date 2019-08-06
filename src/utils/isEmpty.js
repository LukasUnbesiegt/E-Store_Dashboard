
export const isEmpty = (value) => {

    return value === null ||
        value === undefined ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)

    console.log('testing')
}

export function omit(obj, omitKey) {
    return Object.keys(obj).reduce((result, key) => {
        if (key !== omitKey) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}