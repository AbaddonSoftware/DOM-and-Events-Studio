// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let missionAbort = document.getElementById("missionAbort");
    let land = document.getElementById("landing");
    let takeOff = document.getElementById("takeoff");
    let left = document.getElementById("leftButton");
    let right = document.getElementById("rightButton");
    let up = document.getElementById("upButton");
    let down = document.getElementById("downButton");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let positionX = 0;

    document.addEventListener("click", function(event) {
        switch (Number(spaceShuttleHeight.innerHTML)) {
            case 0:
                if (flightStatus.innerHTML !== "Mission Aborted.") {
                    flightStatus.innerHTML = "The shuttle has landed.";
                }
                positionX = 0;
                rocket.style.transform = "translate(0px)";
                shuttleBackground.style.backgroundColor = "green";
                break;
            default:
                shuttleBackground.style.backgroundColor = "blue";
                flightStatus.innerHTML = "Shuttle in flight";
                break;
        }
    });

    takeOff.addEventListener("click", function(event) {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {
            spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();
        }
    });

    land.addEventListener("click", function(event) {
        alert("The shuttle is landing. Landing gear engaged.");
        spaceShuttleHeight.innerHTML = "0";
    });

    missionAbort.addEventListener("click", function(event) {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission Aborted.";
            spaceShuttleHeight.innerHTML = "0";
        }
    });

    left.addEventListener("click", function(event) {
        if (positionX > 0 - (shuttleBackground.getBoundingClientRect().width / 2)) {
            positionX -= 10;
            rocket.style.transform = "translateX(" + positionX + "px)";

        }
        event.stopPropagation();
    });

    right.addEventListener("click", function(event) {
        if (positionX + Number(rocket.style.width) < shuttleBackground.getBoundingClientRect().width / 2) {
            positionX += 10;
            rocket.style.transform = "translateX(" + positionX + "px)";
        }
        event.stopPropagation();
    });

    up.addEventListener("click", function(event) {
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();
    });

    down.addEventListener("click", function(event) {
        let height = Number(spaceShuttleHeight.innerHTML);
        if (height > 0) {
            spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString();
        }
    });
}


window.onload = init;
