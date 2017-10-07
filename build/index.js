"use strict";

var YEAR_IN_MS = 3.154e+10;
var MONTH_IN_MS = 2.628e+9;
var WEEK_IN_MS = 6.048e+8;
var DAY_IN_MS = 8.64e+7;
var HOUR_IN_MS = 3.6e+6;
var MINUTE_IN_MS = 60000;
var SECOND_IN_MS = 1000;

var converterFactory = function converterFactory(millisecondUnit) {
    return function (value) {
        return {
            get in() {
                return {
                    get years() {
                        return value * millisecondUnit / YEAR_IN_MS;
                    },
                    get months() {
                        return value * millisecondUnit / MONTH_IN_MS;
                    },
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
    };
};

var yearConverter = function yearConverter(value) {
    return {
        get in() {
            return {
                get years() {
                    return value;
                },
                get months() {
                    return value * 12;
                },
                get weeks() {
                    return value * 52;
                },
                get days() {
                    return value * 365;
                },
                get hours() {
                    return value * YEAR_IN_MS / HOUR_IN_MS;
                },
                get minutes() {
                    return value * YEAR_IN_MS / MINUTE_IN_MS;
                },
                get seconds() {
                    return value * YEAR_IN_MS / SECOND_IN_MS;
                },
                get milliseconds() {
                    return value * YEAR_IN_MS;
                }
            };
        }
    };
};

var monthConverter = converterFactory(MONTH_IN_MS);
var weekConverter = converterFactory(WEEK_IN_MS);
var dayConverter = converterFactory(DAY_IN_MS);
var hourConverter = converterFactory(HOUR_IN_MS);
var minuteConverter = converterFactory(MINUTE_IN_MS);
var secondConverter = converterFactory(SECOND_IN_MS);
var millisecondConverter = converterFactory(1.0);

var MrTime = function MrTime(value) {
    if (value === null || !isFinite(value)) {
        throw new Error("Invalid time value given: " + value);
    }

    return {
        get years() {
            return yearConverter(value);
        },
        get months() {
            return yearConverter(value / 12);
        },
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
            return millisecondConverter(value);
        }
    };
};

module.exports = MrTime;