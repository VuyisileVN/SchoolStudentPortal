// ==========================================
// LOGIN FORM
// ==========================================

const loginForm =
    document.getElementById("loginForm");


// ==========================================
// LOGIN FUNCTION
// ==========================================

function loginStudent() {

    // Get username

    const username =
        document.getElementById(
            "loginUsername"
        ).value.trim();


    // Get password

    const password =
        document.getElementById(
            "loginPassword"
        ).value;


    // Get registered student

    const savedStudent =
        localStorage.getItem("student");


    // Check if student exists

    if (!savedStudent) {

        alert(
            "No student account found.\n\n" +
            "Please register first."
        );

        return;
    }


    // Convert saved data back into object

    const student =
        JSON.parse(savedStudent);


    // Check username and password

    if (
        username === student.username &&
        password === student.password
    ) {

        // Save login status

        localStorage.setItem(
            "loggedIn",
            "true"
        );


        // Save current student

        localStorage.setItem(
            "currentStudent",
            JSON.stringify(student)
        );


        // Show success message

        alert(
            "Login successful!\n\n" +
            "Welcome back, " +
            student.firstName +
            "!"
        );


        // Go to dashboard

        window.location.href =
            "dashboard.html";

    } else {

        alert(
            "Incorrect username or password."
        );
    }
}


// ==========================================
// CONNECT LOGIN FORM
// ==========================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            loginStudent();

        }
    );
}