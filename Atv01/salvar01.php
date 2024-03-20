<?php

$nome = $_POST["nome"];
$email = $_POST["email"];
$veiculo = $_POST["veiculo"];

echo $nome; echo $email; echo $veiculo;

$arquivo = fopen("clientes01.txt","a");
fwrite($arquivo, $nome . ";" );
fwrite($arquivo, $email . ";");
fwrite($arquivo, $veiculo . ";" . "\n");
fclose($arquivo);

header('locarion:index.php:')

?>