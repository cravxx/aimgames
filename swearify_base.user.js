// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   AIM_SWEAR SWANS ALBUMS
// @include     http://aimgames.forummotion.com/*                     
// @version     0.0.0
// @grant       none
// @icon        data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAKUUExURf/////m5v93d/+oqP/Bwf+Dg/+cnP9FRf9eXv9RUf9qav/NzeLi4tjY2PHx8fz8/P+Pj8XExMPBwdGvr/KuruyOjtmmpuXl5fLy8snJycLCwsrDw+1ra/+1tfvk5OasrMi2ts29vfj4+P6QkNHR0elzc+np6cq9vcvHx++BgcbGxsi5udGwsOmTk/9GRtzHx8PDw8LBwcm5ufPz8+CXl8XFxdm4uPahoc7OztS6utvb2/39/dfX1/7+/vt7e9zR0dDQ0O/v78TExOvr6+ibm9/f3/7l5fx7e9SsrNLLy/54eP3BwdiUlM21tf94eNqpqcS+vtPT09apqcPAwOTk5MjIyNzc3My2tt7T0+v3++P0+N2mq+BPVOX1+epMT+qoq8q0tc3Nzc7Jyca7u93S0hbF9Aa/8QK+8AO56gK66wK97z++4LrCxMHCwsDCwsDCw7zDxb7DxcnW2dn0+9v0++L2++b3/PL7/QDK/wDL/wDH/QDJ/5LD0b7Cw7vCxLfCxV260wGx4QOv3QOt2wep1hey3ADF+gDG/ADG+x3F87XCxk662ACz5ACw4ACv3wCu3QCt3ACx4gCy4wC36YG/z319fScnJzMzM7y8vLzCxDLF7QDG/QDF+wDI/wCp1wCs2gCs2wCr2gCv3rTBxF1fYBMUFBQUFKenp7/Cw7PBxSi85QC67QC56wC87wC/8wCx4QCz4wCy4rzBwy8vLzk5Oa2trbrBwySz2gC15gCu3gC05QGr2r3Bw7/CwiOu0wCt3QCp2BGt2LnBwxas1QCm1ACo1ky206O+xgCq2ACn1QDC9wDE+VPD4bfBxJzAyhO04QC+8l/C3ZXAzA6+7wC98QDA9XK70IW+zQe04wC57AC88AC/8k0VJ2YAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVQ4y5WRZ1cTURCGZ+9ucrMbAUVRGBsqomILKhYUG/au2Huv7GIXG3ZjSSKiWDESK4pkwUpUVKwIFuztz3i3wAnhg8c5Z3fnvPPcmbn7AvwrOEIID8DzHOF5XiCCRdBkwQIWQSAWlhJiJWClBIhNtAKVqA7wlFLeIlB2loii3SraGEBFDiiVoBYAi0azCRzPKI5QamcANQHQTrOHYyXQ3yLbhvXUdBOQbMa8/4gGYeERoZp2q4bsWoR9wxtFNm4CdrYKRDVtZqJUEmxsL2256BjE5i1aihJp1To2sk1b/X9oe7KFQKJSuzhEjG3PAD6+A2LHGkDSAfaDOiUgdu7SlQN7t+4OTOzR0xzBsxEW1oH2SmIdsDcn0T59+yE6ko0OtdE/RqvjgBRu4CA9GxxynSFDNdWRnAKpSXUB07hhCZqaNHzEyFGJOjB6jGZvrXFjx0Xqclx01Hg9wfgJmr01QMTESbrqmJw6Jc0AwnR7a3yZOs1okDA9eYYxAWfq9sKs2XPmzpu/YGGaATgWLV5i1HGpbi8sW75i5arVa9JlRVcz1q4z67h+w8ZNm7dA5tbMzG3bd2TIO2Umylm7ZLOu7N6zd9/+A3DQ6XQeOnxEkc1CBpqZctTl9hzLBs/xHNeJkwrmnjp9BoNCPnvufF7eBSd4L+b7Ll1GvHL12vWgslJw42bhrcIiP6jFrhLPbcTcO3fvBQPK/QelqjvwEPIDgcCjx1g/yp541Oz8p/DM5/OVK+Ylg+P5i5de7ysvqKrqfi3L9XqUvSn3eisq3oK/sqrqnSIX1C3LyvsPH3NU1eOGan915ScF5ZAGctbnL/5q/9dvUFzqLvmuoBJCyOk/fv4qLPr95y9qjLbDWeFJXAAAAABJRU5ErkJggg==
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify_filter.js
// ==/UserScript==

window.onload = function() {
   document.getElementById("frame_chatbox").contentWindow.document.getElementById("message").onkeypress = function (event) { /// If we are here, that means we are on the main page. So we set up a key press for the small chatbox
        var code = (event.keyCode) ? event.keyCode : event.which; /// Gets what key has been pressed
        if (code == 13) { /// 13 is enter
          filter_swears_chat(); /// These are the functions that run through the text and see what to do        }
    };
}
