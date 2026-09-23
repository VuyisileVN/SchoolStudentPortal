// ==========================================
// CHECK LOGIN
// ==========================================

const loggedIn =
    localStorage.getItem("loggedIn");


if (loggedIn !== "true") {

    // Student is not logged in

    window.location.href =
        "login.html";
}


// ==========================================
// GET CURRENT STUDENT
// ==========================================

const savedStudent =
    localStorage.getItem("currentStudent");


if (savedStudent) {

    const student =
        JSON.parse(savedStudent);


    // ==========================================
    // DISPLAY NAME
    // ==========================================

    document.getElementById(
        "welcomeMessage"
    ).textContent =
        "Welcome, " +
        student.firstName +
        " " +
        student.lastName;


    // ==========================================
    // DISPLAY PROFILE
    // ==========================================

    document.getElementById(
        "studentName"
    ).textContent =
        student.firstName +
        " " +
        student.lastName;


    document.getElementById(
        "studentNumber"
    ).textContent =
        student.studentNumber;


    document.getElementById(
        "studentEmail"
    ).textContent =
        student.email;


    document.getElementById(
        "studentPhone"
    ).textContent =
        student.phone;


    document.getElementById(
        "studentCourse"
    ).textContent =
        student.course;


    document.getElementById(
        "studentYear"
    ).textContent =
        student.year;
}


// ==========================================
// LOGOUT
// ==========================================

const logoutButton =
    document.getElementById("logoutButton");


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function(event) {

            event.preventDefault();


            // Remove login information

            localStorage.removeItem(
                "loggedIn"
            );

            localStorage.removeItem(
                "currentStudent"
            );


            // Tell student

            alert(
                "You have been logged out."
            );


            // Return to login

            window.location.href =
                "login.html";

        }
    );
}