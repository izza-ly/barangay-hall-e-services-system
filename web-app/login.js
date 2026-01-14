function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (username === "" || password === "" || role === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        errorMsg.textContent =
            "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
        return;
    }

    // TEMPORARY accounts (no database yet)
    if (username === "admin" && password === "Admin@123" && role === "admin") {
        localStorage.setItem("loggedInUser", username);
        localStorage.setItem("userRole", role);
        window.location.href = "admin-dashboard.html";
    } 
    else if (username === "staff" && password === "Staff@123" && role === "staff") {
        localStorage.setItem("loggedInUser", username);
        localStorage.setItem("userRole", role);
        window.location.href = "staff-dashboard.html";   // ✅ CONNECTED HERE
    } 
    else if (username === "resident" && password === "Resident@123" && role === "resident") {
        localStorage.setItem("loggedInUser", username);
        localStorage.setItem("userRole", role);
        window.location.href = "resident-dashboard.html";
    }
    else {
        errorMsg.textContent = "Invalid login credentials.";
    }


    function forgotPassword() {
    const username = prompt("Enter your username to reset your password:");

    if (username) {
        // Demo logic only (replace with real backend later)
        alert("Password reset link has been sent to your registered email (demo only).");
    }
}

}

