<?php
$db = new PDO('mysql:host=localhost; dbname=lib', 'root', '123kjubrf');
$db->exec("SET NAMES utf8");
$sname = $_POST['sname'];
$fname = $_POST['fname'];
$adress = $_POST['adress'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$stmt = $db->prepare("INSERT INTO readers VALUES ('','$sname','$fname','$adress','$email','$phone')");
$stmt->execute();
$host  = $_SERVER['HTTP_HOST'];
header("Location: http://" . $host."/lib/tables/readers.php");