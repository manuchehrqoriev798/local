// export function checkAuth() {
// 	localStorage.setItem("token", "123");
// 	const token = localStorage.getItem("token");
// 	console.log("token", token);
// 	if (!token) {
// 		if (!location.pathname.endsWith("/login.html")) location = "/login.html";
// 		return;
// 	}
// 	// get the last url part
// 	if (location.pathname.endsWith("/editor.html")) {
// 		if (user === "student") {
// 			location = "/login.html";
// 		}
// 	}
// 	// check if token is valid, if not, redirect to login
// 	const { username, email, pass, userRole } = fetch('backend/users/me')
// 	const username = "admin";
// 	const userRole = "admin";
// 	if (userRole === "student") {
// 		// get the last url part
// 		const lastPart = location.pathname.split("/").pop();
// 		if (lastPart === "avatar.html") {
// 			location = "/login.html";
// 		}
// 	}
// }

// export async function login(event) {
// 	event.preventDefault();
// 	const username = event.target.username.value;
// 	const password = event.target.password.value;
// 	console.log("Username:", username);
// 	console.log("Password:", password);
// 	// send request to login and get jwt token
// }