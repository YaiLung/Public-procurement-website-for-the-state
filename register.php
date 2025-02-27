<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "work";

$connection = mysqli_connect($host, $username, $password, $database);
mysqli_set_charset($connection, "utf8mb4");

// Проверка подключения
if (!$connection) {
    die("Ошибка подключения: " . mysqli_connect_error());
}

// Получение данных из формы с защитой
$name = mysqli_real_escape_string($connection, $_POST['name']);
$pass = password_hash($_POST['pass'], PASSWORD_BCRYPT); // Хешируем пароль
$email = mysqli_real_escape_string($connection, $_POST['email']);
$phone = mysqli_real_escape_string($connection, $_POST['phone']);
$company = mysqli_real_escape_string($connection, $_POST['company']);
$share_link = mysqli_real_escape_string($connection, $_POST['share_link']);

// Проверяем, существует ли такой email
$check_query = "SELECT id FROM users WHERE email='$email'";
$result = mysqli_query($connection, $check_query);
if (mysqli_num_rows($result) > 0) {
    echo "<h2 style='color:red;'>Ошибка: этот email уже зарегистрирован!</h2>";
    exit;
}

// Вставка данных в базу
$sql = "INSERT INTO users (name, pass, email, phone, company, share_link) VALUES ('$name', '$pass', '$email', '$phone', '$company', '$share_link')";

if (mysqli_query($connection, $sql)) {
    echo "<h2 style='color:green;'>Вы успешно зарегистрированы!</h2>";
} else {
    echo "<h2 style='color:red;'>Ошибка: " . mysqli_error($connection) . "</h2>";
}

// Закрытие соединения
mysqli_close($connection);
?>
