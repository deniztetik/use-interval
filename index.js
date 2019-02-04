"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

function useInterval(callback, delay) {
  var savedCallback = (0, _react.useRef)();

  // Remember the latest callback.
  (0, _react.useEffect)(
    function() {
      savedCallback.current = callback;
    },
    [callback]
  );

  // Set up the interval.
  (0, _react.useEffect)(
    function() {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        var id = setInterval(tick, delay);
        return function() {
          return clearInterval(id);
        };
      }
    },
    [delay]
  );
}

exports.default = useInterval;
