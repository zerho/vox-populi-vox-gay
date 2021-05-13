function changeBorder(className, color) {
    var elems = document.querySelectorAll(className);
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.border = "1px solid "+ color;
    }
}

changeBorder("span", "red");
changeBorder("p", "blue");
changeBorder("a", "orange");
changeBorder("h1, h2, h3, h4, h5, h6", "green");
changeBorder("div", "purple"); // TODO: need to check if contains text directly

