

const form =
    document.getElementById("registrationForm");


// ==========================================
// REGISTER STUDENT
// ==========================================

function registerStudent() {

    // Get personal information

    const firstName =
        document.getElementById("firstName").value.trim();

    const lastName =
        document.getElementById("lastName").value.trim();

    const studentNumber =
        document.getElementById("studentNumber").value.trim();

    const dateOfBirth =
        document.getElementById("dateOfBirth").value;


    // Get gender

    const selectedGender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    if (!selectedGender) {

        alert("Please select your gender.");

        return;
    }


    const gender =
        selectedGender.value;


    // Get contact information

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const address =
        document.getElementById("address").value.trim();


    // Get academic information

    const course =
        document.getElementById("course").value;

    const year =
        document.getElementById("year").value;


    // Get account information

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // Check password

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    // Check password length

    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    // Check username

    if (username.length < 3) {

        alert(
            "Username must contain at least 3 characters."
        );

        return;
    }


    // Create student object

    const student = {

        firstName: firstName,
        lastName: lastName,
        studentNumber: studentNumber,
        dateOfBirth: dateOfBirth,
        gender: gender,
        email: email,
        phone: phone,
        address: address,
        course: course,
        year: year,
        username: username,
        password: password

    };


    // Check if a student already exists

    const existingStudent =
        localStorage.getItem("student");


    if (existingStudent) {

        const replaceStudent =
            confirm(
                "A student is already registered.\n\n" +
                "Do you want to replace the existing student?"
            );


        if (!replaceStudent) {

            return;
        }
    }


    // Save student

    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );


    // Success message

    alert(
        "Registration successful!\n\n" +
        "You can now login."
    );


    // Clear form

    form.reset();


    // Go to login page

    window.location.href = "loginPage.html";
}


// ==========================================
// CONNECT FORM TO FUNCTION
// ==========================================

if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            registerStudent();

        }
    );
}