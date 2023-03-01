<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('info@yanakiev.website', 'Заявка с портфолио yanakiev.website'); // Указать нужный E-mail
	//Кому отправить
	$mail->addAddress('yanakiiev@gmail.com'); // Указать нужный E-mail
	//Тема письма
	$mail->Subject = 'Сообщение с сайта"';

	//Тело письма
	$body = '<h1>Новое письмо:</h1>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-amil:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['text']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['text'].'</p>';
	}			
	

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>