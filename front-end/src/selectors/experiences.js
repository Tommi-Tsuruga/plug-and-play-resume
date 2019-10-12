/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import moment from "moment";

// Get visible experience

export default (experiences) => {
    return experiences.filter((experience) => {

    }).sort((a, b) => {
        switch(sortBy){
            case 'title': return a.title < b.title ? 1 : -1;
            case 'company': return a.company < b.company ? 1 : -1;
           }
    });
};
