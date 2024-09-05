/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/animate.css/animate.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/animate.css/animate.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";/*!
 * animate.css - https://animate.style/
 * Version - 4.1.1
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2020 Animate.css
 */
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animate__animated.animate__infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animate__animated.animate__repeat-1 {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: var(--animate-repeat);
  animation-iteration-count: var(--animate-repeat);
}
.animate__animated.animate__repeat-2 {
  -webkit-animation-iteration-count: calc(1 * 2);
  animation-iteration-count: calc(1 * 2);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}
.animate__animated.animate__repeat-3 {
  -webkit-animation-iteration-count: calc(1 * 3);
  animation-iteration-count: calc(1 * 3);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);
  animation-iteration-count: calc(var(--animate-repeat) * 3);
}
.animate__animated.animate__delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-delay: var(--animate-delay);
  animation-delay: var(--animate-delay);
}
.animate__animated.animate__delay-2s {
  -webkit-animation-delay: calc(1s * 2);
  animation-delay: calc(1s * 2);
  -webkit-animation-delay: calc(var(--animate-delay) * 2);
  animation-delay: calc(var(--animate-delay) * 2);
}
.animate__animated.animate__delay-3s {
  -webkit-animation-delay: calc(1s * 3);
  animation-delay: calc(1s * 3);
  -webkit-animation-delay: calc(var(--animate-delay) * 3);
  animation-delay: calc(var(--animate-delay) * 3);
}
.animate__animated.animate__delay-4s {
  -webkit-animation-delay: calc(1s * 4);
  animation-delay: calc(1s * 4);
  -webkit-animation-delay: calc(var(--animate-delay) * 4);
  animation-delay: calc(var(--animate-delay) * 4);
}
.animate__animated.animate__delay-5s {
  -webkit-animation-delay: calc(1s * 5);
  animation-delay: calc(1s * 5);
  -webkit-animation-delay: calc(var(--animate-delay) * 5);
  animation-delay: calc(var(--animate-delay) * 5);
}
.animate__animated.animate__faster {
  -webkit-animation-duration: calc(1s / 2);
  animation-duration: calc(1s / 2);
  -webkit-animation-duration: calc(var(--animate-duration) / 2);
  animation-duration: calc(var(--animate-duration) / 2);
}
.animate__animated.animate__fast {
  -webkit-animation-duration: calc(1s * 0.8);
  animation-duration: calc(1s * 0.8);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);
  animation-duration: calc(var(--animate-duration) * 0.8);
}
.animate__animated.animate__slow {
  -webkit-animation-duration: calc(1s * 2);
  animation-duration: calc(1s * 2);
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
}
.animate__animated.animate__slower {
  -webkit-animation-duration: calc(1s * 3);
  animation-duration: calc(1s * 3);
  -webkit-animation-duration: calc(var(--animate-duration) * 3);
  animation-duration: calc(var(--animate-duration) * 3);
}
@media print, (prefers-reduced-motion: reduce) {
  .animate__animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }

  .animate__animated[class*='Out'] {
    opacity: 0;
  }
}
/* Attention seekers  */
@-webkit-keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
@keyframes bounce {
  from,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}
