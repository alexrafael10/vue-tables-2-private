"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  data: function data() {
    return {
      observer: null
    };
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": 'observer'
    });
  },
  mounted: function mounted() {
    var _this = this;

    this.observer = new IntersectionObserver(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];

      if (entry && entry.isIntersecting) {
        _this.$emit("intersect");
      }
    }, {
      root: this.$parent.$el.querySelector('.table-responsive'),
      rootMargin: "10px" //Alex: Add a small margin, seems to fix the issue were the observer stops working

    });
    this.observer.observe(this.$el);
  },
  destroyed: function destroyed() {
    this.observer.disconnect();
  }
};
exports["default"] = _default;