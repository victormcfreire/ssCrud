<?php
date_default_timezone_set('America/Sao_Paulo');

$post = file_get_contents("php://input");
$user = json_decode($post);

if(!empty($post)){
	$user = get_object_vars($user);
	$array_users = unserialize($_COOKIE['api_users']);
	$user['id'] = count($array_users)+1;
	$array_users[] = $user;
	setcookie('api_users', serialize($array_users));
}

if(isset($_COOKIE['api_users'])){

	$array_users = unserialize($_COOKIE['api_users']);

	if(isset($_GET['id'])){
		$indice = $_GET['id']-1;
		$user = isset($array_users[$indice]) ? $array_users[$indice] : 'Esse usuário não existe';
		echo json_encode($user);
	}else{		
	  echo json_encode($array_users);
	}
}