.animate__bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
@-webkit-keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
@keyframes flash {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
.animate__flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}
@-webkit-keyframes shakeX {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
@keyframes shakeX {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
.animate__shakeX {
  -webkit-animation-name: shakeX;
  animation-name: shakeX;
}
@-webkit-keyframes shakeY {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
}
@keyframes shakeY {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
}
.animate__shakeY {
  -webkit-animation-name: shakeY;
  animation-name: shakeY;
}
@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.animate__headShake {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;
}
@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.animate__swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}
@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}
@-webkit-keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
@keyframes jello {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
.animate__jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__heartBeat {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: calc(1s * 1.3);
  animation-duration: calc(1s * 1.3);
  -webkit-animation-duration: calc(var(--animate-duration) * 1.3);
  animation-duration: calc(var(--animate-duration) * 1.3);
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
/* Back entrances */
@-webkit-keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInDown {
  -webkit-animation-name: backInDown;
  animation-name: backInDown;
}
@-webkit-keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInLeft {
  -webkit-animation-name: backInLeft;
  animation-name: backInLeft;
}
@-webkit-keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInRight {
  -webkit-animation-name: backInRight;
  animation-name: backInRight;
}
@-webkit-keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
.animate__backInUp {
  -webkit-animation-name: backInUp;
  animation-name: backInUp;
}
/* Back exits */
@-webkit-keyframes backOutDown {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(700px) scale(0.7);
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutDown {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(700px) scale(0.7);
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutDown {
  -webkit-animation-name: backOutDown;
  animation-name: backOutDown;
}
@-webkit-keyframes backOutLeft {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutLeft {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translateX(-2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutLeft {
  -webkit-animation-name: backOutLeft;
  animation-name: backOutLeft;
}
@-webkit-keyframes backOutRight {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutRight {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translateX(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translateX(2000px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutRight {
  -webkit-animation-name: backOutRight;
  animation-name: backOutRight;
}
@-webkit-keyframes backOutUp {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}
@keyframes backOutUp {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}
.animate__backOutUp {
  -webkit-animation-name: backOutUp;
  animation-name: backOutUp;
}
/* Bouncing entrances  */
@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.animate__bounceIn {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
@-webkit-keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}
@-webkit-keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
@-webkit-keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
@-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
/* Bouncing exits  */
@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.animate__bounceOut {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}
@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
}
@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
}
.animate__bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}
@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
}
@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
}
.animate__bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}
@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}
.animate__bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}
@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}
@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}
.animate__bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}
/* Fading entrances  */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.animate__fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}
@-webkit-keyframes fadeInTopLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInTopLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInTopLeft {
  -webkit-animation-name: fadeInTopLeft;
  animation-name: fadeInTopLeft;
}
@-webkit-keyframes fadeInTopRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInTopRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInTopRight {
  -webkit-animation-name: fadeInTopRight;
  animation-name: fadeInTopRight;
}
@-webkit-keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInBottomLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInBottomLeft {
  -webkit-animation-name: fadeInBottomLeft;
  animation-name: fadeInBottomLeft;
}
@-webkit-keyframes fadeInBottomRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInBottomRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInBottomRight {
  -webkit-animation-name: fadeInBottomRight;
  animation-name: fadeInBottomRight;
}
/* Fading exits */
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.animate__fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.animate__fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
.animate__fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.animate__fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}
@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
.animate__fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}
@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.animate__fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}
@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
.animate__fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}
@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.animate__fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}
@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
.animate__fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}
@-webkit-keyframes fadeOutTopLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
}
@keyframes fadeOutTopLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
}
.animate__fadeOutTopLeft {
  -webkit-animation-name: fadeOutTopLeft;
  animation-name: fadeOutTopLeft;
}
@-webkit-keyframes fadeOutTopRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
}
@keyframes fadeOutTopRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
}
.animate__fadeOutTopRight {
  -webkit-animation-name: fadeOutTopRight;
  animation-name: fadeOutTopRight;
}
@-webkit-keyframes fadeOutBottomRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
@keyframes fadeOutBottomRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}
.animate__fadeOutBottomRight {
  -webkit-animation-name: fadeOutBottomRight;
  animation-name: fadeOutBottomRight;
}
@-webkit-keyframes fadeOutBottomLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
}
@keyframes fadeOutBottomLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
}
.animate__fadeOutBottomLeft {
  -webkit-animation-name: fadeOutBottomLeft;
  animation-name: fadeOutBottomLeft;
}
/* Flippers */
@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
@keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
.animate__animated.animate__flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}
@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.animate__flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}
@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.animate__flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}
@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
.animate__flipOutX {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}
@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
.animate__flipOutY {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}
/* Lightspeed */
@-webkit-keyframes lightSpeedInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__lightSpeedInRight {
  -webkit-animation-name: lightSpeedInRight;
  animation-name: lightSpeedInRight;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skewX(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__lightSpeedInLeft {
  -webkit-animation-name: lightSpeedInLeft;
  animation-name: lightSpeedInLeft;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedOutRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOutRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
.animate__lightSpeedOutRight {
  -webkit-animation-name: lightSpeedOutRight;
  animation-name: lightSpeedOutRight;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
@-webkit-keyframes lightSpeedOutLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOutLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
    transform: translate3d(-100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
}
.animate__lightSpeedOutLeft {
  -webkit-animation-name: lightSpeedOutLeft;
  animation-name: lightSpeedOutLeft;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
/* Rotating entrances */
@-webkit-keyframes rotateIn {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateIn {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpLeft {
  from {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpRight {
  from {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.animate__rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
/* Rotating exits */
@-webkit-keyframes rotateOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
@keyframes rotateOut {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
.animate__rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes rotateOutDownLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
.animate__rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateOutDownRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.animate__rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
@-webkit-keyframes rotateOutUpLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpLeft {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.animate__rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
}
@-webkit-keyframes rotateOutUpRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpRight {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
.animate__rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
  -webkit-transform-origin: right bottom;
  transform-origin: right bottom;
}
/* Specials */
@-webkit-keyframes hinge {
  0% {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
@keyframes hinge {
  0% {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
.animate__hinge {
  -webkit-animation-duration: calc(1s * 2);
  animation-duration: calc(1s * 2);
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
  -webkit-animation-name: hinge;
  animation-name: hinge;
  -webkit-transform-origin: top left;
  transform-origin: top left;
}
@-webkit-keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__jackInTheBox {
  -webkit-animation-name: jackInTheBox;
  animation-name: jackInTheBox;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
.animate__rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}
/* Zooming entrances */
@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
.animate__zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}
@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}
@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}
@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}
/* Zooming exits */
@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
.animate__zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}
@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}
.animate__zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}
@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}
.animate__zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
  -webkit-transform-origin: right center;
  transform-origin: right center;
}
@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.animate__zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
/* Sliding entrances */
@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}
@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}
/* Sliding exits */
@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.animate__slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}
@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.animate__slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}
@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.animate__slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}
@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.animate__slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}
`, "",{"version":3,"sources":["webpack://./node_modules/animate.css/animate.css"],"names":[],"mappings":"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CvD,+CAA+C;EACjD;;EAEA;IACE,wDAAwD;IACxD,gDAAgD;EAClD;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA,oBAAoB;AACpB;EACE;IACE,yCAAyC;IACzC,iCAAiC;EACnC;;EAEA;;IAEE,UAAU;IACV,yCAAyC;IACzC,iCAAiC;EACnC;;EAEA;IACE,UAAU;IACV,yCAAyC;IACzC,iCAAiC;EACnC;AACF;AACA;EACE;IACE,yCAAyC;IACzC,iCAAiC;EACnC;;EAEA;;IAEE,UAAU;IACV,yCAAyC;IACzC,iCAAiC;EACnC;;EAEA;IACE,UAAU;IACV,yCAAyC;IACzC,iCAAiC;EACnC;AACF;AACA;EACE,2CAA2C;EAC3C,mCAAmC;EACnC,gEAAgE;EAChE,wDAAwD;EACxD,iCAAiC;EACjC,yBAAyB;AAC3B;AACA;EACE;IACE,wDAAwD;IACxD,gDAAgD;EAClD;;EAEA;;IAEE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;;EAEA;IACE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;AACF;AACA;EACE;IACE,wDAAwD;IACxD,gDAAgD;EAClD;;EAEA;;IAEE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;;EAEA;IACE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;AACF;AACA;EACE,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE;IACE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;;EAEA;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;AACF;AACA;EACE;IACE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;;EAEA;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;AACF;AACA;EACE,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;;EAEA;IACE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;AACF;AACA;EACE;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;;EAEA;IACE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;AACF;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE;IACE,yDAAyD;IACzD,iDAAiD;EACnD;;EAEA;;IAEE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;;EAEA;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;AACF;AACA;EACE;IACE,yDAAyD;IACzD,iDAAiD;EACnD;;EAEA;;IAEE,UAAU;IACV,sDAAsD;IACtD,8CAA8C;EAChD;;EAEA;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;AACA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;AACA;EACE;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,gCAAgC;EAChC,wBAAwB;AAC1B;AACA;EACE;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;;EAEA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE;IACE,UAAU;IACV,+CAA+C;IAC/C,uCAAuC;EACzC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,+CAA+C;IAC/C,uCAAuC;EACzC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE;IACE,UAAU;IACV,8CAA8C;IAC9C,sCAAsC;EACxC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,8CAA8C;IAC9C,sCAAsC;EACxC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE;IACE,UAAU;IACV,8CAA8C;IAC9C,sCAAsC;EACxC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,8CAA8C;IAC9C,sCAAsC;EACxC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,wCAAwC;EACxC,gCAAgC;AAClC;AACA;EACE;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;EACA;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,yCAAyC;EACzC,iCAAiC;AACnC;AACA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;AACA;EACE,+BAA+B;EAC/B,uBAAuB;AACzB;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;AACF;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;AACF;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,4CAA4C;IAC5C,oCAAoC;EACtC;AACF;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE,iCAAiC;EACjC,yBAAyB;AAC3B;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;AACF;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;EACA;IACE,UAAU;IACV,+CAA+C;IAC/C,uCAAuC;EACzC;AACF;AACA;EACE;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;EACA;IACE,UAAU;IACV,+CAA+C;IAC/C,uCAAuC;EACzC;AACF;AACA;EACE,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;EACA;IACE,UAAU;IACV,8CAA8C;IAC9C,sCAAsC;EACxC;AACF;AACA;EACE;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;EACA;IACE,UAAU;IACV,8CAA8C;IAC9C,sCAAsC;EACxC;AACF;AACA;EACE,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;EACA;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;AACF;AACA;EACE;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;EACA;IACE,UAAU;IACV,6CAA6C;IAC7C,qCAAqC;EACvC;AACF;AACA;EACE,0CAA0C;EAC1C,kCAAkC;AACpC;AACA;EACE;IACE,UAAU;IACV,uCAAuC;IACvC,+BAA+B;EACjC;EACA;IACE,UAAU;IACV,8CAA8C;IAC9C,sCAAsC;EACxC;AACF;AACA;EACE;IACE,UAAU;IACV,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B;AACA,kBAAkB;AAClB;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,yCAAyC;IACzC,iCAAiC;EACnC;;EAEA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,yCAAyC;IACzC,iCAAiC;EACnC;;EAEA;IACE,UAAU;EACZ;AACF;AACA;EACE,+BAA+B;EAC/B,uBAAuB;AACzB;AACA;EACE;IACE,UAAU;IACV,wEAAwE;IACxE,gEAAgE;IAChE,yEAAyE;IACzE,iEAAiE;EACnE;;EAEA;IACE,UAAU;IACV,mEAAmE;IACnE,2DAA2D;IAC3D,sEAAsE;IACtE,8DAA8D;EAChE;AACF;AACA;EACE;IACE,UAAU;IACV,wEAAwE;IACxE,gEAAgE;IAChE,yEAAyE;IACzE,iEAAiE;EACnE;;EAEA;IACE,UAAU;IACV,mEAAmE;IACnE,2DAA2D;IAC3D,sEAAsE;IACtE,8DAA8D;EAChE;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,uCAAuC;EACvC,+BAA+B;AACjC;AACA;EACE;IACE,UAAU;IACV,uEAAuE;IACvE,+DAA+D;EACjE;;EAEA;IACE,UAAU;IACV,wDAAwD;IACxD,gDAAgD;EAClD;AACF;AACA;EACE;IACE,UAAU;IACV,uEAAuE;IACvE,+DAA+D;EACjE;;EAEA;IACE,UAAU;IACV,wDAAwD;IACxD,gDAAgD;EAClD;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE;IACE,UAAU;IACV,wEAAwE;IACxE,gEAAgE;EAClE;;EAEA;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;AACF;AACA;EACE;IACE,UAAU;IACV,wEAAwE;IACxE,gEAAgE;EAClE;;EAEA;IACE,UAAU;IACV,uDAAuD;IACvD,+CAA+C;EACjD;AACF;AACA;EACE,oCAAoC;EACpC,4BAA4B;EAC5B,sCAAsC;EACtC,8BAA8B;AAChC;AACA;EACE;IACE,UAAU;IACV,uEAAuE;IACvE,+DAA+D;IAC/D,yEAAyE;IACzE,iEAAiE;EACnE;;EAEA;IACE,UAAU;IACV,oEAAoE;IACpE,4DAA4D;IAC5D,sEAAsE;IACtE,8DAA8D;EAChE;AACF;AACA;EACE;IACE,UAAU;IACV,uEAAuE;IACvE,+DAA+D;IAC/D,yEAAyE;IACzE,iEAAiE;EACnE;;EAEA;IACE,UAAU;IACV,oEAAoE;IACpE,4DAA4D;IAC5D,sEAAsE;IACtE,8DAA8D;EAChE;AACF;AACA;EACE,iCAAiC;EACjC,yBAAyB;EACzB,uCAAuC;EACvC,+BAA+B;AACjC;AACA,sBAAsB;AACtB;EACE;IACE,2CAA2C;IAC3C,mCAAmC;IACnC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,2CAA2C;IAC3C,mCAAmC;IACnC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE;IACE,2CAA2C;IAC3C,mCAAmC;IACnC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,2CAA2C;IAC3C,mCAAmC;IACnC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE;IACE,0CAA0C;IAC1C,kCAAkC;IAClC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,0CAA0C;IAC1C,kCAAkC;IAClC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE;IACE,0CAA0C;IAC1C,kCAAkC;IAClC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE;IACE,0CAA0C;IAC1C,kCAAkC;IAClC,mBAAmB;EACrB;;EAEA;IACE,uCAAuC;IACvC,+BAA+B;EACjC;AACF;AACA;EACE,iCAAiC;EACjC,yBAAyB;AAC3B;AACA,kBAAkB;AAClB;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE,oCAAoC;EACpC,4BAA4B;AAC9B;AACA;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,0CAA0C;IAC1C,kCAAkC;EACpC;AACF;AACA;EACE,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE;IACE,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,2CAA2C;IAC3C,mCAAmC;EACrC;AACF;AACA;EACE,kCAAkC;EAClC,0BAA0B;AAC5B","sourcesContent":["@charset \"UTF-8\";/*!\n * animate.css - https://animate.style/\n * Version - 4.1.1\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2020 Animate.css\n */\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-repeat: 1;\n}\n.animate__animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-duration: var(--animate-duration);\n  animation-duration: var(--animate-duration);\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.animate__animated.animate__infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animate__animated.animate__repeat-1 {\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  -webkit-animation-iteration-count: var(--animate-repeat);\n  animation-iteration-count: var(--animate-repeat);\n}\n.animate__animated.animate__repeat-2 {\n  -webkit-animation-iteration-count: calc(1 * 2);\n  animation-iteration-count: calc(1 * 2);\n  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);\n  animation-iteration-count: calc(var(--animate-repeat) * 2);\n}\n.animate__animated.animate__repeat-3 {\n  -webkit-animation-iteration-count: calc(1 * 3);\n  animation-iteration-count: calc(1 * 3);\n  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);\n  animation-iteration-count: calc(var(--animate-repeat) * 3);\n}\n.animate__animated.animate__delay-1s {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n  -webkit-animation-delay: var(--animate-delay);\n  animation-delay: var(--animate-delay);\n}\n.animate__animated.animate__delay-2s {\n  -webkit-animation-delay: calc(1s * 2);\n  animation-delay: calc(1s * 2);\n  -webkit-animation-delay: calc(var(--animate-delay) * 2);\n  animation-delay: calc(var(--animate-delay) * 2);\n}\n.animate__animated.animate__delay-3s {\n  -webkit-animation-delay: calc(1s * 3);\n  animation-delay: calc(1s * 3);\n  -webkit-animation-delay: calc(var(--animate-delay) * 3);\n  animation-delay: calc(var(--animate-delay) * 3);\n}\n.animate__animated.animate__delay-4s {\n  -webkit-animation-delay: calc(1s * 4);\n  animation-delay: calc(1s * 4);\n  -webkit-animation-delay: calc(var(--animate-delay) * 4);\n  animation-delay: calc(var(--animate-delay) * 4);\n}\n.animate__animated.animate__delay-5s {\n  -webkit-animation-delay: calc(1s * 5);\n  animation-delay: calc(1s * 5);\n  -webkit-animation-delay: calc(var(--animate-delay) * 5);\n  animation-delay: calc(var(--animate-delay) * 5);\n}\n.animate__animated.animate__faster {\n  -webkit-animation-duration: calc(1s / 2);\n  animation-duration: calc(1s / 2);\n  -webkit-animation-duration: calc(var(--animate-duration) / 2);\n  animation-duration: calc(var(--animate-duration) / 2);\n}\n.animate__animated.animate__fast {\n  -webkit-animation-duration: calc(1s * 0.8);\n  animation-duration: calc(1s * 0.8);\n  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);\n  animation-duration: calc(var(--animate-duration) * 0.8);\n}\n.animate__animated.animate__slow {\n  -webkit-animation-duration: calc(1s * 2);\n  animation-duration: calc(1s * 2);\n  -webkit-animation-duration: calc(var(--animate-duration) * 2);\n  animation-duration: calc(var(--animate-duration) * 2);\n}\n.animate__animated.animate__slower {\n  -webkit-animation-duration: calc(1s * 3);\n  animation-duration: calc(1s * 3);\n  -webkit-animation-duration: calc(var(--animate-duration) * 3);\n  animation-duration: calc(var(--animate-duration) * 3);\n}\n@media print, (prefers-reduced-motion: reduce) {\n  .animate__animated {\n    -webkit-animation-duration: 1ms !important;\n    animation-duration: 1ms !important;\n    -webkit-transition-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    -webkit-animation-iteration-count: 1 !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animate__animated[class*='Out'] {\n    opacity: 0;\n  }\n}\n/* Attention seekers  */\n@-webkit-keyframes bounce {\n  from,\n  20%,\n  53%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);\n    transform: translate3d(0, -30px, 0) scaleY(1.1);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);\n    transform: translate3d(0, -15px, 0) scaleY(1.05);\n  }\n\n  80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);\n    transform: translate3d(0, 0, 0) scaleY(0.95);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);\n    transform: translate3d(0, -4px, 0) scaleY(1.02);\n  }\n}\n@keyframes bounce {\n  from,\n  20%,\n  53%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);\n    transform: translate3d(0, -30px, 0) scaleY(1.1);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);\n    transform: translate3d(0, -15px, 0) scaleY(1.05);\n  }\n\n  80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);\n    transform: translate3d(0, 0, 0) scaleY(0.95);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);\n    transform: translate3d(0, -4px, 0) scaleY(1.02);\n  }\n}\n.animate__bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n@-webkit-keyframes flash {\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n@keyframes flash {\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n.animate__flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n}\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n@-webkit-keyframes shakeX {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n@keyframes shakeX {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n.animate__shakeX {\n  -webkit-animation-name: shakeX;\n  animation-name: shakeX;\n}\n@-webkit-keyframes shakeY {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n}\n@keyframes shakeY {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n}\n.animate__shakeY {\n  -webkit-animation-name: shakeY;\n  animation-name: shakeY;\n}\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n.animate__headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n.animate__swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n@-webkit-keyframes jello {\n  from,\n  11.1%,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n@keyframes jello {\n  from,\n  11.1%,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n.animate__jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n@-webkit-keyframes heartBeat {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  14% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  28% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  42% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  70% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes heartBeat {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  14% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  28% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  42% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  70% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.animate__heartBeat {\n  -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: calc(1s * 1.3);\n  animation-duration: calc(1s * 1.3);\n  -webkit-animation-duration: calc(var(--animate-duration) * 1.3);\n  animation-duration: calc(var(--animate-duration) * 1.3);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n}\n/* Back entrances */\n@-webkit-keyframes backInDown {\n  0% {\n    -webkit-transform: translateY(-1200px) scale(0.7);\n    transform: translateY(-1200px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes backInDown {\n  0% {\n    -webkit-transform: translateY(-1200px) scale(0.7);\n    transform: translateY(-1200px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInDown {\n  -webkit-animation-name: backInDown;\n  animation-name: backInDown;\n}\n@-webkit-keyframes backInLeft {\n  0% {\n    -webkit-transform: translateX(-2000px) scale(0.7);\n    transform: translateX(-2000px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes backInLeft {\n  0% {\n    -webkit-transform: translateX(-2000px) scale(0.7);\n    transform: translateX(-2000px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInLeft {\n  -webkit-animation-name: backInLeft;\n  animation-name: backInLeft;\n}\n@-webkit-keyframes backInRight {\n  0% {\n    -webkit-transform: translateX(2000px) scale(0.7);\n    transform: translateX(2000px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes backInRight {\n  0% {\n    -webkit-transform: translateX(2000px) scale(0.7);\n    transform: translateX(2000px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInRight {\n  -webkit-animation-name: backInRight;\n  animation-name: backInRight;\n}\n@-webkit-keyframes backInUp {\n  0% {\n    -webkit-transform: translateY(1200px) scale(0.7);\n    transform: translateY(1200px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes backInUp {\n  0% {\n    -webkit-transform: translateY(1200px) scale(0.7);\n    transform: translateY(1200px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  80% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate__backInUp {\n  -webkit-animation-name: backInUp;\n  animation-name: backInUp;\n}\n/* Back exits */\n@-webkit-keyframes backOutDown {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px) scale(0.7);\n    transform: translateY(700px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n@keyframes backOutDown {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateY(700px) scale(0.7);\n    transform: translateY(700px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutDown {\n  -webkit-animation-name: backOutDown;\n  animation-name: backOutDown;\n}\n@-webkit-keyframes backOutLeft {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateX(-2000px) scale(0.7);\n    transform: translateX(-2000px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n@keyframes backOutLeft {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateX(-2000px) scale(0.7);\n    transform: translateX(-2000px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutLeft {\n  -webkit-animation-name: backOutLeft;\n  animation-name: backOutLeft;\n}\n@-webkit-keyframes backOutRight {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateX(2000px) scale(0.7);\n    transform: translateX(2000px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n@keyframes backOutRight {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateX(0px) scale(0.7);\n    transform: translateX(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateX(2000px) scale(0.7);\n    transform: translateX(2000px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutRight {\n  -webkit-animation-name: backOutRight;\n  animation-name: backOutRight;\n}\n@-webkit-keyframes backOutUp {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateY(-700px) scale(0.7);\n    transform: translateY(-700px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n@keyframes backOutUp {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  20% {\n    -webkit-transform: translateY(0px) scale(0.7);\n    transform: translateY(0px) scale(0.7);\n    opacity: 0.7;\n  }\n\n  100% {\n    -webkit-transform: translateY(-700px) scale(0.7);\n    transform: translateY(-700px) scale(0.7);\n    opacity: 0.7;\n  }\n}\n.animate__backOutUp {\n  -webkit-animation-name: backOutUp;\n  animation-name: backOutUp;\n}\n/* Bouncing entrances  */\n@-webkit-keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n.animate__bounceIn {\n  -webkit-animation-duration: calc(1s * 0.75);\n  animation-duration: calc(1s * 0.75);\n  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n@-webkit-keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);\n    transform: translate3d(0, -3000px, 0) scaleY(3);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);\n    transform: translate3d(0, 25px, 0) scaleY(0.9);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);\n    transform: translate3d(0, -10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);\n    transform: translate3d(0, 5px, 0) scaleY(0.985);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);\n    transform: translate3d(0, -3000px, 0) scaleY(3);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);\n    transform: translate3d(0, 25px, 0) scaleY(0.9);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);\n    transform: translate3d(0, -10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);\n    transform: translate3d(0, 5px, 0) scaleY(0.985);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n@-webkit-keyframes bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);\n    transform: translate3d(-3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);\n    transform: translate3d(25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);\n    transform: translate3d(-10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);\n    transform: translate3d(5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);\n    transform: translate3d(-3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);\n    transform: translate3d(25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);\n    transform: translate3d(-10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);\n    transform: translate3d(5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n@-webkit-keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);\n    transform: translate3d(3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);\n    transform: translate3d(-25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);\n    transform: translate3d(10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);\n    transform: translate3d(-5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);\n    transform: translate3d(3000px, 0, 0) scaleX(3);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);\n    transform: translate3d(-25px, 0, 0) scaleX(1);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);\n    transform: translate3d(10px, 0, 0) scaleX(0.98);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);\n    transform: translate3d(-5px, 0, 0) scaleX(0.995);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n@-webkit-keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);\n    transform: translate3d(0, 3000px, 0) scaleY(5);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);\n    transform: translate3d(0, 10px, 0) scaleY(0.95);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);\n    transform: translate3d(0, -5px, 0) scaleY(0.985);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n/* Bouncing exits  */\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n.animate__bounceOut {\n  -webkit-animation-duration: calc(1s * 0.75);\n  animation-duration: calc(1s * 0.75);\n  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n}\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);\n    transform: translate3d(0, 10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);\n    transform: translate3d(0, -20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);\n    transform: translate3d(0, 2000px, 0) scaleY(3);\n  }\n}\n.animate__bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);\n    transform: translate3d(20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);\n    transform: translate3d(-2000px, 0, 0) scaleX(2);\n  }\n}\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);\n    transform: translate3d(20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);\n    transform: translate3d(-2000px, 0, 0) scaleX(2);\n  }\n}\n.animate__bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);\n    transform: translate3d(-20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);\n    transform: translate3d(2000px, 0, 0) scaleX(2);\n  }\n}\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);\n    transform: translate3d(-20px, 0, 0) scaleX(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);\n    transform: translate3d(2000px, 0, 0) scaleX(2);\n  }\n}\n.animate__bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);\n    transform: translate3d(0, -10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);\n    transform: translate3d(0, 20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);\n    transform: translate3d(0, -2000px, 0) scaleY(3);\n  }\n}\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);\n    transform: translate3d(0, -10px, 0) scaleY(0.985);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);\n    transform: translate3d(0, 20px, 0) scaleY(0.9);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);\n    transform: translate3d(0, -2000px, 0) scaleY(3);\n  }\n}\n.animate__bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n/* Fading entrances  */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n.animate__fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n@-webkit-keyframes fadeInTopLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, -100%, 0);\n    transform: translate3d(-100%, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInTopLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, -100%, 0);\n    transform: translate3d(-100%, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInTopLeft {\n  -webkit-animation-name: fadeInTopLeft;\n  animation-name: fadeInTopLeft;\n}\n@-webkit-keyframes fadeInTopRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, -100%, 0);\n    transform: translate3d(100%, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInTopRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, -100%, 0);\n    transform: translate3d(100%, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInTopRight {\n  -webkit-animation-name: fadeInTopRight;\n  animation-name: fadeInTopRight;\n}\n@-webkit-keyframes fadeInBottomLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 100%, 0);\n    transform: translate3d(-100%, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInBottomLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 100%, 0);\n    transform: translate3d(-100%, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInBottomLeft {\n  -webkit-animation-name: fadeInBottomLeft;\n  animation-name: fadeInBottomLeft;\n}\n@-webkit-keyframes fadeInBottomRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 100%, 0);\n    transform: translate3d(100%, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fadeInBottomRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 100%, 0);\n    transform: translate3d(100%, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__fadeInBottomRight {\n  -webkit-animation-name: fadeInBottomRight;\n  animation-name: fadeInBottomRight;\n}\n/* Fading exits */\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n.animate__fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.animate__fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n.animate__fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.animate__fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n.animate__fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.animate__fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n.animate__fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.animate__fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n.animate__fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n@-webkit-keyframes fadeOutTopLeft {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, -100%, 0);\n    transform: translate3d(-100%, -100%, 0);\n  }\n}\n@keyframes fadeOutTopLeft {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, -100%, 0);\n    transform: translate3d(-100%, -100%, 0);\n  }\n}\n.animate__fadeOutTopLeft {\n  -webkit-animation-name: fadeOutTopLeft;\n  animation-name: fadeOutTopLeft;\n}\n@-webkit-keyframes fadeOutTopRight {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, -100%, 0);\n    transform: translate3d(100%, -100%, 0);\n  }\n}\n@keyframes fadeOutTopRight {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, -100%, 0);\n    transform: translate3d(100%, -100%, 0);\n  }\n}\n.animate__fadeOutTopRight {\n  -webkit-animation-name: fadeOutTopRight;\n  animation-name: fadeOutTopRight;\n}\n@-webkit-keyframes fadeOutBottomRight {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 100%, 0);\n    transform: translate3d(100%, 100%, 0);\n  }\n}\n@keyframes fadeOutBottomRight {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 100%, 0);\n    transform: translate3d(100%, 100%, 0);\n  }\n}\n.animate__fadeOutBottomRight {\n  -webkit-animation-name: fadeOutBottomRight;\n  animation-name: fadeOutBottomRight;\n}\n@-webkit-keyframes fadeOutBottomLeft {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 100%, 0);\n    transform: translate3d(-100%, 100%, 0);\n  }\n}\n@keyframes fadeOutBottomLeft {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 100%, 0);\n    transform: translate3d(-100%, 100%, 0);\n  }\n}\n.animate__fadeOutBottomLeft {\n  -webkit-animation-name: fadeOutBottomLeft;\n  animation-name: fadeOutBottomLeft;\n}\n/* Flippers */\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n.animate__animated.animate__flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n.animate__flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n.animate__flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n.animate__flipOutX {\n  -webkit-animation-duration: calc(1s * 0.75);\n  animation-duration: calc(1s * 0.75);\n  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n.animate__flipOutY {\n  -webkit-animation-duration: calc(1s * 0.75);\n  animation-duration: calc(1s * 0.75);\n  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);\n  animation-duration: calc(var(--animate-duration) * 0.75);\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n/* Lightspeed */\n@-webkit-keyframes lightSpeedInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes lightSpeedInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__lightSpeedInRight {\n  -webkit-animation-name: lightSpeedInRight;\n  animation-name: lightSpeedInRight;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n@-webkit-keyframes lightSpeedInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);\n    transform: translate3d(-100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(-20deg);\n    transform: skewX(-20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(5deg);\n    transform: skewX(5deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes lightSpeedInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);\n    transform: translate3d(-100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(-20deg);\n    transform: skewX(-20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(5deg);\n    transform: skewX(5deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__lightSpeedInLeft {\n  -webkit-animation-name: lightSpeedInLeft;\n  animation-name: lightSpeedInLeft;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n@-webkit-keyframes lightSpeedOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n@keyframes lightSpeedOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n.animate__lightSpeedOutRight {\n  -webkit-animation-name: lightSpeedOutRight;\n  animation-name: lightSpeedOutRight;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n@-webkit-keyframes lightSpeedOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);\n    transform: translate3d(-100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n}\n@keyframes lightSpeedOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);\n    transform: translate3d(-100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n}\n.animate__lightSpeedOutLeft {\n  -webkit-animation-name: lightSpeedOutLeft;\n  animation-name: lightSpeedOutLeft;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n/* Rotating entrances */\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes rotateIn {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n  -webkit-transform-origin: left bottom;\n  transform-origin: left bottom;\n}\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n  -webkit-transform-origin: right bottom;\n  transform-origin: right bottom;\n}\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n  -webkit-transform-origin: left bottom;\n  transform-origin: left bottom;\n}\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.animate__rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n  -webkit-transform-origin: right bottom;\n  transform-origin: right bottom;\n}\n/* Rotating exits */\n@-webkit-keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutDownLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n  -webkit-transform-origin: left bottom;\n  transform-origin: left bottom;\n}\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutDownRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n  -webkit-transform-origin: right bottom;\n  transform-origin: right bottom;\n}\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutUpLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n  -webkit-transform-origin: left bottom;\n  transform-origin: left bottom;\n}\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n@keyframes rotateOutUpRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n.animate__rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n  -webkit-transform-origin: right bottom;\n  transform-origin: right bottom;\n}\n/* Specials */\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n@keyframes hinge {\n  0% {\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n.animate__hinge {\n  -webkit-animation-duration: calc(1s * 2);\n  animation-duration: calc(1s * 2);\n  -webkit-animation-duration: calc(var(--animate-duration) * 2);\n  animation-duration: calc(var(--animate-duration) * 2);\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n  -webkit-transform-origin: top left;\n  transform-origin: top left;\n}\n@-webkit-keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.animate__jackInTheBox {\n  -webkit-animation-name: jackInTheBox;\n  animation-name: jackInTheBox;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n.animate__rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n/* Zooming entrances */\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n.animate__zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n/* Zooming exits */\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n.animate__zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n  }\n}\n.animate__zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n  -webkit-transform-origin: left center;\n  transform-origin: left center;\n}\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n  }\n}\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n  }\n}\n.animate__zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n  -webkit-transform-origin: right center;\n  transform-origin: right center;\n}\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n.animate__zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n/* Sliding entrances */\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate__slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n/* Sliding exits */\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n.animate__slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n.animate__slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n.animate__slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n.animate__slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS resets */
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
    box-sizing: border-box;
}

/*
  2. Remove default margin
*/
* {
    margin: 0;
}

/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

/*
  6. Remove built-in form typography styles
*/
input,
button,
textarea,
select {
    font: inherit;
}

/*
  7. Avoid text overflows
*/
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

/* font styles and weights */
.poppins-light {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
}

.poppins-regular {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.poppins-medium {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
}

.poppins-semibold {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
}

.poppins-bold {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.poppins-extrabold {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    font-style: normal;
}

.poppins-black {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-style: normal;
}

/* Modal style */
.modal {
    padding: 4px;
    min-height: 100px;
    width: 50%;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 8px;
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.add-task > * {
    margin-bottom: 4px;
}

button {
    cursor: pointer;
    border: none;
    font-weight: 600;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    z-index: 1;
    filter: blur(3px);
}

textarea {
    resize: none;
    height: 88px;
}

input[type="text"],
textarea {
    width: 100%;
    border: 0;
    outline: 0;
    padding: 4px 0;
    font-size: 1.2rem;
}

select {
    height: 29px;
}

.modal-footer {
    border-top: 2px solid #aaa;
    display: flex;
    gap: 0.5rem;
    justify-content: end;
}

.modal-footer > * {
    margin-top: 4px;
    border-radius: 4px;
}

.hidden {
    display: none;
}

.btn-open {
    background-color: inherit;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background-color: #36494e;
    color: #fff;
    padding: 4px 20px;
    font-size: 0.8rem;
    border-radius: 4px;
    margin: 8px auto;
}

#main-display {
    margin: 8px auto;
    width: 80%;
    padding: 4px;
}

.task-container {
    display: flex;
    gap: 4px;
    padding: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    margin-bottom: 8px;
    border-radius: 4px;
}

.task-description {
    color: #555;
    font-size: 0.8rem;
    white-space: pre-wrap;
}

.done-status {
    width: 16px;
    height: 16px;
}

.container {
    display: flex;
}

.side-bar {
    height: 100vh;
    overflow-y: auto;
    background-color: #f1dede;
    flex: 1;
}

.display {
    flex: 4;
    height: 100vh;
    overflow-y: scroll;
}

.default-projects-list {
    margin-top: 16px;
}

.default-projects > *,
.user-projects > * {
    padding: 4px 16px;
}

.default-projects > *:hover,
.user-projects > *:hover {
    cursor: pointer;
    background-color: #e1cece;
}

.project-subtitle {
    margin: 4px 8px;
}

.add-project-btn {
    margin: 8px auto;
    display: block;
    width: 90%;
}

.selected {
    background-color: #e1cece;
}

/* .selected:hover {
    background-color: #fff;
} */

.due {
    font-size: 0.8rem;
    color: #aa0000;
}

.edit-task,
.delete-task {
    align-self: baseline;
    cursor: pointer;
    margin: 0 4px;
    border: 1px solid #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 2px;
    border-radius: 4px;
}

.edit-task:hover {
    border: 1px solid #0000ff;
}

.delete-task:hover {
    border: 1px solid #ff0000;
}

.edit-task {
    margin-left: auto;
}

.project-title {
    text-align: center;
    margin: 8px 0;
}

#new-title {
    padding: 4px;
}

.custom-project {
    display: flex;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS resets */\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/*\r\n  2. Remove default margin\r\n*/\r\n* {\r\n    margin: 0;\r\n}\r\n\r\n/*\r\n  Typographic tweaks!\r\n  3. Add accessible line-height\r\n  4. Improve text rendering\r\n*/\r\nbody {\r\n    line-height: 1.5;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n/*\r\n  6. Remove built-in form typography styles\r\n*/\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n}\r\n\r\n/*\r\n  7. Avoid text overflows\r\n*/\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n/* font styles and weights */\r\n.poppins-light {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n}\r\n\r\n.poppins-regular {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n.poppins-medium {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 500;\r\n    font-style: normal;\r\n}\r\n\r\n.poppins-semibold {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n.poppins-bold {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 700;\r\n    font-style: normal;\r\n}\r\n\r\n.poppins-extrabold {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 800;\r\n    font-style: normal;\r\n}\r\n\r\n.poppins-black {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: 900;\r\n    font-style: normal;\r\n}\r\n\r\n/* Modal style */\r\n.modal {\r\n    padding: 4px;\r\n    min-height: 100px;\r\n    width: 50%;\r\n    background-color: #fff;\r\n    border: 1px solid #aaa;\r\n    border-radius: 8px;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    z-index: 2;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n\r\n.add-task > * {\r\n    margin-bottom: 4px;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n    font-weight: 600;\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #000;\r\n    opacity: 0.5;\r\n    z-index: 1;\r\n    filter: blur(3px);\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n    height: 88px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n    width: 100%;\r\n    border: 0;\r\n    outline: 0;\r\n    padding: 4px 0;\r\n    font-size: 1.2rem;\r\n}\r\n\r\nselect {\r\n    height: 29px;\r\n}\r\n\r\n.modal-footer {\r\n    border-top: 2px solid #aaa;\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    justify-content: end;\r\n}\r\n\r\n.modal-footer > * {\r\n    margin-top: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.btn-open {\r\n    background-color: inherit;\r\n    margin: 4px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 4px;\r\n    background-color: #36494e;\r\n    color: #fff;\r\n    padding: 4px 20px;\r\n    font-size: 0.8rem;\r\n    border-radius: 4px;\r\n    margin: 8px auto;\r\n}\r\n\r\n#main-display {\r\n    margin: 8px auto;\r\n    width: 80%;\r\n    padding: 4px;\r\n}\r\n\r\n.task-container {\r\n    display: flex;\r\n    gap: 4px;\r\n    padding: 8px;\r\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,\r\n        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\r\n    margin-bottom: 8px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.task-description {\r\n    color: #555;\r\n    font-size: 0.8rem;\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.done-status {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n}\r\n\r\n.side-bar {\r\n    height: 100vh;\r\n    overflow-y: auto;\r\n    background-color: #f1dede;\r\n    flex: 1;\r\n}\r\n\r\n.display {\r\n    flex: 4;\r\n    height: 100vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.default-projects-list {\r\n    margin-top: 16px;\r\n}\r\n\r\n.default-projects > *,\r\n.user-projects > * {\r\n    padding: 4px 16px;\r\n}\r\n\r\n.default-projects > *:hover,\r\n.user-projects > *:hover {\r\n    cursor: pointer;\r\n    background-color: #e1cece;\r\n}\r\n\r\n.project-subtitle {\r\n    margin: 4px 8px;\r\n}\r\n\r\n.add-project-btn {\r\n    margin: 8px auto;\r\n    display: block;\r\n    width: 90%;\r\n}\r\n\r\n.selected {\r\n    background-color: #e1cece;\r\n}\r\n\r\n/* .selected:hover {\r\n    background-color: #fff;\r\n} */\r\n\r\n.due {\r\n    font-size: 0.8rem;\r\n    color: #aa0000;\r\n}\r\n\r\n.edit-task,\r\n.delete-task {\r\n    align-self: baseline;\r\n    cursor: pointer;\r\n    margin: 0 4px;\r\n    border: 1px solid #fff;\r\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,\r\n        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\r\n    padding: 2px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.edit-task:hover {\r\n    border: 1px solid #0000ff;\r\n}\r\n\r\n.delete-task:hover {\r\n    border: 1px solid #ff0000;\r\n}\r\n\r\n.edit-task {\r\n    margin-left: auto;\r\n}\r\n\r\n.project-title {\r\n    text-align: center;\r\n    margin: 8px 0;\r\n}\r\n\r\n#new-title {\r\n    padding: 4px;\r\n}\r\n\r\n.custom-project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./animate.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/animate.css/animate.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_animate_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UIController.js":
/*!*****************************!*\
  !*** ./src/UIController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UIController)
/* harmony export */ });
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");
/* harmony import */ var _modalFunctionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalFunctionality */ "./src/modalFunctionality.js");
/* harmony import */ var _todayListUpdater__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todayListUpdater */ "./src/todayListUpdater.js");
/* harmony import */ var _taskRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskRenderer */ "./src/taskRenderer.js");
/* harmony import */ var _assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/check.svg */ "./src/assets/icons/check.svg");
/* harmony import */ var _assets_icons_x_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/x.svg */ "./src/assets/icons/x.svg");
/* harmony import */ var _assets_icons_xBlack_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/xBlack.svg */ "./src/assets/icons/xBlack.svg");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taskForm */ "./src/taskForm.js");










const addBtn = document.querySelector("#add");
const form = (0,_taskForm__WEBPACK_IMPORTED_MODULE_8__.createTaskForm)("Add Task");
const editForm = (0,_taskForm__WEBPACK_IMPORTED_MODULE_8__.createTaskForm)("Save Task");
const mainDisplay = document.querySelector("#main-display");
const defaultProjectsList = document.querySelector(".default-projects");
const userProjectsList = document.querySelector(".user-projects");
const projectTitleElement = document.querySelector(".project-title");
const addProjectBtn = document.querySelector(".add-project-btn");
const sidebar = document.querySelector(".side-bar");

function UIController() {
    const [title, description, dueDate, priority] = form.elements;
    const [editTitle, editDescription, editDueDate, editPriority] =
        editForm.elements;
    const allTasks = (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjectByName)("All");
    const todayTasks = (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjectByName)("Today");
    const defaultProjects = [allTasks, todayTasks];
    let userProjects = (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjects)().slice(2);
    let selectedProject = allTasks;

    const handleSubmit = function (event) {
        event.preventDefault();

        if (event.target.classList.contains("save-task")) {
            const id = event.target.dataset.taskId;

            allTasks.editTask(
                id,
                editTitle.value,
                editDescription.value,
                editDueDate.value,
                editPriority.value
            );

            selectedProject.editTask(
                id,
                editTitle.value,
                editDescription.value,
                editDueDate.value,
                editPriority.value
            );

            userProjects.forEach((project) => {
                project.editTask(
                    id,
                    editTitle.value,
                    editDescription.value,
                    editDueDate.value,
                    editPriority.value
                );
            });
        } else {
            allTasks.addTask(
                title.value,
                description.value,
                dueDate.value,
                priority.value
            );

            const lastEleId =
                allTasks.getTasks()[allTasks.getTasks().length - 1].id;

            if (
                selectedProject !== todayTasks &&
                selectedProject !== allTasks
            ) {
                selectedProject.addTask(
                    title.value,
                    description.value,
                    dueDate.value,
                    priority.value,
                    false,
                    lastEleId
                );
            }
        }

        (0,_todayListUpdater__WEBPACK_IMPORTED_MODULE_3__.updateTodayList)(todayTasks, allTasks);

        (0,_modalFunctionality__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
        form.reset();
        updateScreen();
    };

    const displayTasks = function () {
        mainDisplay.textContent = "";

        selectedProject.getTasks().forEach((task) => {
            const taskBox = (0,_taskRenderer__WEBPACK_IMPORTED_MODULE_4__.taskRenderer)(task);

            mainDisplay.appendChild(taskBox);
        });
    };

    const displayDefaultProjects = function () {
        defaultProjectsList.textContent = "";

        defaultProjects.forEach((project) => {
            const container = document.createElement("div");
            container.textContent = project.name;
            container.setAttribute("data-project-id", `${project.id}`);
            container.classList.add("project", "poppins-semibold");

            defaultProjectsList.appendChild(container);
        });
    };

    const displayUserProjects = function () {
        userProjectsList.textContent = "";

        userProjects.forEach((project) => {
            const container = document.createElement("div");
            const removeBtn = document.createElement("img");
            removeBtn.src = _assets_icons_xBlack_svg__WEBPACK_IMPORTED_MODULE_7__;
            removeBtn.classList.add("remove-project");
            container.textContent = project.name;
            container.append(removeBtn);
            container.setAttribute("data-project-id", `${project.id}`);
            container.classList.add("custom-project", "poppins-semibold");

            userProjectsList.appendChild(container);
        });
    };

    const handleSidebarClick = (event) => {
        if (
            event.target.classList.contains("custom-project") ||
            event.target.classList.contains("project")
        ) {
            selectedProject = (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjectById)(event.target.dataset.projectId);
        }

        if (event.target.classList.contains("remove-project")) {
            const id = event.target.parentNode.dataset.projectId;

            (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjectById)(id)
                .getTasks()
                .forEach((item) => {
                    allTasks.deleteTask(item.id);
                });

            (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.removeProject)(id);
            userProjects = (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjects)().slice(2);
            selectedProject = allTasks;
        }

        updateScreen();
    };

    const mainDisplayClick = (event) => {
        if (event.target.classList.contains("delete-task")) {
            const taskId = event.target.parentNode.dataset.taskId;
            selectedProject.deleteTask(taskId);
            allTasks.deleteTask(taskId);

            (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjects)()
                .slice(2)
                .forEach((item) => item.deleteTask(taskId));

            updateScreen();
        }

        if (event.target.classList.contains("edit-task")) {
            const taskId = event.target.parentNode.dataset.taskId;
            const taskObj = selectedProject.getTask(taskId);

            editForm.dataset.taskId = taskId;

            editTitle.value = taskObj.title;
            editDescription.value = taskObj.desc;
            editPriority.value = taskObj.priority;

            if (taskObj.dueDate)
                editDueDate.value = taskObj.dueDate.toLocaleDateString("en-CA");

            (0,_modalFunctionality__WEBPACK_IMPORTED_MODULE_2__.openModal)(editForm);
            editTitle.focus();
        }

        if (event.target.classList.contains("done-status")) {
            const taskId = event.target.parentNode.parentNode.dataset.taskId;
            const todayTaskObj = todayTasks.getTask(taskId);

            allTasks.getTask(taskId).done = event.target.checked;
            if (todayTaskObj) todayTaskObj.done = event.target.checked;
            userProjects.forEach((project) => {
                const taskObj = project.getTask(taskId);
                if (taskObj) taskObj.done = event.target.checked;
            });

            updateScreen();
        }
    };

    const handleAddProject = function () {
        const divContainer = document.createElement("div");
        const inputTitle = document.createElement("input");
        const confirmBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");
        divContainer.setAttribute("class", "add-project-form");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("name", "new-title");
        inputTitle.setAttribute("autocomplete", "off");
        inputTitle.setAttribute("id", "new-title");
        confirmBtn.innerHTML = `<img src="${_assets_icons_check_svg__WEBPACK_IMPORTED_MODULE_5__}" alt="confirm">`;
        cancelBtn.innerHTML = `<img src="${_assets_icons_x_svg__WEBPACK_IMPORTED_MODULE_6__}" alt="cancel">`;
        divContainer.appendChild(inputTitle);
        divContainer.appendChild(confirmBtn);
        divContainer.appendChild(cancelBtn);

        document.querySelectorAll(".add-project-form").forEach((ele) => {
            ele.remove();
        });

        addProjectBtn.insertAdjacentElement("beforebegin", divContainer);

        inputTitle.focus();

        confirmBtn.addEventListener("click", () => {
            if (inputTitle.value.length > 0) {
                (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.createProject)("#" + inputTitle.value);
                divContainer.classList.add("hidden");
                userProjects = (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjects)().slice(2);
                displayUserProjects();
            }
        });

        cancelBtn.addEventListener("click", () => {
            divContainer.classList.add("hidden");
        });

        userProjects = (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.getProjects)().slice(2);
        updateScreen();
    };

    const handleFormClick = function (event) {
        if (event.target.classList.value === "btn-close") {
            form.reset();
            (0,_modalFunctionality__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
        }
    };

    const updateScreen = function () {
        projectTitleElement.textContent = selectedProject.name;
        displayTasks();
        displayDefaultProjects();
        displayUserProjects();
        (0,_todayListUpdater__WEBPACK_IMPORTED_MODULE_3__.updateTodayList)(todayTasks, allTasks);
        (0,_projectController__WEBPACK_IMPORTED_MODULE_1__.saveProjects)();

        defaultProjectsList.childNodes.forEach((node) => {
            if (node.dataset.projectId === selectedProject.id)
                node.classList.add("selected");
            else node.classList.remove("selected");
        });

        userProjectsList.childNodes.forEach((node) => {
            if (node.dataset.projectId === selectedProject.id)
                node.classList.add("selected");
            else node.classList.remove("selected");
        });

        mainDisplay.classList.toggle(
            "hidden",
            selectedProject.getTasks().length === 0
        );
    };

    addBtn.addEventListener("click", () => {
        (0,_modalFunctionality__WEBPACK_IMPORTED_MODULE_2__.openModal)(form);
        title.focus();
    });
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("click", handleFormClick);
    editForm.addEventListener("click", handleFormClick);
    editForm.addEventListener("submit", handleSubmit);
    sidebar.addEventListener("click", handleSidebarClick);
    mainDisplay.addEventListener("click", mainDisplayClick);
    addProjectBtn.addEventListener("click", handleAddProject);

    // Initial screen update
    updateScreen();
}


/***/ }),

/***/ "./src/domUtil.js":
/*!************************!*\
  !*** ./src/domUtil.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
const createElement = function (tag, attributes = {}, textContent = "") {
    const element = document.createElement(tag);

    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    if (textContent) element.textContent = textContent;

    return element;
};


/***/ }),

/***/ "./src/modalFunctionality.js":
/*!***********************************!*\
  !*** ./src/modalFunctionality.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");

const openModal = function (modalContent) {
    modal.textContent = "";
    modal.appendChild(modalContent);
    modal.classList.remove("hidden", "animate__zoomOut");
    modal.classList.add("animate__zoomIn");
    modalOverlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.remove("animate__zoomIn");
    modal.classList.add("animate__zoomOut");
    modalOverlay.classList.add("hidden");

    modal.addEventListener("animationend", function handler() {
        modal.classList.add("hidden");

        modal.removeEventListener("animationend", handler);
    });
};


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");



function project(id, name) {
    const tasks = [];

    function addTask(title, desc, dueDate, priority, done, id) {
        if (!id) id = (0,nanoid__WEBPACK_IMPORTED_MODULE_1__.nanoid)();

        let parsedDueDate = new Date(dueDate);
        if (isNaN(parsedDueDate.valueOf())) parsedDueDate = "";

        const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(id, title, desc, parsedDueDate, priority, done);
        tasks.push(newTask);
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        tasks.splice(0, tasks.length, ...updatedTasks);
    }

    function printTasks() {
        tasks.forEach((task) => {
            console.log(task);
        });
    }

    function clearTasks() {
        tasks.splice(0);
    }

    function getTask(id) {
        return tasks.find((task) => task.id === id);
    }

    function getTasks() {
        return tasks;
    }

    function editTask(id, title, desc, dueDate, priority) {
        const taskObj = getTask(id);
        if (!taskObj) return;

        let parsedDueDate = new Date(dueDate);
        if (isNaN(parsedDueDate.valueOf())) parsedDueDate = "";

        taskObj.title = title;
        taskObj.desc = desc;
        taskObj.dueDate = parsedDueDate;
        taskObj.priority = priority;
    }

    return {
        id,
        name,
        addTask,
        deleteTask,
        printTasks,
        getTask,
        getTasks,
        editTask,
        clearTasks,
    };
}


/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   editProjectName: () => (/* binding */ editProjectName),
/* harmony export */   getProjectById: () => (/* binding */ getProjectById),
/* harmony export */   getProjectByName: () => (/* binding */ getProjectByName),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   printProjects: () => (/* binding */ printProjects),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




const storage = (0,_storage__WEBPACK_IMPORTED_MODULE_1__["default"])();
let projects = [];

const getProjects = () => projects;

const loadProjects = () => {
    const storedProjects = storage.getItem("projects");

    if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        projects = parsedProjects.map((item) => {
            const proj = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(item.id, item.name);
            item.tasks.forEach((task) =>
                proj.addTask(
                    task.title,
                    task.desc,
                    task.dueDate,
                    task.priority,
                    task.done,
                    task.id
                )
            );
            return proj;
        });
    }
};

loadProjects();

const saveProjects = () => {
    const serializeProjects = projects.map((item) => ({
        id: item.id,
        name: item.name,
        tasks: item.getTasks().map((task) => ({
            id: task.id,
            title: task.title,
            desc: task.desc,
            dueDate: task.dueDate,
            priority: task.priority,
            done: task.done,
        })),
    }));
    storage.storeItem("projects", JSON.stringify(serializeProjects));
};

const getProjectById = (id) => {
    const found = projects.find((project) => project.id === id);
    return found;
};

const getProjectByName = (name) => {
    const found = projects.find((project) => project.name === name);
    return found;
};

const createProject = (name) => {
    const id = (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(id, name);
    projects = [...projects, newProject];
};

const removeProject = (id) => {
    projects = projects.filter((project) => project.id !== id);
};

const printProjects = () => {
    projects.forEach((project) => {
        console.log(project);
    });
};

const editProjectName = (id, newName) => {
    projects = projects.map((project) => {
        project.id === id ? { ...project, name: newName } : project;
    });
};


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ store)
/* harmony export */ });
function store() {
    const storeItem = (key, value) => localStorage.setItem(key, value);
    const getItem = (key) => localStorage.getItem(key);

    return { storeItem, getItem };
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
function task(
    id,
    title,
    desc = "",
    dueDate = null,
    priority = "p1",
    done = false
) {
    const newTask = {
        id,
        title,
        desc,
        dueDate,
        priority,
        done,
    };

    return newTask;
}


/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm)
/* harmony export */ });
/* harmony import */ var _domUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtil */ "./src/domUtil.js");
/* harmony import */ var _taskFormFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFormFooter */ "./src/taskFormFooter.js");



const createTaskForm = function (btnText) {
    const form = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
        action: "",
        class: btnText.split(" ").join("-").toLowerCase(),
    });

    const titleContainer = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    const titleInput = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "text",
        name: "title",
        id: "title",
        placeholder: "Title",
        class: "poppins-bold",
        required: "true",
    });
    titleContainer.appendChild(titleInput);

    const descriptionContainer = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    const descriptionInput = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
        name: "description",
        id: "description",
        placeholder: "Description",
    });
    descriptionContainer.appendChild(descriptionInput);

    const otherContainer = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
    const datePicker = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "date",
        name: "dueDate",
        id: "dueDate",
    });
    const selectPriority = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
        name: "priority",
        id: "priority",
    });

    const priorities = ["Priority1", "Priority2", "Priority3", "Priority4"];
    priorities.forEach((priority, index) => {
        const option = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "option",
            { value: `p${index + 1}` },
            priority
        );
        selectPriority.appendChild(option);
    });

    const formFooter = (0,_taskFormFooter__WEBPACK_IMPORTED_MODULE_1__.createFormFooter)(btnText);

    otherContainer.appendChild(datePicker);
    otherContainer.appendChild(selectPriority);
    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(otherContainer);
    form.appendChild(formFooter);

    return form;
};


/***/ }),

/***/ "./src/taskFormFooter.js":
/*!*******************************!*\
  !*** ./src/taskFormFooter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFormFooter: () => (/* binding */ createFormFooter)
/* harmony export */ });
/* harmony import */ var _domUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtil */ "./src/domUtil.js");


const createFormFooter = function (btnText) {
    const formFooter = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "modal-footer" });
    const cancelBtn = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "button",
        { type: "button", class: "btn-close" },
        "Cancel"
    );
    const mainBtn = (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.createElement)(
        "button",
        { type: "submit", class: btnText.split(" ").join("-").toLowerCase() },
        btnText
    );
    formFooter.appendChild(cancelBtn);
    formFooter.appendChild(mainBtn);

    return formFooter;
};


/***/ }),

/***/ "./src/taskRenderer.js":
/*!*****************************!*\
  !*** ./src/taskRenderer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskRenderer: () => (/* binding */ taskRenderer)
/* harmony export */ });
/* harmony import */ var _assets_icons_trash_2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/icons/trash-2.svg */ "./src/assets/icons/trash-2.svg");
/* harmony import */ var _assets_icons_edit_3_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/edit-3.svg */ "./src/assets/icons/edit-3.svg");



const taskRenderer = function (obj) {
    const taskBox = document.createElement("div");
    const titleElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    const dueDateElement = document.createElement("p");
    const contentContainer = document.createElement("div");
    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("img");
    const editBtn = document.createElement("img");

    taskBox.classList.add("task-container");
    taskBox.setAttribute("data-task-id", `${obj.id}`);

    titleElement.textContent = obj.title;
    deleteBtn.src = _assets_icons_trash_2_svg__WEBPACK_IMPORTED_MODULE_0__;
    deleteBtn.setAttribute("alt", "delete");
    editBtn.src = _assets_icons_edit_3_svg__WEBPACK_IMPORTED_MODULE_1__;
    editBtn.setAttribute("alt", "edit");
    titleElement.classList.add("task-title");
    descriptionElement.textContent = obj.desc;
    descriptionElement.classList.add("task-description");

    if (obj.dueDate)
        dueDateElement.innerHTML = `Due: ${obj.dueDate.toLocaleDateString(
            "en-GB"
        )}`;
    dueDateElement.classList.add("due");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = obj.done;
    checkbox.classList.add("done-status");
    deleteBtn.classList.add("delete-task");
    editBtn.classList.add("edit-task");

    checkboxContainer.appendChild(checkbox);
    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(descriptionElement);
    contentContainer.appendChild(dueDateElement);
    taskBox.appendChild(checkboxContainer);
    taskBox.appendChild(contentContainer);
    taskBox.appendChild(editBtn);
    taskBox.appendChild(deleteBtn);

    return taskBox;
};


/***/ }),

/***/ "./src/todayListUpdater.js":
/*!*********************************!*\
  !*** ./src/todayListUpdater.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTodayList: () => (/* binding */ updateTodayList)
/* harmony export */ });
const updateTodayList = (todayTasks, allTasks) => {
    const today = new Date();
    todayTasks.clearTasks();
    allTasks.getTasks().forEach((task) => {
        if (
            task.dueDate &&
            task.dueDate.toDateString() === today.toDateString()
        ) {
            todayTasks.addTask(
                task.title,
                task.desc,
                task.dueDate,
                task.priority,
                task.done,
                task.id
            );
        }
    });
};


/***/ }),

/***/ "./src/assets/icons/check.svg":
/*!************************************!*\
  !*** ./src/assets/icons/check.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbf71ea16c43c383e254.svg";

/***/ }),

/***/ "./src/assets/icons/edit-3.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/edit-3.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad1fe89181968053f37b.svg";

/***/ }),

/***/ "./src/assets/icons/trash-2.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/trash-2.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "777af79483b27065d953.svg";

/***/ }),

/***/ "./src/assets/icons/x.svg":
/*!********************************!*\
  !*** ./src/assets/icons/x.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b22135b1fb24435ebc9.svg";

/***/ }),

/***/ "./src/assets/icons/xBlack.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/xBlack.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ef71da1fa77143a44d0.svg";

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),
/* harmony export */   customRandom: () => (/* binding */ customRandom),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet[bytes[size] & 63]
  }
  return id
}


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIController */ "./src/UIController.js");
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");




if (!(0,_projectController__WEBPACK_IMPORTED_MODULE_2__.getProjectByName)("All")) {
    (0,_projectController__WEBPACK_IMPORTED_MODULE_2__.createProject)("All");
    (0,_projectController__WEBPACK_IMPORTED_MODULE_2__.createProject)("Today");
}

(0,_UIController__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RjtBQUNqQjtBQUM1RSw4QkFBOEIsc0VBQTJCLENBQUMsK0VBQXFDO0FBQy9GO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHdIQUF3SCxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxPQUFPLFVBQVUsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxZQUFZLGFBQWEsT0FBTyxTQUFTLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLE1BQU0sWUFBWSxhQUFhLE9BQU8sU0FBUyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE9BQU8sU0FBUyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksYUFBYSxPQUFPLFNBQVMsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFNBQVMsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssU0FBUyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFNBQVMsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssU0FBUyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFNBQVMsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssU0FBUyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFNBQVMsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssU0FBUyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE9B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRkFBcUYsTUFBTSxLQUFLLE9BQU8sWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLEtBQUssUUFBUSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSx1SUFBdUksK0JBQStCLEtBQUsscURB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDNEI7QUFDdEU7QUFDQSxLQUFLLG9FQUFnQjtBQUNyQixJQUFJLGlFQUFhO0FBQ2pCLElBQUksaUVBQWE7QUFDakI7QUFDQTtBQUNBLHlEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLmNzcz82M2FmIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbVV0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2RhbEZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza0Zvcm1Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RheUxpc3RVcGRhdGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBhbmltYXRlLmNzcyAtIGh0dHBzOi8vYW5pbWF0ZS5zdHlsZS9cbiAqIFZlcnNpb24gLSA0LjEuMVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyMCBBbmltYXRlLmNzc1xuICovXG46cm9vdCB7XG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogMXM7XG4gIC0tYW5pbWF0ZS1kZWxheTogMXM7XG4gIC0tYW5pbWF0ZS1yZXBlYXQ6IDE7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1hbmltYXRlLWR1cmF0aW9uKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1hbmltYXRlLWR1cmF0aW9uKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2luZmluaXRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fcmVwZWF0LTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tYW5pbWF0ZS1yZXBlYXQpO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1hbmltYXRlLXJlcGVhdCk7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fcmVwZWF0LTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGNhbGMoMSAqIDIpO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKDEgKiAyKTtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSAqIDIpO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSAqIDIpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3JlcGVhdC0zIHtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKDEgKiAzKTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYygxICogMyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkgKiAzKTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkgKiAzKTtcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19kZWxheS0xcyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IHZhcigtLWFuaW1hdGUtZGVsYXkpO1xuICBhbmltYXRpb24tZGVsYXk6IHZhcigtLWFuaW1hdGUtZGVsYXkpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTJzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiAyKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogMik7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogMik7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDIpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTNzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiAzKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogMyk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogMyk7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDMpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTRzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiA0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogNCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDQpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTVzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiA1KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKDFzICogNSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpICogNSk7XG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDUpO1xufVxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2Zhc3RlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzIC8gMik7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAvIDIpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAvIDIpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgLyAyKTtcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mYXN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjgpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuOCk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuOCk7XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fc2xvdyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMik7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDIpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDIpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAyKTtcbn1cbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19zbG93ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDMpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAzKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAzKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMyk7XG59XG5AbWVkaWEgcHJpbnQsIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmFuaW1hdGVfX2FuaW1hdGVkIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hbmltYXRlX19hbmltYXRlZFtjbGFzcyo9J091dCddIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4vKiBBdHRlbnRpb24gc2Vla2VycyAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xuICBmcm9tLFxuICAyMCUsXG4gIDUzJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICA0MCUsXG4gIDQzJSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApIHNjYWxlWSgxLjEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApIHNjYWxlWSgxLjEpO1xuICB9XG5cbiAgNzAlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCkgc2NhbGVZKDEuMDUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApIHNjYWxlWSgxLjA1KTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZVkoMC45NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKSBzY2FsZVkoMS4wMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKSBzY2FsZVkoMS4wMik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgZnJvbSxcbiAgMjAlLFxuICA1MyUsXG4gIHRvIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgNDAlLFxuICA0MyUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKSBzY2FsZVkoMS4xKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKSBzY2FsZVkoMS4xKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApIHNjYWxlWSgxLjA1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKSBzY2FsZVkoMS4wNSk7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGVZKDAuOTUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGVZKDAuOTUpO1xuICB9XG5cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCkgc2NhbGVZKDEuMDIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCkgc2NhbGVZKDEuMDIpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2gge1xuICBmcm9tLFxuICA1MCUsXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjUlLFxuICA3NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxhc2gge1xuICBmcm9tLFxuICA1MCUsXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjUlLFxuICA3NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19mbGFzaCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsYXNoO1xuICBhbmltYXRpb24tbmFtZTogZmxhc2g7XG59XG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuLmFuaW1hdGVfX3B1bHNlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcHVsc2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcnViYmVyQmFuZCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcbiAgfVxuXG4gIDY1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cblxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gIH1cblxuICA2NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuLmFuaW1hdGVfX3J1YmJlckJhbmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xuICBhbmltYXRpb24tbmFtZTogcnViYmVyQmFuZDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZVgge1xuICBmcm9tLFxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAxMCUsXG4gIDMwJSxcbiAgNTAlLFxuICA3MCUsXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgfVxuXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hha2VYIHtcbiAgZnJvbSxcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMTAlLFxuICAzMCUsXG4gIDUwJSxcbiAgNzAlLFxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cblxuICAyMCUsXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2hha2VYIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2VYO1xuICBhbmltYXRpb24tbmFtZTogc2hha2VYO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlWSB7XG4gIGZyb20sXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIDEwJSxcbiAgMzAlLFxuICA1MCUsXG4gIDcwJSxcbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xuICB9XG5cbiAgMjAlLFxuICA0MCUsXG4gIDYwJSxcbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGFrZVkge1xuICBmcm9tLFxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAxMCUsXG4gIDMwJSxcbiAgNTAlLFxuICA3MCUsXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgfVxuXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19zaGFrZVkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzaGFrZVk7XG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZVk7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgaGVhZFNoYWtlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuXG4gIDYuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcbiAgfVxuXG4gIDE4LjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcbiAgfVxuXG4gIDMxLjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG4gIH1cblxuICA0My41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFkU2hha2Uge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgNi41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO1xuICB9XG5cbiAgMTguNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xuICB9XG5cbiAgMzEuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcbiAgfVxuXG4gIDQzLjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4uYW5pbWF0ZV9faGVhZFNoYWtlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZyB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZyB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcbiAgfVxufVxuLmFuaW1hdGVfX3N3aW5nIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzd2luZztcbiAgYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHRhZGEge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cblxuICAxMCUsXG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gIH1cblxuICAzMCUsXG4gIDUwJSxcbiAgNzAlLFxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgfVxuXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyB0YWRhIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG5cbiAgMTAlLFxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSxcbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gIH1cblxuICA0MCUsXG4gIDYwJSxcbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX190YWRhIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdGFkYTtcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XG59XG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB3b2JibGUge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIDE1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xuICB9XG5cbiAgNDUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHdvYmJsZSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICB9XG5cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gIH1cblxuICA0NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTFkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX193b2JibGUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XG4gIGFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgamVsbG8ge1xuICBmcm9tLFxuICAxMS4xJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgMjIuMiUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcbiAgfVxuXG4gIDMzLjMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcbiAgfVxuXG4gIDQ0LjQlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xuICB9XG5cbiAgNTUuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XG4gIH1cblxuICA2Ni42JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xuICB9XG5cbiAgNzcuNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKTtcbiAgfVxuXG4gIDg4LjglIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBqZWxsbyB7XG4gIGZyb20sXG4gIDExLjElLFxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAyMi4yJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xuICB9XG5cbiAgMzMuMyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xuICB9XG5cbiAgNDQuNCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gIH1cblxuICA1NS41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcbiAgfVxuXG4gIDY2LjYlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XG4gIH1cblxuICA3Ny43JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xuICB9XG5cbiAgODguOCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xuICB9XG59XG4uYW5pbWF0ZV9famVsbG8ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBqZWxsbztcbiAgYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0QmVhdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDE0JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB9XG5cbiAgMjglIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDQyJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICB9XG5cbiAgNzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydEJlYXQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICAxNCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgfVxuXG4gIDI4JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cblxuICA0MiUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5hbmltYXRlX19oZWFydEJlYXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMS4zKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMS4zKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAxLjMpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAxLjMpO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbi8qIEJhY2sgZW50cmFuY2VzICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja0luRG93biB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWNrSW5Eb3duIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja0luRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrSW5Eb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJbkxlZnQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja0luTGVmdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmFuaW1hdGVfX2JhY2tJbkxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYmFja0luTGVmdDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5SaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja0luUmlnaHQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja0luUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrSW5SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tJblJpZ2h0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJblVwIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWNrSW5VcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19iYWNrSW5VcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tJblVwO1xuICBhbmltYXRpb24tbmFtZTogYmFja0luVXA7XG59XG4vKiBCYWNrIGV4aXRzICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dERvd24ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuQGtleWZyYW1lcyBiYWNrT3V0RG93biB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja091dERvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0RG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXREb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXRMZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhY2tPdXRMZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG4uYW5pbWF0ZV9fYmFja091dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0TGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRMZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXRSaWdodCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja091dFJpZ2h0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuLmFuaW1hdGVfX2JhY2tPdXRSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBiYWNrT3V0VXAge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSBzY2FsZSgwLjcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJhY2tPdXRVcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKDAuNyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoMC43KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cbi5hbmltYXRlX19iYWNrT3V0VXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0VXA7XG59XG4vKiBCb3VuY2luZyBlbnRyYW5jZXMgICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW4ge1xuICBmcm9tLFxuICAyMCUsXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUsXG4gIHRvIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICB9XG5cbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG5cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XG4gIH1cblxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk3LCAwLjk3LCAwLjk3KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJbiB7XG4gIGZyb20sXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45NywgMC45NywgMC45Nyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDAuNzUpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW47XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDI1cHgsIDApIHNjYWxlWSgwLjkpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDI1cHgsIDApIHNjYWxlWSgwLjkpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19ib3VuY2VJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5MZWZ0IHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApIHNjYWxlWCgwLjk4KTtcbiAgfVxuXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xuICBmcm9tLFxuICA2MCUsXG4gIDc1JSxcbiAgOTAlLFxuICB0byB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgfVxuXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApIHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApIHNjYWxlWCgxKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICB9XG5cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlSW5MZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xuICBmcm9tLFxuICA2MCUsXG4gIDc1JSxcbiAgOTAlLFxuICB0byB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgfVxuXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjVweCwgMCwgMCkgc2NhbGVYKDEpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xuICB9XG5cbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApIHNjYWxlWCgwLjk5NSk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XG4gIGZyb20sXG4gIDYwJSxcbiAgNzUlLFxuICA5MCUsXG4gIHRvIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICB9XG5cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKSBzY2FsZVgoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAwcHgsIDAsIDApIHNjYWxlWCgzKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApIHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKSBzY2FsZVgoMSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZUluUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApIHNjYWxlWSg1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCkgc2NhbGVZKDUpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcbiAgZnJvbSxcbiAgNjAlLFxuICA3NSUsXG4gIDkwJSxcbiAgdG8ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cblxuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApIHNjYWxlWSg1KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCkgc2NhbGVZKDUpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gIH1cblxuICA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XG4gIH1cblxuICA5MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZUluVXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcbn1cbi8qIEJvdW5jaW5nIGV4aXRzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dCB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICB9XG5cbiAgNTAlLFxuICA1NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZU91dCB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xuICB9XG5cbiAgNTAlLFxuICA1NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlT3V0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuNzUpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0RG93biB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICB9XG5cbiAgNDAlLFxuICA0NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCkgc2NhbGVZKDMpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIDQwJSxcbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKSBzY2FsZVkoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZU91dERvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgfVxufVxuLmFuaW1hdGVfX2JvdW5jZU91dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRSaWdodCB7XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCkgc2NhbGVYKDIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKSBzY2FsZVgoMik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHQge1xuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCkgc2NhbGVYKDIpO1xuICB9XG59XG4uYW5pbWF0ZV9fYm91bmNlT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgc2NhbGVZKDAuOTg1KTtcbiAgfVxuXG4gIDQwJSxcbiAgNDUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlWSgwLjkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApIHNjYWxlWSgzKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2VPdXRVcCB7XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XG4gIH1cblxuICA0MCUsXG4gIDQ1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCkgc2NhbGVZKDAuOSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZVkoMC45KTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKSBzY2FsZVkoMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKSBzY2FsZVkoMyk7XG4gIH1cbn1cbi5hbmltYXRlX19ib3VuY2VPdXRVcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFVwO1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0VXA7XG59XG4vKiBGYWRpbmcgZW50cmFuY2VzICAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd25CaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Eb3duQmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bkJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJbkxlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5MZWZ0QmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnRCaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJblJpZ2h0QmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodEJpZztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVJblVwIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluVXBCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fZmFkZUluVXBCaWcge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcEJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwQmlnO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblRvcExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Ub3BMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Ub3BMZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVG9wTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvcExlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVG9wUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluVG9wUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Ub3BSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvcFJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluVG9wUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluQm90dG9tTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Cb3R0b21MZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDEwMCUsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fZmFkZUluQm90dG9tTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkJvdHRvbUxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Cb3R0b21MZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkJvdHRvbVJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW5Cb3R0b21SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTAwJSwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlSW5Cb3R0b21SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkJvdHRvbVJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluQm90dG9tUmlnaHQ7XG59XG4vKiBGYWRpbmcgZXhpdHMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0RG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXREb3duQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXREb3duQmlnIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dERvd25CaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0TGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0TGVmdEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0QmlnO1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnRCaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXRSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRSaWdodEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0UmlnaHRCaWcge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHRCaWc7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHRCaWc7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0VXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXRVcEJpZyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VG9wTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgLTEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb3BMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0VG9wTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFRvcExlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFRvcFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb3BSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZhZGVPdXRUb3BSaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0Qm90dG9tUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRCb3R0b21SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0Qm90dG9tUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0Qm90dG9tUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0Qm90dG9tUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dEJvdHRvbUxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19mYWRlT3V0Qm90dG9tTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRCb3R0b21MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dEJvdHRvbUxlZnQ7XG59XG4vKiBGbGlwcGVycyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXAge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsaXAge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG59XG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmxpcCB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcEluWCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgMTBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZsaXBJblgge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cblxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgfVxufVxuLmFuaW1hdGVfX2ZsaXBJblgge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwSW5YO1xuICBhbmltYXRpb24tbmFtZTogZmxpcEluWDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwSW5ZIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMjBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxpcEluWSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0yMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgMTBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG59XG4uYW5pbWF0ZV9fZmxpcEluWSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwSW5ZO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmbGlwT3V0WCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cblxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMjBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19mbGlwT3V0WCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDAuNzUpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuNzUpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFg7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwT3V0WSB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gIH1cblxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmxpcE91dFkge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG5cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNWRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uYW5pbWF0ZV9fZmxpcE91dFkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDAuNzUpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBPdXRZO1xuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFk7XG59XG4vKiBMaWdodHNwZWVkICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX2xpZ2h0U3BlZWRJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW5SaWdodDtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluTGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGlnaHRTcGVlZEluTGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICAgIHRyYW5zZm9ybTogc2tld1goNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19saWdodFNwZWVkSW5MZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRJbkxlZnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uYW5pbWF0ZV9fbGlnaHRTcGVlZE91dFJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dFJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dFJpZ2h0O1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19saWdodFNwZWVkT3V0TGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dExlZnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cbi8qIFJvdGF0aW5nIGVudHJhbmNlcyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0yMDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fcm90YXRlSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbjtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fcm90YXRlSW5Eb3duTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25MZWZ0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93blJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVJbkRvd25SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93blJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcExlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fcm90YXRlSW5VcExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwTGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC05MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBSaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVJblVwUmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwUmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwUmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG4vKiBSb3RhdGluZyBleGl0cyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGVfX3JvdGF0ZU91dCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVPdXREb3duTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93bkxlZnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGVfX3JvdGF0ZU91dERvd25SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcExlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVPdXRVcExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dFVwUmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19yb3RhdGVPdXRVcFJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBSaWdodDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG4vKiBTcGVjaWFscyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGhpbmdlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAyMCUsXG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgNDAlLFxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBoaW5nZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgMjAlLFxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgfVxuXG4gIDQwJSxcbiAgODAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRlX19oaW5nZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMik7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDIpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDIpO1xuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAyKTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogaGluZ2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBoaW5nZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgamFja0luVGhlQm94IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGphY2tJblRoZUJveCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cblxuICA3MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmFuaW1hdGVfX2phY2tJblRoZUJveCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbiAgYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbn1cbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHJvbGxJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fcm9sbEluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm9sbEluO1xuICBhbmltYXRpb24tbmFtZTogcm9sbEluO1xufVxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbE91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm9sbE91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XG4gIH1cbn1cbi5hbmltYXRlX19yb2xsT3V0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm9sbE91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XG59XG4vKiBab29taW5nIGVudHJhbmNlcyAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbUluIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluO1xuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5Eb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbUluTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5MZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyB6b29tSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tSW5SaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogem9vbUluUmlnaHQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgfVxufVxuLmFuaW1hdGVfX3pvb21JblVwIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluVXA7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5VcDtcbn1cbi8qIFpvb21pbmcgZXhpdHMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyB6b29tT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGVfX3pvb21PdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0RG93biB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21PdXREb3duIHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tT3V0RG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dERvd247XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0TGVmdCB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbU91dExlZnQge1xuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fem9vbU91dExlZnQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRMZWZ0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0UmlnaHQge1xuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTQycHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dFVwIHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gIH1cbn1cbi5hbmltYXRlX196b29tT3V0VXAge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbn1cbi8qIFNsaWRpbmcgZW50cmFuY2VzICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19zbGlkZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbi5hbmltYXRlX19zbGlkZUluTGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVJblJpZ2h0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX3NsaWRlSW5VcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcbn1cbi8qIFNsaWRpbmcgZXhpdHMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dERvd24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVPdXREb3duIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVPdXREb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVPdXRMZWZ0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuLmFuaW1hdGVfX3NsaWRlT3V0UmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRSaWdodDtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFVwIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVPdXRVcCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG59XG4uYW5pbWF0ZV9fc2xpZGVPdXRVcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0VXA7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCLENBQUM7Ozs7OztFQU1mO0FBQ0Y7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixtREFBbUQ7RUFDbkQsMkNBQTJDO0VBQzNDLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsd0RBQXdEO0VBQ3hELGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsOENBQThDO0VBQzlDLHNDQUFzQztFQUN0QyxrRUFBa0U7RUFDbEUsMERBQTBEO0FBQzVEO0FBQ0E7RUFDRSw4Q0FBOEM7RUFDOUMsc0NBQXNDO0VBQ3RDLGtFQUFrRTtFQUNsRSwwREFBMEQ7QUFDNUQ7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3Qix1REFBdUQ7RUFDdkQsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBQzdCLHVEQUF1RDtFQUN2RCwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFDN0IsdURBQXVEO0VBQ3ZELCtDQUErQztBQUNqRDtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUM3Qix1REFBdUQ7RUFDdkQsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsZ0NBQWdDO0VBQ2hDLDZEQUE2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YXRlLmNzcyAtIGh0dHBzOi8vYW5pbWF0ZS5zdHlsZS9cXG4gKiBWZXJzaW9uIC0gNC4xLjFcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXFxuICpcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgQW5pbWF0ZS5jc3NcXG4gKi9cXG46cm9vdCB7XFxuICAtLWFuaW1hdGUtZHVyYXRpb246IDFzO1xcbiAgLS1hbmltYXRlLWRlbGF5OiAxcztcXG4gIC0tYW5pbWF0ZS1yZXBlYXQ6IDE7XFxufVxcbi5hbmltYXRlX19hbmltYXRlZCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IHZhcigtLWFuaW1hdGUtZHVyYXRpb24pO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1hbmltYXRlLWR1cmF0aW9uKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19pbmZpbml0ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19yZXBlYXQtMSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1hbmltYXRlLXJlcGVhdCk7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1hbmltYXRlLXJlcGVhdCk7XFxufVxcbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19yZXBlYXQtMiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGNhbGMoMSAqIDIpO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYygxICogMik7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGNhbGModmFyKC0tYW5pbWF0ZS1yZXBlYXQpICogMik7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSAqIDIpO1xcbn1cXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fcmVwZWF0LTMge1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKDEgKiAzKTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGNhbGMoMSAqIDMpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSAqIDMpO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogY2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkgKiAzKTtcXG59XFxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTFzIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogdmFyKC0tYW5pbWF0ZS1kZWxheSk7XFxuICBhbmltYXRpb24tZGVsYXk6IHZhcigtLWFuaW1hdGUtZGVsYXkpO1xcbn1cXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktMnMge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiAyKTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygxcyAqIDIpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkgKiAyKTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDIpO1xcbn1cXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktM3Mge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiAzKTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygxcyAqIDMpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkgKiAzKTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDMpO1xcbn1cXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktNHMge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiA0KTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygxcyAqIDQpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkgKiA0KTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDQpO1xcbn1cXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktNXMge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGMoMXMgKiA1KTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygxcyAqIDUpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkgKiA1KTtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSAqIDUpO1xcbn1cXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFzdGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzIC8gMik7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgLyAyKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pIC8gMik7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgLyAyKTtcXG59XFxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2Zhc3Qge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjgpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC44KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC44KTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuOCk7XFxufVxcbi5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19zbG93IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMik7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAyKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMik7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAyKTtcXG59XFxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3Nsb3dlciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDMpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDMpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMyk7XFxufVxcbkBtZWRpYSBwcmludCwgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgLmFuaW1hdGVfX2FuaW1hdGVkIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5hbmltYXRlX19hbmltYXRlZFtjbGFzcyo9J091dCddIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLyogQXR0ZW50aW9uIHNlZWtlcnMgICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZSB7XFxuICBmcm9tLFxcbiAgMjAlLFxcbiAgNTMlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgNDAlLFxcbiAgNDMlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCkgc2NhbGVZKDEuMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApIHNjYWxlWSgxLjEpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCkgc2NhbGVZKDEuMDUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKSBzY2FsZVkoMS4wNSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGVZKDAuOTUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlWSgwLjk1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKSBzY2FsZVkoMS4wMik7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCkgc2NhbGVZKDEuMDIpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XFxuICBmcm9tLFxcbiAgMjAlLFxcbiAgNTMlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgNDAlLFxcbiAgNDMlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCkgc2NhbGVZKDEuMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApIHNjYWxlWSgxLjEpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNik7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCkgc2NhbGVZKDEuMDUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKSBzY2FsZVkoMS4wNSk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGVZKDAuOTUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlWSgwLjk1KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNHB4LCAwKSBzY2FsZVkoMS4wMik7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCkgc2NhbGVZKDEuMDIpO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYm91bmNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxhc2gge1xcbiAgZnJvbSxcXG4gIDUwJSxcXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDI1JSxcXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmxhc2gge1xcbiAgZnJvbSxcXG4gIDUwJSxcXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDI1JSxcXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlX19mbGFzaCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGFzaDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGFzaDtcXG59XFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbi5hbmltYXRlX19wdWxzZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBydWJiZXJCYW5kIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xcbiAgfVxcblxcbiAgNjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbi5hbmltYXRlX19ydWJiZXJCYW5kIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJ1YmJlckJhbmQ7XFxuICBhbmltYXRpb24tbmFtZTogcnViYmVyQmFuZDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlWCB7XFxuICBmcm9tLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxMCUsXFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUsXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaGFrZVgge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zaGFrZVgge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2VYO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlWDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlWSB7XFxuICBmcm9tLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxMCUsXFxuICAzMCUsXFxuICA1MCUsXFxuICA3MCUsXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaGFrZVkge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zaGFrZVkge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2hha2VZO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlWTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGhlYWRTaGFrZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuXFxuICA2LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcXG4gIH1cXG5cXG4gIDE4LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgfVxcblxcbiAgMzEuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO1xcbiAgfVxcblxcbiAgNDMuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGhlYWRTaGFrZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuXFxuICA2LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcXG4gIH1cXG5cXG4gIDE4LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgfVxcblxcbiAgMzEuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO1xcbiAgfVxcblxcbiAgNDMuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9faGVhZFNoYWtlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBoZWFkU2hha2U7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZyB7XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHN3aW5nIHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zd2luZyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3dpbmc7XFxuICBhbmltYXRpb24tbmFtZTogc3dpbmc7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyB0YWRhIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0YWRhIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3RhZGEge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdGFkYTtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgd29iYmxlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB3b2JibGUge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fd29iYmxlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBqZWxsbyB7XFxuICBmcm9tLFxcbiAgMTEuMSUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIyLjIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcXG4gIH1cXG5cXG4gIDMzLjMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgfVxcblxcbiAgNDQuNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcXG4gIH1cXG5cXG4gIDU1LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XFxuICB9XFxuXFxuICA2Ni42JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XFxuICB9XFxuXFxuICA3Ny43JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XFxuICB9XFxuXFxuICA4OC44JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBqZWxsbyB7XFxuICBmcm9tLFxcbiAgMTEuMSUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIyLjIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcXG4gIH1cXG5cXG4gIDMzLjMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgfVxcblxcbiAgNDQuNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcXG4gIH1cXG5cXG4gIDU1LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XFxuICB9XFxuXFxuICA2Ni42JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XFxuICB9XFxuXFxuICA3Ny43JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XFxuICB9XFxuXFxuICA4OC44JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2plbGxvIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBoZWFydEJlYXQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICAxNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgfVxcblxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgNDIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBoZWFydEJlYXQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICAxNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgfVxcblxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgNDIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2hlYXJ0QmVhdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XFxuICBhbmltYXRpb24tbmFtZTogaGVhcnRCZWF0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAxLjMpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMS4zKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMS4zKTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDEuMyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi8qIEJhY2sgZW50cmFuY2VzICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJbkRvd24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJhY2tJbkRvd24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYmFja0luRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tJbkRvd247XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBiYWNrSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2JhY2tJbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmFja0luTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrSW5MZWZ0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja0luUmlnaHQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBiYWNrSW5SaWdodCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYmFja0luUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmFja0luUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogYmFja0luUmlnaHQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5VcCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJhY2tJblVwIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTIwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5hbmltYXRlX19iYWNrSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBiYWNrSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrSW5VcDtcXG59XFxuLyogQmFjayBleGl0cyAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBiYWNrT3V0RG93biB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBiYWNrT3V0RG93biB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2JhY2tPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXREb3duO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dExlZnQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJhY2tPdXRMZWZ0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKDAuNyk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2JhY2tPdXRMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRMZWZ0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dFJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYmFja091dFJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSgwLjcpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICB9XFxufVxcbi5hbmltYXRlX19iYWNrT3V0UmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmFja091dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRSaWdodDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tPdXRVcCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJhY2tPdXRVcCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoMC43KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoMC43KTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYmFja091dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJhY2tPdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrT3V0VXA7XFxufVxcbi8qIEJvdW5jaW5nIGVudHJhbmNlcyAgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW4ge1xcbiAgZnJvbSxcXG4gIDIwJSxcXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICB9XFxuXFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjk3LCAwLjk3LCAwLjk3KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcXG4gIGZyb20sXFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcblxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45NywgMC45NywgMC45Nyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjk3LCAwLjk3LCAwLjk3KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2JvdW5jZUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcXG4gIGZyb20sXFxuICA2MCUsXFxuICA3NSUsXFxuICA5MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCkgc2NhbGVZKDMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAwcHgsIDApIHNjYWxlWSgzKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKSBzY2FsZVkoMC45KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKSBzY2FsZVkoMC45KTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgc2NhbGVZKDAuOTUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNXB4LCAwKSBzY2FsZVkoMC45ODUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCkgc2NhbGVZKDAuOTg1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluRG93biB7XFxuICBmcm9tLFxcbiAgNjAlLFxcbiAgNzUlLFxcbiAgOTAlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gIH1cXG5cXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDAwcHgsIDApIHNjYWxlWSgzKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwMHB4LCAwKSBzY2FsZVkoMyk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCkgc2NhbGVZKDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCkgc2NhbGVZKDAuOSk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk1KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCkgc2NhbGVZKDAuOTUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCkgc2NhbGVZKDAuOTg1KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlWSgwLjk4NSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2JvdW5jZUluRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5Eb3duO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5MZWZ0IHtcXG4gIGZyb20sXFxuICA2MCUsXFxuICA3NSUsXFxuICA5MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApIHNjYWxlWCgzKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKSBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjVweCwgMCwgMCkgc2NhbGVYKDEpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApIHNjYWxlWCgwLjk4KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApIHNjYWxlWCgwLjk5NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYm91bmNlSW5MZWZ0IHtcXG4gIGZyb20sXFxuICA2MCUsXFxuICA3NSUsXFxuICA5MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApIHNjYWxlWCgzKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKSBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjVweCwgMCwgMCkgc2NhbGVYKDEpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApIHNjYWxlWCgwLjk4KTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApIHNjYWxlWCgwLjk5NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKSBzY2FsZVgoMC45OTUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19ib3VuY2VJbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xcbiAgZnJvbSxcXG4gIDYwJSxcXG4gIDc1JSxcXG4gIDkwJSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICB9XFxuXFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKSBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApIHNjYWxlWCgxKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApIHNjYWxlWCgwLjk5NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xcbiAgZnJvbSxcXG4gIDYwJSxcXG4gIDc1JSxcXG4gIDkwJSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICB9XFxuXFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCkgc2NhbGVYKDMpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKSBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApIHNjYWxlWCgxKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKSBzY2FsZVgoMC45OCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCkgc2NhbGVYKDAuOTgpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApIHNjYWxlWCgwLjk5NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCkgc2NhbGVYKDAuOTk1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYm91bmNlSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblVwIHtcXG4gIGZyb20sXFxuICA2MCUsXFxuICA3NSUsXFxuICA5MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgfVxcblxcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApIHNjYWxlWSg1KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApIHNjYWxlWSg1KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHNjYWxlWSgwLjkpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHNjYWxlWSgwLjk1KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCkgc2NhbGVZKDAuOTg1KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKSBzY2FsZVkoMC45ODUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XFxuICBmcm9tLFxcbiAgNjAlLFxcbiAgNzUlLFxcbiAgOTAlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gIH1cXG5cXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwMHB4LCAwKSBzY2FsZVkoNSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwMHB4LCAwKSBzY2FsZVkoNSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHNjYWxlWSgwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSBzY2FsZVkoMC45KTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgc2NhbGVZKDAuOTUpO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01cHgsIDApIHNjYWxlWSgwLjk4NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCkgc2NhbGVZKDAuOTg1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYm91bmNlSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XFxufVxcbi8qIEJvdW5jaW5nIGV4aXRzICAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXQge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KTtcXG4gIH1cXG5cXG4gIDUwJSxcXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYm91bmNlT3V0IHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XFxuICB9XFxuXFxuICA1MCUsXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYm91bmNlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXREb3duIHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHNjYWxlWSgwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKSBzY2FsZVkoMC45KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCkgc2NhbGVZKDMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCkgc2NhbGVZKDMpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgc2NhbGVZKDAuOTg1KTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCkgc2NhbGVZKDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHNjYWxlWSgwLjkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKSBzY2FsZVkoMyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKSBzY2FsZVkoMyk7XFxuICB9XFxufVxcbi5hbmltYXRlX19ib3VuY2VPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dERvd247XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dExlZnQge1xcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCkgc2NhbGVYKDIpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKSBzY2FsZVgoMik7XFxuICB9XFxufVxcbi5hbmltYXRlX19ib3VuY2VPdXRMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0IHtcXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjBweCwgMCwgMCkgc2NhbGVYKDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApIHNjYWxlWCgwLjkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKSBzY2FsZVgoMik7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKSBzY2FsZVgoMik7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHQge1xcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKSBzY2FsZVgoMC45KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjBweCwgMCwgMCkgc2NhbGVYKDAuOSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApIHNjYWxlWCgyKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2JvdW5jZU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFJpZ2h0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0VXAge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSBzY2FsZVkoMC45ODUpO1xcbiAgfVxcblxcbiAgNDAlLFxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlWSgwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlWSgwLjkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCkgc2NhbGVZKDMpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApIHNjYWxlWSgzKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBib3VuY2VPdXRVcCB7XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApIHNjYWxlWSgwLjk4NSk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCkgc2NhbGVZKDAuOSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCkgc2NhbGVZKDAuOSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKSBzY2FsZVkoMyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCkgc2NhbGVZKDMpO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fYm91bmNlT3V0VXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0VXA7XFxufVxcbi8qIEZhZGluZyBlbnRyYW5jZXMgICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVJbkRvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93bkJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluRG93bkJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlSW5Eb3duQmlnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd25CaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bkJpZztcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVJbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlSW5MZWZ0QmlnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnRCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHRCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVJblJpZ2h0QmlnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0QmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0QmlnO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVJblVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXBCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlSW5VcEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fZmFkZUluVXBCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Ub3BMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgLTEwMCUsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluVG9wTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fZmFkZUluVG9wTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Ub3BMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvcExlZnQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Ub3BSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlSW5Ub3BSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVJblRvcFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvcFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvcFJpZ2h0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluQm90dG9tTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMTAwJSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlSW5Cb3R0b21MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fZmFkZUluQm90dG9tTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Cb3R0b21MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkJvdHRvbUxlZnQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Cb3R0b21SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZUluQm90dG9tUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fZmFkZUluQm90dG9tUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluQm90dG9tUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluQm90dG9tUmlnaHQ7XFxufVxcbi8qIEZhZGluZyBleGl0cyAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXREb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dERvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dERvd25CaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlT3V0RG93bkJpZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bkJpZztcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVPdXRMZWZ0QmlnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0QmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0QmlnO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlT3V0UmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRSaWdodEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlT3V0UmlnaHRCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodEJpZztcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRVcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFVwO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dFVwQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19mYWRlT3V0VXBCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dFVwQmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRUb3BMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgLTEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmFkZU91dFRvcExlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIC0xMDAlLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVPdXRUb3BMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRUb3BMZWZ0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFRvcFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb3BSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIC0xMDAlLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVPdXRUb3BSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VG9wUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFRvcFJpZ2h0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dEJvdHRvbVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlT3V0Qm90dG9tUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEwMCUsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fZmFkZU91dEJvdHRvbVJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRCb3R0b21SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0Qm90dG9tUmlnaHQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0Qm90dG9tTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlT3V0Qm90dG9tTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAxMDAlLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZhZGVPdXRCb3R0b21MZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRCb3R0b21MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRCb3R0b21MZWZ0O1xcbn1cXG4vKiBGbGlwcGVycyAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBmbGlwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmbGlwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZsaXAge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXA7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblgge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZsaXBJblgge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fZmxpcEluWCB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblg7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcEluWDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZsaXBJblkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fZmxpcEluWSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcEluWTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmbGlwT3V0WCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlX19mbGlwT3V0WCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygxcyAqIDAuNzUpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSAqIDAuNzUpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcE91dFkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZsaXBPdXRZIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2ZsaXBPdXRZIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMC43NSk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAwLjc1KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMC43NSk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAwLjc1KTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFk7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFk7XFxufVxcbi8qIExpZ2h0c3BlZWQgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbGlnaHRTcGVlZEluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19saWdodFNwZWVkSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW5SaWdodDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgbGlnaHRTcGVlZEluTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2xpZ2h0U3BlZWRJbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW5MZWZ0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsaWdodFNwZWVkT3V0UmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fbGlnaHRTcGVlZE91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXRSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0UmlnaHQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBsaWdodFNwZWVkT3V0TGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fbGlnaHRTcGVlZE91dExlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dExlZnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG4vKiBSb3RhdGluZyBlbnRyYW5jZXMgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3JvdGF0ZUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fcm90YXRlSW5Eb3duTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJbkRvd25MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3JvdGF0ZUluRG93blJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93blJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93blJpZ2h0O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3JvdGF0ZUluVXBMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBMZWZ0O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5hbmltYXRlX19yb3RhdGVJblVwUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlSW5VcFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbn1cXG4vKiBSb3RhdGluZyBleGl0cyAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fcm90YXRlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlX19yb3RhdGVPdXREb3duTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duTGVmdDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlX19yb3RhdGVPdXREb3duUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0VXBMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3JvdGF0ZU91dFVwTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBMZWZ0O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlT3V0VXBSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlX19yb3RhdGVPdXRVcFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBSaWdodDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbn1cXG4vKiBTcGVjaWFscyAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBoaW5nZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgMjAlLFxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgNDAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDcwMHB4LCAwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBoaW5nZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgMjAlLFxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgNDAlLFxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA2MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDcwMHB4LCAwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX2hpbmdlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKDFzICogMik7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoMXMgKiAyKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pICogMik7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikgKiAyKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhpbmdlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGhpbmdlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgamFja0luVGhlQm94IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBqYWNrSW5UaGVCb3gge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHJvdGF0ZSgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9famFja0luVGhlQm94IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBqYWNrSW5UaGVCb3g7XFxufVxcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyByb2xsSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgcm9sbEluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fcm9sbEluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsSW47XFxufVxcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyByb2xsT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHJvbGxPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XFxuICB9XFxufVxcbi5hbmltYXRlX19yb2xsT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogcm9sbE91dDtcXG59XFxuLyogWm9vbWluZyBlbnRyYW5jZXMgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB6b29tSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fem9vbUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHpvb21JbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcbi5hbmltYXRlX196b29tSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JbkRvd247XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluRG93bjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgem9vbUluTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3pvb21JbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5MZWZ0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgem9vbUluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcbi5hbmltYXRlX196b29tSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5SaWdodDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JblVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMTAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHpvb21JblVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMTAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fem9vbUluVXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluVXA7XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluVXA7XFxufVxcbi8qIFpvb21pbmcgZXhpdHMgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgem9vbU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlX196b29tT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XFxuICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXREb3duIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB6b29tT3V0RG93biB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcbi5hbmltYXRlX196b29tT3V0RG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0RG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0RG93bjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0TGVmdCB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHpvb21PdXRMZWZ0IHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX196b29tT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fem9vbU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXRVcCB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3pvb21PdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogem9vbU91dFVwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG59XFxuLyogU2xpZGluZyBlbnRyYW5jZXMgKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zbGlkZUluRG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fc2xpZGVJbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zbGlkZUluUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5SaWdodDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5VcCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGVfX3NsaWRlSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluVXA7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJblVwO1xcbn1cXG4vKiBTbGlkaW5nIGV4aXRzICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0RG93biB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZU91dERvd24ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zbGlkZU91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0RG93bjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZV9fc2xpZGVPdXRMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0TGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zbGlkZU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0UmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRSaWdodDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0VXAge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxufVxcbi5hbmltYXRlX19zbGlkZU91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0VXA7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRVcDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDU1MgcmVzZXRzICovXHJcbi8qXHJcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cclxuKi9cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKlxyXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxyXG4qL1xyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLypcclxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXHJcbiAgMy4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcclxuICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXHJcbiovXHJcbmJvZHkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4vKlxyXG4gIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXHJcbiovXHJcbmlucHV0LFxyXG5idXR0b24sXHJcbnRleHRhcmVhLFxyXG5zZWxlY3Qge1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLypcclxuICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xyXG4qL1xyXG5wLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi8qIGZvbnQgc3R5bGVzIGFuZCB3ZWlnaHRzICovXHJcbi5wb3BwaW5zLWxpZ2h0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5wb3BwaW5zLXJlZ3VsYXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLnBvcHBpbnMtbWVkaXVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5wb3BwaW5zLXNlbWlib2xkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5wb3BwaW5zLWJvbGQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLnBvcHBpbnMtZXh0cmFib2xkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5wb3BwaW5zLWJsYWNrIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbi8qIE1vZGFsIHN0eWxlICovXHJcbi5tb2RhbCB7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5hZGQtdGFzayA+ICoge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDg4cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjYWFhO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIgPiAqIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRuLW9wZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDk0ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogOHB4IGF1dG87XHJcbn1cclxuXHJcbiNtYWluLWRpc3BsYXkge1xyXG4gICAgbWFyZ2luOiA4cHggYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi50YXNrLWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5kb25lLXN0YXR1cyB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2lkZS1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFkZWRlO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmRpc3BsYXkge1xyXG4gICAgZmxleDogNDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5kZWZhdWx0LXByb2plY3RzLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmRlZmF1bHQtcHJvamVjdHMgPiAqLFxyXG4udXNlci1wcm9qZWN0cyA+ICoge1xyXG4gICAgcGFkZGluZzogNHB4IDE2cHg7XHJcbn1cclxuXHJcbi5kZWZhdWx0LXByb2plY3RzID4gKjpob3ZlcixcclxuLnVzZXItcHJvamVjdHMgPiAqOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWNlY2U7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN1YnRpdGxlIHtcclxuICAgIG1hcmdpbjogNHB4IDhweDtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LWJ0biB7XHJcbiAgICBtYXJnaW46IDhweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxY2VjZTtcclxufVxyXG5cclxuLyogLnNlbGVjdGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0gKi9cclxuXHJcbi5kdWUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogI2FhMDAwMDtcclxufVxyXG5cclxuLmVkaXQtdGFzayxcclxuLmRlbGV0ZS10YXNrIHtcclxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAwIDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5lZGl0LXRhc2s6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDBmZjtcclxufVxyXG5cclxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7XHJcbn1cclxuXHJcbi5lZGl0LXRhc2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbiNuZXctdGl0bGUge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXByb2plY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZUFBZTtBQUNmOztDQUVDO0FBQ0Q7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTs7Q0FFQztBQUNEO0lBQ0ksU0FBUztBQUNiOztBQUVBOzs7O0NBSUM7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7O0FBRUE7O0NBRUM7QUFDRDs7OztJQUlJLGFBQWE7QUFDakI7O0FBRUE7O0NBRUM7QUFDRDs7Ozs7OztJQU9JLHlCQUF5QjtBQUM3Qjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsY0FBYztJQUNkLFVBQVU7SUFDViw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTtJQUNaOzJDQUN1QztJQUN2QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjsyQ0FDdUM7SUFDdkMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIHJlc2V0cyAqL1xcclxcbi8qXFxyXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxyXFxuKi9cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcclxcbiAgMy4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXHJcXG4gIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXHJcXG4qL1xcclxcbmJvZHkge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxyXFxuKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxyXFxuKi9cXHJcXG5wLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9udCBzdHlsZXMgYW5kIHdlaWdodHMgKi9cXHJcXG4ucG9wcGlucy1saWdodCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHBpbnMtcmVndWxhciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHBpbnMtbWVkaXVtIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wcGlucy1zZW1pYm9sZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHBpbnMtYm9sZCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHBpbnMtZXh0cmFib2xkIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wcGlucy1ibGFjayB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgc3R5bGUgKi9cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayA+ICoge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogODhweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mb290ZXIge1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2FhYTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZm9vdGVyID4gKiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vcGVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgbWFyZ2luOiA0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDk0ZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW46IDhweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1kaXNwbGF5IHtcXHJcXG4gICAgbWFyZ2luOiA4cHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDRweDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsXFxyXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgY29sb3I6ICM1NTU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxufVxcclxcblxcclxcbi5kb25lLXN0YXR1cyB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFkZWRlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICAgIGZsZXg6IDQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmF1bHQtcHJvamVjdHMtbGlzdCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LXByb2plY3RzID4gKixcXHJcXG4udXNlci1wcm9qZWN0cyA+ICoge1xcclxcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmF1bHQtcHJvamVjdHMgPiAqOmhvdmVyLFxcclxcbi51c2VyLXByb2plY3RzID4gKjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxY2VjZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc3VidGl0bGUge1xcclxcbiAgICBtYXJnaW46IDRweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG4ge1xcclxcbiAgICBtYXJnaW46IDhweCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxY2VjZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLnNlbGVjdGVkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmR1ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBjb2xvcjogI2FhMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdGFzayxcXHJcXG4uZGVsZXRlLXRhc2sge1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDAgNHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsXFxyXFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRhc2s6aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMGZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10YXNrIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXRpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiYW5pbWF0ZS5jc3NcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldFByb2plY3RCeUlkLFxyXG4gICAgZ2V0UHJvamVjdEJ5TmFtZSxcclxuICAgIHNhdmVQcm9qZWN0cyxcclxuICAgIGdldFByb2plY3RzLFxyXG4gICAgY3JlYXRlUHJvamVjdCxcclxuICAgIHJlbW92ZVByb2plY3QsXHJcbn0gZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxGdW5jdGlvbmFsaXR5XCI7XHJcbmltcG9ydCB7IHVwZGF0ZVRvZGF5TGlzdCB9IGZyb20gXCIuL3RvZGF5TGlzdFVwZGF0ZXJcIjtcclxuaW1wb3J0IHsgdGFza1JlbmRlcmVyIH0gZnJvbSBcIi4vdGFza1JlbmRlcmVyXCI7XHJcbmltcG9ydCBjaGVja0ljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2NoZWNrLnN2Z1wiO1xyXG5pbXBvcnQgeEljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL3guc3ZnXCI7XHJcbmltcG9ydCB4SWNvbkJsYWNrIGZyb20gXCIuL2Fzc2V0cy9pY29ucy94QmxhY2suc3ZnXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVRhc2tGb3JtIH0gZnJvbSBcIi4vdGFza0Zvcm1cIjtcclxuXHJcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkXCIpO1xyXG5jb25zdCBmb3JtID0gY3JlYXRlVGFza0Zvcm0oXCJBZGQgVGFza1wiKTtcclxuY29uc3QgZWRpdEZvcm0gPSBjcmVhdGVUYXNrRm9ybShcIlNhdmUgVGFza1wiKTtcclxuY29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGlzcGxheVwiKTtcclxuY29uc3QgZGVmYXVsdFByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1wcm9qZWN0c1wiKTtcclxuY29uc3QgdXNlclByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1wcm9qZWN0c1wiKTtcclxuY29uc3QgcHJvamVjdFRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcclxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtYnRuXCIpO1xyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVJQ29udHJvbGxlcigpIHtcclxuICAgIGNvbnN0IFt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5XSA9IGZvcm0uZWxlbWVudHM7XHJcbiAgICBjb25zdCBbZWRpdFRpdGxlLCBlZGl0RGVzY3JpcHRpb24sIGVkaXREdWVEYXRlLCBlZGl0UHJpb3JpdHldID1cclxuICAgICAgICBlZGl0Rm9ybS5lbGVtZW50cztcclxuICAgIGNvbnN0IGFsbFRhc2tzID0gZ2V0UHJvamVjdEJ5TmFtZShcIkFsbFwiKTtcclxuICAgIGNvbnN0IHRvZGF5VGFza3MgPSBnZXRQcm9qZWN0QnlOYW1lKFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdHMgPSBbYWxsVGFza3MsIHRvZGF5VGFza3NdO1xyXG4gICAgbGV0IHVzZXJQcm9qZWN0cyA9IGdldFByb2plY3RzKCkuc2xpY2UoMik7XHJcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gYWxsVGFza3M7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzYXZlLXRhc2tcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XHJcblxyXG4gICAgICAgICAgICBhbGxUYXNrcy5lZGl0VGFzayhcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgZWRpdFRpdGxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZWRpdER1ZURhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBlZGl0UHJpb3JpdHkudmFsdWVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5lZGl0VGFzayhcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgZWRpdFRpdGxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZWRpdER1ZURhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBlZGl0UHJpb3JpdHkudmFsdWVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHVzZXJQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmVkaXRUYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRUaXRsZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RGVzY3JpcHRpb24udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdER1ZURhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFByaW9yaXR5LnZhbHVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGxUYXNrcy5hZGRUYXNrKFxyXG4gICAgICAgICAgICAgICAgdGl0bGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGR1ZURhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eS52YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFzdEVsZUlkID1cclxuICAgICAgICAgICAgICAgIGFsbFRhc2tzLmdldFRhc2tzKClbYWxsVGFza3MuZ2V0VGFza3MoKS5sZW5ndGggLSAxXS5pZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCAhPT0gdG9kYXlUYXNrcyAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ICE9PSBhbGxUYXNrc1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5hZGRUYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEVsZUlkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVUb2RheUxpc3QodG9kYXlUYXNrcywgYWxsVGFza3MpO1xyXG5cclxuICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5VGFza3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbkRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgICAgICBzZWxlY3RlZFByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tCb3ggPSB0YXNrUmVuZGVyZXIodGFzayk7XHJcblxyXG4gICAgICAgICAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrQm94KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlzcGxheURlZmF1bHRQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkZWZhdWx0UHJvamVjdHNMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgZGVmYXVsdFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIGAke3Byb2plY3QuaWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiLCBcInBvcHBpbnMtc2VtaWJvbGRcIik7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpc3BsYXlVc2VyUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdXNlclByb2plY3RzTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIHVzZXJQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5zcmMgPSB4SWNvbkJsYWNrO1xyXG4gICAgICAgICAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZChcInJlbW92ZS1wcm9qZWN0XCIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQocmVtb3ZlQnRuKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBgJHtwcm9qZWN0LmlkfWApO1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1wcm9qZWN0XCIsIFwicG9wcGlucy1zZW1pYm9sZFwiKTtcclxuXHJcbiAgICAgICAgICAgIHVzZXJQcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2lkZWJhckNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3VzdG9tLXByb2plY3RcIikgfHxcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQoZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLXByb2plY3RcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LnByb2plY3RJZDtcclxuXHJcbiAgICAgICAgICAgIGdldFByb2plY3RCeUlkKGlkKVxyXG4gICAgICAgICAgICAgICAgLmdldFRhc2tzKClcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVGFza3MuZGVsZXRlVGFzayhpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdChpZCk7XHJcbiAgICAgICAgICAgIHVzZXJQcm9qZWN0cyA9IGdldFByb2plY3RzKCkuc2xpY2UoMik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGFsbFRhc2tzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1haW5EaXNwbGF5Q2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS10YXNrXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQudGFza0lkO1xyXG4gICAgICAgICAgICBzZWxlY3RlZFByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xyXG4gICAgICAgICAgICBhbGxUYXNrcy5kZWxldGVUYXNrKHRhc2tJZCk7XHJcblxyXG4gICAgICAgICAgICBnZXRQcm9qZWN0cygpXHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMilcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmRlbGV0ZVRhc2sodGFza0lkKSk7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC10YXNrXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQudGFza0lkO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrT2JqID0gc2VsZWN0ZWRQcm9qZWN0LmdldFRhc2sodGFza0lkKTtcclxuXHJcbiAgICAgICAgICAgIGVkaXRGb3JtLmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xyXG5cclxuICAgICAgICAgICAgZWRpdFRpdGxlLnZhbHVlID0gdGFza09iai50aXRsZTtcclxuICAgICAgICAgICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gdGFza09iai5kZXNjO1xyXG4gICAgICAgICAgICBlZGl0UHJpb3JpdHkudmFsdWUgPSB0YXNrT2JqLnByaW9yaXR5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhc2tPYmouZHVlRGF0ZSlcclxuICAgICAgICAgICAgICAgIGVkaXREdWVEYXRlLnZhbHVlID0gdGFza09iai5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUNBXCIpO1xyXG5cclxuICAgICAgICAgICAgb3Blbk1vZGFsKGVkaXRGb3JtKTtcclxuICAgICAgICAgICAgZWRpdFRpdGxlLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRvbmUtc3RhdHVzXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC50YXNrSWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5VGFza09iaiA9IHRvZGF5VGFza3MuZ2V0VGFzayh0YXNrSWQpO1xyXG5cclxuICAgICAgICAgICAgYWxsVGFza3MuZ2V0VGFzayh0YXNrSWQpLmRvbmUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICAgICAgaWYgKHRvZGF5VGFza09iaikgdG9kYXlUYXNrT2JqLmRvbmUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICAgICAgdXNlclByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tPYmogPSBwcm9qZWN0LmdldFRhc2sodGFza0lkKTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrT2JqKSB0YXNrT2JqLmRvbmUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZFByb2plY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWRkLXByb2plY3QtZm9ybVwiKTtcclxuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy10aXRsZVwiKTtcclxuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcclxuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXRpdGxlXCIpO1xyXG4gICAgICAgIGNvbmZpcm1CdG4uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtjaGVja0ljb259XCIgYWx0PVwiY29uZmlybVwiPmA7XHJcbiAgICAgICAgY2FuY2VsQnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7eEljb259XCIgYWx0PVwiY2FuY2VsXCI+YDtcclxuICAgICAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XHJcbiAgICAgICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xyXG4gICAgICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1wcm9qZWN0LWZvcm1cIikuZm9yRWFjaCgoZWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGVsZS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmViZWdpblwiLCBkaXZDb250YWluZXIpO1xyXG5cclxuICAgICAgICBpbnB1dFRpdGxlLmZvY3VzKCk7XHJcblxyXG4gICAgICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlucHV0VGl0bGUudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdChcIiNcIiArIGlucHV0VGl0bGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvamVjdHMgPSBnZXRQcm9qZWN0cygpLnNsaWNlKDIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVVzZXJQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXNlclByb2plY3RzID0gZ2V0UHJvamVjdHMoKS5zbGljZSgyKTtcclxuICAgICAgICB1cGRhdGVTY3JlZW4oKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT09IFwiYnRuLWNsb3NlXCIpIHtcclxuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVTY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcHJvamVjdFRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5uYW1lO1xyXG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xyXG4gICAgICAgIGRpc3BsYXlEZWZhdWx0UHJvamVjdHMoKTtcclxuICAgICAgICBkaXNwbGF5VXNlclByb2plY3RzKCk7XHJcbiAgICAgICAgdXBkYXRlVG9kYXlMaXN0KHRvZGF5VGFza3MsIGFsbFRhc2tzKTtcclxuICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuXHJcbiAgICAgICAgZGVmYXVsdFByb2plY3RzTGlzdC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YXNldC5wcm9qZWN0SWQgPT09IHNlbGVjdGVkUHJvamVjdC5pZClcclxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBlbHNlIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1c2VyUHJvamVjdHNMaXN0LmNoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhc2V0LnByb2plY3RJZCA9PT0gc2VsZWN0ZWRQcm9qZWN0LmlkKVxyXG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGVsc2Ugbm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1haW5EaXNwbGF5LmNsYXNzTGlzdC50b2dnbGUoXHJcbiAgICAgICAgICAgIFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG9wZW5Nb2RhbChmb3JtKTtcclxuICAgICAgICB0aXRsZS5mb2N1cygpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZvcm1DbGljayk7XHJcbiAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRm9ybUNsaWNrKTtcclxuICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcclxuICAgIHNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVNpZGViYXJDbGljayk7XHJcbiAgICBtYWluRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFpbkRpc3BsYXlDbGljayk7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBZGRQcm9qZWN0KTtcclxuXHJcbiAgICAvLyBJbml0aWFsIHNjcmVlbiB1cGRhdGVcclxuICAgIHVwZGF0ZVNjcmVlbigpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cmlidXRlcyA9IHt9LCB0ZXh0Q29udGVudCA9IFwiXCIpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcclxuICAgIH1cclxuICAgIGlmICh0ZXh0Q29udGVudCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG4iLCJjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbmNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuTW9kYWwgPSBmdW5jdGlvbiAobW9kYWxDb250ZW50KSB7XHJcbiAgICBtb2RhbC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiLCBcImFuaW1hdGVfX3pvb21PdXRcIik7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fem9vbUluXCIpO1xyXG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX196b29tSW5cIik7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZV9fem9vbU91dFwiKTtcclxuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gaGFuZGxlcigpIHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgICAgICBtb2RhbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB0YXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdChpZCwgbmFtZSkge1xyXG4gICAgY29uc3QgdGFza3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSwgaWQpIHtcclxuICAgICAgICBpZiAoIWlkKSBpZCA9IG5hbm9pZCgpO1xyXG5cclxuICAgICAgICBsZXQgcGFyc2VkRHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xyXG4gICAgICAgIGlmIChpc05hTihwYXJzZWREdWVEYXRlLnZhbHVlT2YoKSkpIHBhcnNlZER1ZURhdGUgPSBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayhpZCwgdGl0bGUsIGRlc2MsIHBhcnNlZER1ZURhdGUsIHByaW9yaXR5LCBkb25lKTtcclxuICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhc2soaWQpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKTtcclxuICAgICAgICB0YXNrcy5zcGxpY2UoMCwgdGFza3MubGVuZ3RoLCAuLi51cGRhdGVkVGFza3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByaW50VGFza3MoKSB7XHJcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclRhc2tzKCkge1xyXG4gICAgICAgIHRhc2tzLnNwbGljZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFRhc2soaWQsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSBnZXRUYXNrKGlkKTtcclxuICAgICAgICBpZiAoIXRhc2tPYmopIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHBhcnNlZER1ZURhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VkRHVlRGF0ZS52YWx1ZU9mKCkpKSBwYXJzZWREdWVEYXRlID0gXCJcIjtcclxuXHJcbiAgICAgICAgdGFza09iai50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRhc2tPYmouZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGFza09iai5kdWVEYXRlID0gcGFyc2VkRHVlRGF0ZTtcclxuICAgICAgICB0YXNrT2JqLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGFkZFRhc2ssXHJcbiAgICAgICAgZGVsZXRlVGFzayxcclxuICAgICAgICBwcmludFRhc2tzLFxyXG4gICAgICAgIGdldFRhc2ssXHJcbiAgICAgICAgZ2V0VGFza3MsXHJcbiAgICAgICAgZWRpdFRhc2ssXHJcbiAgICAgICAgY2xlYXJUYXNrcyxcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiO1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBzdG9yYWdlID0gc3RvcmUoKTtcclxubGV0IHByb2plY3RzID0gW107XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG5cclxuICAgIGlmIChzdG9yZWRQcm9qZWN0cykge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7XHJcbiAgICAgICAgcHJvamVjdHMgPSBwYXJzZWRQcm9qZWN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvaiA9IHByb2plY3QoaXRlbS5pZCwgaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgaXRlbS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PlxyXG4gICAgICAgICAgICAgICAgcHJvai5hZGRUYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZG9uZSxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrLmlkXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxubG9hZFByb2plY3RzKCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplUHJvamVjdHMgPSBwcm9qZWN0cy5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgIHRhc2tzOiBpdGVtLmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogdGFzay5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2M6IHRhc2suZGVzYyxcclxuICAgICAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSxcclxuICAgICAgICAgICAgZG9uZTogdGFzay5kb25lLFxyXG4gICAgICAgIH0pKSxcclxuICAgIH0pKTtcclxuICAgIHN0b3JhZ2Uuc3RvcmVJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplUHJvamVjdHMpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0QnlJZCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3QgZm91bmQgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBmb3VuZCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XHJcbiAgICByZXR1cm4gZm91bmQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IG5hbm9pZCgpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QoaWQsIG5hbWUpO1xyXG4gICAgcHJvamVjdHMgPSBbLi4ucHJvamVjdHMsIG5ld1Byb2plY3RdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaWQpID0+IHtcclxuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBpZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpbnRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChpZCwgbmV3TmFtZSkgPT4ge1xyXG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcclxuICAgICAgICBwcm9qZWN0LmlkID09PSBpZCA/IHsgLi4ucHJvamVjdCwgbmFtZTogbmV3TmFtZSB9IDogcHJvamVjdDtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yZSgpIHtcclxuICAgIGNvbnN0IHN0b3JlSXRlbSA9IChrZXksIHZhbHVlKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgIGNvbnN0IGdldEl0ZW0gPSAoa2V5KSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAgIHJldHVybiB7IHN0b3JlSXRlbSwgZ2V0SXRlbSB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2soXHJcbiAgICBpZCxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzYyA9IFwiXCIsXHJcbiAgICBkdWVEYXRlID0gbnVsbCxcclxuICAgIHByaW9yaXR5ID0gXCJwMVwiLFxyXG4gICAgZG9uZSA9IGZhbHNlXHJcbikge1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBkZXNjLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZG9uZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5ld1Rhc2s7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2RvbVV0aWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9ybUZvb3RlciB9IGZyb20gXCIuL3Rhc2tGb3JtRm9vdGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFza0Zvcm0gPSBmdW5jdGlvbiAoYnRuVGV4dCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHtcclxuICAgICAgICBhY3Rpb246IFwiXCIsXHJcbiAgICAgICAgY2xhc3M6IGJ0blRleHQuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLnRvTG93ZXJDYXNlKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcclxuICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICBuYW1lOiBcInRpdGxlXCIsXHJcbiAgICAgICAgaWQ6IFwidGl0bGVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJUaXRsZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInBvcHBpbnMtYm9sZFwiLFxyXG4gICAgICAgIHJlcXVpcmVkOiBcInRydWVcIixcclxuICAgIH0pO1xyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XHJcbiAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGlkOiBcImRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcclxuICAgIH0pO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcblxyXG4gICAgY29uc3Qgb3RoZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XHJcbiAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgbmFtZTogXCJkdWVEYXRlXCIsXHJcbiAgICAgICAgaWQ6IFwiZHVlRGF0ZVwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwge1xyXG4gICAgICAgIG5hbWU6IFwicHJpb3JpdHlcIixcclxuICAgICAgICBpZDogXCJwcmlvcml0eVwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdGllcyA9IFtcIlByaW9yaXR5MVwiLCBcIlByaW9yaXR5MlwiLCBcIlByaW9yaXR5M1wiLCBcIlByaW9yaXR5NFwiXTtcclxuICAgIHByaW9yaXRpZXMuZm9yRWFjaCgocHJpb3JpdHksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgXCJvcHRpb25cIixcclxuICAgICAgICAgICAgeyB2YWx1ZTogYHAke2luZGV4ICsgMX1gIH0sXHJcbiAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZm9ybUZvb3RlciA9IGNyZWF0ZUZvcm1Gb290ZXIoYnRuVGV4dCk7XHJcblxyXG4gICAgb3RoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XHJcbiAgICBvdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcmlvcml0eSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdGhlckNvbnRhaW5lcik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Gb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vZG9tVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm1Gb290ZXIgPSBmdW5jdGlvbiAoYnRuVGV4dCkge1xyXG4gICAgY29uc3QgZm9ybUZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtb2RhbC1mb290ZXJcIiB9KTtcclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgXCJidXR0b25cIixcclxuICAgICAgICB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzOiBcImJ0bi1jbG9zZVwiIH0sXHJcbiAgICAgICAgXCJDYW5jZWxcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1haW5CdG4gPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzczogYnRuVGV4dC5zcGxpdChcIiBcIikuam9pbihcIi1cIikudG9Mb3dlckNhc2UoKSB9LFxyXG4gICAgICAgIGJ0blRleHRcclxuICAgICk7XHJcbiAgICBmb3JtRm9vdGVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcbiAgICBmb3JtRm9vdGVyLmFwcGVuZENoaWxkKG1haW5CdG4pO1xyXG5cclxuICAgIHJldHVybiBmb3JtRm9vdGVyO1xyXG59O1xyXG4iLCJpbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy90cmFzaC0yLnN2Z1wiO1xyXG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL2VkaXQtMy5zdmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0YXNrUmVuZGVyZXIgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICBjb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcclxuICAgIHRhc2tCb3guc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIGAke29iai5pZH1gKTtcclxuXHJcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XHJcbiAgICBkZWxldGVCdG4uc3JjID0gdHJhc2hJY29uO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImRlbGV0ZVwiKTtcclxuICAgIGVkaXRCdG4uc3JjID0gZWRpdEljb247XHJcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImVkaXRcIik7XHJcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XHJcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvYmouZGVzYztcclxuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcclxuXHJcbiAgICBpZiAob2JqLmR1ZURhdGUpXHJcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gYER1ZTogJHtvYmouZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICAgICAgICAgIFwiZW4tR0JcIlxyXG4gICAgICAgICl9YDtcclxuICAgIGR1ZURhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XHJcblxyXG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IG9iai5kb25lO1xyXG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImRvbmUtc3RhdHVzXCIpO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFza1wiKTtcclxuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFza1wiKTtcclxuXHJcbiAgICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVFbGVtZW50KTtcclxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xyXG4gICAgdGFza0JveC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcclxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tCb3g7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB1cGRhdGVUb2RheUxpc3QgPSAodG9kYXlUYXNrcywgYWxsVGFza3MpID0+IHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHRvZGF5VGFza3MuY2xlYXJUYXNrcygpO1xyXG4gICAgYWxsVGFza3MuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgJiZcclxuICAgICAgICAgICAgdGFzay5kdWVEYXRlLnRvRGF0ZVN0cmluZygpID09PSB0b2RheS50b0RhdGVTdHJpbmcoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0b2RheVRhc2tzLmFkZFRhc2soXHJcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdGFzay5kZXNjLFxyXG4gICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcclxuICAgICAgICAgICAgICAgIHRhc2suZG9uZSxcclxuICAgICAgICAgICAgICAgIHRhc2suaWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXJsQWxwaGFiZXQgYXMgc2NvcGVkVXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuZXhwb3J0IGxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgbGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuZXhwb3J0IGxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PiB7XG4gIGxldCBpZCA9ICcnXG4gIGxldCBieXRlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpXG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICBpZCArPSBzY29wZWRVcmxBbHBoYWJldFtieXRlc1tzaXplXSAmIDYzXVxuICB9XG4gIHJldHVybiBpZFxufVxuIiwiZXhwb3J0IGNvbnN0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFVJQ29udHJvbGxlciBmcm9tIFwiLi9VSUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgZ2V0UHJvamVjdEJ5TmFtZSB9IGZyb20gXCIuL3Byb2plY3RDb250cm9sbGVyXCI7XHJcblxyXG5pZiAoIWdldFByb2plY3RCeU5hbWUoXCJBbGxcIikpIHtcclxuICAgIGNyZWF0ZVByb2plY3QoXCJBbGxcIik7XHJcbiAgICBjcmVhdGVQcm9qZWN0KFwiVG9kYXlcIik7XHJcbn1cclxuXHJcblVJQ29udHJvbGxlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=