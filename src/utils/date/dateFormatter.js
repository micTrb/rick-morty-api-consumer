

const formatDate = (millisec) => {
    const date = new Date(millisec);
    return date;
}


function setZeroDateFormat(dateUnit) {
    let formattedToZero = (dateUnit > 9) ? dateUnit.toString() : "0" + dateUnit;
    return formattedToZero;
}


export function dateFormatterSlash(date) {

    date = formatDate(date);

    if (!date) return null;
    else if (typeof date === 'string' || date instanceof String) {
        date = new Date(date);
    };

    let dash = "/";

    let d = setZeroDateFormat(date.getDate());
    let m = setZeroDateFormat(date.getMonth());
    let y = date.getFullYear().toString();

    // let h = setZeroDateFormat(date.getHours());
    // let min = setZeroDateFormat(date.getMinutes());
    // let s = setZeroDateFormat(date.getSeconds());

    let dateArray = [d, m, y];
    // let timeArray = [h, min, s];

    let stringDate = dateArray.join(dash);
    // let stringTime = timeArray.join(colon);

    let dateResult = stringDate/* + " " + stringTime*/;

    return dateResult;
}


export function dateFormatterTimeZoneDash(date) {

    if (!date) return null;
    else if (typeof date === 'string' || date instanceof String) {
        date = new Date(date);
    };

    let dash = "-";
    let colon = ":";

    let d = setZeroDateFormat(date.getDate());
    let m = setZeroDateFormat(date.getMonth());
    let y = date.getFullYear().toString();

    let h = setZeroDateFormat(date.getHours());
    let min = setZeroDateFormat(date.getMinutes());
    let s = setZeroDateFormat(date.getSeconds());

    let offSet = date.getTimezoneOffset() / 60 + ":00";

    let dateArray = [y, m, d];
    let timeArray = [h, min, s];

    let stringDate = dateArray.join(dash);
    let stringTime = timeArray.join(colon);

    let dateResult = stringDate + " " + stringTime + " " + offSet;

    return dateResult;
}

export function dateDAYFormatterDash(date) {

    if (!date) return "No date";


    let dash = "-";

    let d = setZeroDateFormat(date.getDate());
    let m = setZeroDateFormat(date.getMonth());
    let y = date.getFullYear().toString();

    let dateArray = [y, m, d];

    let stringDay = dateArray.join(dash);

    console.log(stringDay);

    return stringDay;
}

export function dateTIMEFormatterDash(date) {

    if (!date) return "No date";

    let colon = ":";

    let h = setZeroDateFormat(date.getHours());
    let min = setZeroDateFormat(date.getMinutes());
    let s = setZeroDateFormat(date.getSeconds());

    let timeArray = [h, min, s];

    let stringTime = timeArray.join(colon);

    console.log(stringTime);

    return stringTime;
}
