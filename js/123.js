// Обработчик для кнопки "Регистрация"
document.getElementById('register-button').addEventListener('click', function() {
	// Получаем введенные пользователем данные (логин и пароль)
	var username = document.getElementById('register-username').value;
	var password = document.getElementById('register-password').value;

	// Отправляем данные на сервер для регистрации
	// В этом месте должна быть AJAX-запрос к серверу для сохранения данных в базе

	// После успешной регистрации, можно перенаправить пользователя на страницу входа
	window.location.href = '/login.html';
});

// Обработчик для кнопки "Вход"
document.getElementById('login-button').addEventListener('click', function() {
	// Получаем введенные пользователем данные (логин и пароль)
	var username = document.getElementById('login-username').value;
	var password = document.getElementById('login-password').value;

	// Отправляем данные на сервер для аутентификации
	// В этом месте должна быть AJAX-запрос к серверу для проверки данных

	// После успешного входа, можно выполнить необходимые действия, например, перенаправить пользователя на его личную страницу
	window.location.href = '/user/dashboard.html';
});
