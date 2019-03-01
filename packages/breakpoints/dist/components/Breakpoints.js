"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpoints = exports.sizes = void 0;
var sizes = {
  xs: 480,
  md: 767,
  lg: 1024,
  xl: 1440
};
exports.sizes = sizes;
var breakpoints = {
  xs: "@media (min-width: ".concat(sizes.xs, "px)"),
  md: "@media (min-width: ".concat(sizes.md, "px)"),
  lg: "@media (min-width: ".concat(sizes.lg, "px)"),
  xl: "@media (min-width: ".concat(sizes.xl, "px)")
};
exports.breakpoints = breakpoints;