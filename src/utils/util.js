/*
 * file: util.js
 * author: lxliang
 * desc: 封装常用的方法工具
 */

const utils = {
    // 判断是否为空
    isEmpty(value) {
        if (value === "" || value === undefined || value === null) {
            return true;
        } else {
            return false;
        }
    },

    // 格式化日期，如：yyyy-MM-dd
    formatTime(curTime, formatType) {
        var o = {
            "M+": curTime.getMonth() + 1, //month
            "d+": curTime.getDate(), //day
            "h+": curTime.getHours(), //hour
            "m+": curTime.getMinutes(), //minute
            "s+": curTime.getSeconds(), //second
            "q+": Math.floor((curTime.getMonth() + 3) / 3), //quarter
            "S": curTime.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(formatType)) {
            formatType = formatType.replace(RegExp.$1, (curTime.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(formatType)) {
                formatType = formatType.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return formatType;
    },

    // 判断是否超过1天
    checkDateOutOf(selectTime, callback) {
        let timeDiff = (new Date() - selectTime) / (1000 * 60 * 60 * 24);
        callback(timeDiff < 1 ? false : true);
    },

    // 封装localstorage方法
    localStorageManager: {
        setStorage(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        getStorage(key) {
            return JSON.parse(localStorage.getItem(key));
        },
        clearStorage() {
            localStorage.clear();
        },
        removeStorage(key) {
            localStorage.removeItem(key);
        }
    }
}

export {
    utils,
}