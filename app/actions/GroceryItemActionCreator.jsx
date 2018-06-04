var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function (item) {
        dispatcher.dispatch({
            payloaded: item,
            type: "grocery-item:add"
        })
    },
    remove: function (item) {
        dispatcher.dispatch({
            payloaded: item,
            type: "grocery-item:remove"
        })
    },
    buy: function (item) {
        dispatcher.dispatch({
            payloaded: item,
            type: "grocery-item:buy"
        })
    },
    unbuy: function (item) {
        dispatcher.dispatch({
            payloaded: item,
            type: "grocery-item:unbuy"
        })
    }
}