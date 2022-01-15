// code your solution here
function saturdayFun (someActivity = "roller-skate") { 
    return "This Saturday, I want to " + someActivity + "!";
}

function mondayWork (someAction = "go to the office") {
    return "This Monday, I will " + someAction + ".";
}

function wrapAdjective (specialFlair = "*") {
    return function (howeverIwish="special") {
        return `You are ${specialFlair}${howeverIwish}${specialFlair}!`;
      };
}
 