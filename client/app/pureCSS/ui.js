/* imported from pureCSS (not included in npm package)
    for side menu behavior
    Modified for botlbot.
*/
import SideMenu from './sideMenu.css';

window.onload = function() {
    var layout   = document.getElementById(`${SideMenu["layout"]}`),
        menu     = document.getElementById(`${SideMenu["menu"]}`),
        menuLink = document.getElementById(`${SideMenu["menuLink"]}`);

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = `${SideMenu["active"]}`;

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    };
};
