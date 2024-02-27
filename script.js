document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are valid (for demonstration, let's say they should not be empty)
    if (username.trim() === "" || password.trim() === "") {
        alert("Username and password cannot be empty!");
    } else {
        alert("Login successful!");
        // Here you can redirect to another page or perform other tasks
    }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Kiểm tra tính hợp lệ của thông tin đăng ký
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
    alert("Đăng ký thành công!");
  });