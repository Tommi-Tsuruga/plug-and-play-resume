/**
 * util.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const requestConfig = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrer: 'no-referrer',
};

export const fetchRequest = async (url = '',  headers) => {
    const response = await fetch(url,{headers});
    return await response.json();
};

export const httpRequest = async (requestType, url = '', headers, body = {}) => {
    const response = await fetch(url, {
        method: requestType,
        headers,
        body,
        ...requestConfig
    });
    return await response.json();
};

// Helper to check if identical experience exists
export const experienceExists = (experiences, experience) => {
    return experiences.includes(experience);
};
