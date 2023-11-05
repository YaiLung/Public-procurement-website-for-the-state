<?php
// Подключение к базе данных MySQL
$host = "localhost";
$username = "root";
$password = "";
$database = "work";

$connection = mysqli_connect($host, $username, $password, $database);

// Проверка подключения
if (!$connection) {
    die("Ошибка подключения: " . mysqli_connect_error());
}

// Получение данных из формы
$name = $_POST['name'];
$pass = $_POST['pass'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$share_link = $_POST['share_link'];

// Вставка данных в базу данных
$sql = "INSERT INTO users (name, pass, email, phone, company, share_link) VALUES ('$name', '$pass', '$email', '$phone', '$company', '$share_link')";

if (mysqli_query($connection, $sql)) {
    // Редирект на страницу "TRM __ Tenders Relationship Management.html"
    header("Location: TRM __ Tenders Relationship Management.html");
    exit; // Убедитесь, что после перенаправления код больше не выполняется
} else {
    echo "  " . $sql . "<br>" . mysqli_error($connection);
}

// Закрытие соединения с базой данных
mysqli_close($connection);
?>