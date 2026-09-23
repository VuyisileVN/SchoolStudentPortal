# School Student Portal

## 📚 About the Project

The **School Student Portal** is a simple web-based student management portal developed using **HTML, CSS, and JavaScript**.

The purpose of this project is to create a basic student portal where students can register an account, log in, and access their student information through a dashboard.

This project was created as a learning project to practise front-end web development and JavaScript programming.

## 🚀 Features

The Student Portal includes the following features:

* Student registration
* Student login
* Username and password validation
* Student profile
* Student number and contact information
* Course information
* Year of study
* Assignment information
* Academic results
* Announcements
* Logout functionality
* Responsive design for smaller screens
* Navigation between different sections

## 📝 Student Registration

Students can create an account by providing:

* First name
* Last name
* Student number
* Date of birth
* Gender
* Email address
* Phone number
* Address
* Course
* Year of study
* Username
* Password
* Password confirmation

The registration form also checks that the passwords match and that the username and password meet the required length.

## 🔐 Login System

After registration, students can use their username and password to log in.

The login system checks the registered student information and saves the login status when the credentials are correct.

After a successful login, the student is redirected to the dashboard.

## 🖥️ Student Dashboard

After logging in, students can access a dashboard containing:

* My Profile
* My Courses
* Assignments
* Academic Results
* Announcements
* Logout

The dashboard displays information about the currently logged-in student.

The profile section displays the student's name, student number, email, phone number, course and year of study.

## 💾 Data Storage

This project uses the browser's **localStorage** to store student information and login information.

The registered student is stored in local storage and retrieved when the student logs in.

The project also stores the current student's login information so that the dashboard can display the correct student details.

> **Note:** This is a learning project. It does not use a real database or secure server-side authentication. Passwords are stored in browser localStorage, so this approach should not be used for a real production student system.

## 🎨 Technologies Used

### HTML

Used to create the structure of the registration page, login page and student dashboard.

### CSS

Used to style the portal, including the header, navigation bar, forms, buttons, sections and responsive layout.

### JavaScript

Used to:

* Process student registration
* Validate form information
* Store student information
* Process login
* Check login status
* Display student information
* Handle logout

## 📁 Project Structure

```text
Student-Portal/
│
├── firstPage.html
├── loginPage.html
├── dashboard.html
│
├── portal.js
├── login.js
├── loggedIn.js
│
├── stylePortal.css
│
└── README.md
```

### File Description

| File              | Description                              |
| ----------------- | ---------------------------------------- |
| `firstPage.html`  | Student registration page                |
| `loginPage.html`  | Student login page                       |
| `dashboard.html`  | Student dashboard                        |
| `portal.js`       | Handles student registration             |
| `login.js`        | Handles student login                    |
| `loggedIn.js`     | Handles dashboard information and logout |
| `stylePortal.css` | Styles the website                       |
| `README.md`       | Project documentation                    |

## ▶️ How to Run the Project

1. Download or clone this repository.
2. Open the project folder in **Visual Studio Code**.
3. Make sure all HTML, CSS and JavaScript files are in the correct folder.
4. Open `firstPage.html` in a web browser.
5. Register a student account.
6. Go to the login page.
7. Log in using the username and password you registered with.
8. You will be taken to the student dashboard.

## 🎯 Purpose of the Project

This project was developed to improve my understanding of:

* HTML forms
* CSS styling
* JavaScript functions
* DOM manipulation
* Form validation
* Events
* `localStorage`
* Login and logout logic
* Linking multiple web pages
* Basic responsive web design

## 🔮 Future Improvements

Possible improvements for future versions include:

* Connecting the portal to a real database
* Secure password authentication
* Multiple student accounts
* Student registration numbers generated automatically
* Editing student profiles
* Adding and submitting assignments
* More detailed academic results
* Admin dashboard
* Student result search
* Backend development using Java, PHP, Node.js or another backend technology

## 👨‍💻 Author

**Vuyisile Nkosinathi Chill**

Computer Science Student

## 📄 License

This project was created for educational and learning purposes.
# SchoolStudentPortal
