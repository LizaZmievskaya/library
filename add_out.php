<?php
$db = new PDO('mysql:host=localhost; dbname=lib', 'root', '123kjubrf');
$db->exec("SET NAMES utf8");
$odate = $_POST['odate'];
$rdate = $_POST['rdate'];
$book = $_POST['book'];
$reader = $_POST['reader'];
//Информация об авторе
$stmt1 = $db->prepare("SELECT authors.author_id FROM `books` LEFT JOIN `authors` ON books.author_id=authors.author_id WHERE book_id='$book'");
$stmt1->execute();
$result = $stmt1->fetchAll();
$author_id = $result[0]['author_id'];
//Добавление записи
$stmt = $db->prepare("INSERT INTO output VALUES ('','$odate','$rdate','$book','$reader','$author_id')");
$stmt->execute();
$host  = $_SERVER['HTTP_HOST'];
header("Location: http://" . $host."/lib/tables/output.php");