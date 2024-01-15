

let a = setInterval((e) => {
    let b = setTimeout((f) => {
        base.removeChild(hoursPlace);
        base.removeChild(minutesPlace);
        base.removeChild(secondsPlace);
    }, 985)
    let hours, minutes, seconds;

    // let y = [1, 1, 1];
    let f = setInterval(() => {
        y = []
        hours = new Date().getHours()
        minutes = new Date().getMinutes()
        seconds = new Date().getSeconds()
        y[0] = hours
        y[1] = minutes
        y[2] = seconds
    }, 300);
    hours = y[0];
    minutes = y[1];
    seconds = y[2];
    console.log(y)
    let secondsPlace = document.createElement("div")
    let minutesPlace = document.createElement("div")
    let hoursPlace = document.createElement("div")

    let base = document.body.getElementsByClassName("base")[0]
    console.log(base)

    if (hours < 10) {
        hoursPlace.innerHTML = "<p>" + "0" + hours + ":" + "</p>"
        base.append(hoursPlace)
        hoursPlace.setAttribute("class", "hours")
    }
    else {
        hoursPlace.innerHTML = "<p>" + hours + ":" + "</p>"
        base.append(hoursPlace)
        hoursPlace.setAttribute("class", "hours")
    }

    if (minutes < 10) {
        minutesPlace.innerHTML = "<p>" + "0" + minutes + ":" + "</p>"
        base.append(minutesPlace)
        minutesPlace.setAttribute("class", "minutes")
    }
    else {
        minutesPlace.innerHTML = "<p>" + minutes + ":" + "</p>"
        base.append(minutesPlace)
        minutesPlace.setAttribute("class", "minutes")
    }

    if (seconds < 10) {
        secondsPlace.innerHTML = "<p>" + "0" + seconds + "</p>"
        base.append(secondsPlace)
        secondsPlace.setAttribute("class", "seconds")
    }

    else {
        secondsPlace.innerHTML = "<p>" + seconds + " </p>"
        base.append(secondsPlace)
        secondsPlace.setAttribute("class", "seconds")
    }

}, 1000)
