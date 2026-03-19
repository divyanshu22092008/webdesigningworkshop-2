let fontSize = 16;
    let isVisible = true;

    function changeHeading() {
        const text = document.getElementById("headingInput").value;
        if (text !== "") {
            document.getElementById("heading").innerText = text;
        }
    }

    function changeBackground() {
        const body = document.body;
        body.style.backgroundColor =
        body.style.backgroundColor === "lightblue" ? "#f2f2f2" : "lightblue";
    }

    function increaseFont() {
        fontSize += 2;
        document.getElementById("paragraph").style.fontSize = fontSize + "px";
    }

    function toggleParagraph() {
        const para = document.getElementById("paragraph");
        isVisible = !isVisible;
        para.style.display = isVisible ? "block" : "none";
    }

    function resetAll() {
        document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
        document.getElementById("headingInput").value = "";
        document.querySelector(".container").style.backgroundColor = "#ffffff";
        document.body.style.backgroundColor = "#f2f2f2";
        fontSize = 16;
        document.getElementById("paragraph").style.fontSize = fontSize + "px";
        document.getElementById("paragraph").style.display = "block";
        isVisible = true;
    }