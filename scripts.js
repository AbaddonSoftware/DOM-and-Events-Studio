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
    let positionY = 0;

    document.addEventListener("click", function(event) {
        switch (Number(spaceShuttleHeight.innerHTML)) {
            case 0:
                if (flightStatus.innerHTML !== "Mission Aborted.") {
                    flightStatus.innerHTML = "The shuttle has landed.";
                }
                positionX = 0;
                positionY = 0;
                rocket.style.transform = "translate(0px, 0px)";
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
        if (rocket.getBoundingClientRect().left > (shuttleBackground.getBoundingClientRect().left)) {
            positionX -= 10;
            rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }
        event.stopPropagation();
    });

    right.addEventListener("click", function(event) {
        if (rocket.getBoundingClientRect().right < shuttleBackground.getBoundingClientRect().right) {
            positionX += 10;
            rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }
        event.stopPropagation();
    });

    up.addEventListener("click", function(event) {
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();
        if (rocket.getBoundingClientRect().top > shuttleBackground.getBoundingClientRect().top) {
            positionY -= 10;
            rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }
    });

    down.addEventListener("click", function(event) {
        if (rocket.getBoundingClientRect().bottom < shuttleBackground.getBoundingClientRect().bottom) {
            positionY += 10;
            rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }
        let height = Number(spaceShuttleHeight.innerHTML);
        if (height > 0) {
            spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString();
        }
    });
}


window.onload = init;
