// code your solution here
function saturdayFun(Activity="roller-skate") {
    return `This Saturday, I want to ${Activity}!`
}

let mondayWork = function(Activity="go to the office"){
    return `This Monday, I will ${Activity}.`
}

let wrapAdjective = function(style="*"){
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }
}
