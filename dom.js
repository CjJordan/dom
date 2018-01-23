var $ = function(sel) {
    var elem = document.querySelectorAll(sel);

    var text = function(str) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = str;
        }
    }

    var addClass = function(className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.add(className);
        }
    }

    var removeClass = function(className) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove(className);
        }
    }

    var on = function(action, cb) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(action, cb);
        }
    }

    var toggleClass = function(className) {
        for (var i = 0; i < elem.length; i++) {
            if (elem[i].className.includes(className)) {
                elem[i].classList.remove(className);
            } else {
                elem[i].classList.add(className);
            }
        }
    }


    var html = function(str) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = str;
        }
    }

    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        html: html
    }

    return publicAPI;
}