const WEEK_IN_MS = 6.048e+8;
const DAY_IN_MS = 8.64e+7
const HOUR_IN_MS = 3.6e+6;
const MINUTE_IN_MS = 60000;
const SECOND_IN_MS = 1000;

let converter = (millisecondUnit) => {
    return (value) => {
        return {
            get in() {
                return {
                    get weeks() {
                        return value * millisecondUnit / WEEK_IN_MS;
                    },
                    get days() {
                        return value * millisecondUnit / DAY_IN_MS;
                    },
                    get hours() {
                        return value * millisecondUnit / HOUR_IN_MS;
                    },
                    get minutes() {
                        return value * millisecondUnit / MINUTE_IN_MS;
                    },
                    get seconds() {
                        return value * millisecondUnit / SECOND_IN_MS;
                    },
                    get milliseconds() {
                        return value * millisecondUnit;
                    }
                };
            }
        };
    }
};

const weekConverter = converter(WEEK_IN_MS);
const dayConverter = converter(DAY_IN_MS);
const hourConverter = converter(HOUR_IN_MS);
const minuteConverter = converter(MINUTE_IN_MS);
const secondConverter = converter(SECOND_IN_MS);
const millisecondConverter = converter(1.0);

let MrTime = (value) => {
    if(value === null || !isFinite(value)) {
        throw new Error(`Invalid time value given: ${value}`);
    }

    return {
        get weeks() {
            return weekConverter(value);
        },
        get days() {
            return dayConverter(value);
        },
        get hours() {
            return hourConverter(value);
        },
        get minutes() {
            return minuteConverter(value);
        },
        get seconds() {
            return secondConverter(value);
        },
        get milliseconds() {
            return millisecondConverter(value)
        }
    };
};

module.exports = MrTime;
