<?php

print_r($_POST);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';


$from = "webmaster@localhost.fr";
$to = "baptiste.olagnon@viacesi.fr";
$subject = "Message du formulaire";
$message = "<br>Nom : " . $_POST["nom"] . "<br> Prénom : " .    $_POST["prenom"] . "<br> Email : " . $_POST["email"] . "<br> Message : " . $_POST["message"];
 
print_r($message);

$mail = new PHPmailer(exceptions: true);

try{
    $mail -> isSMTP();
    $mail -> Host = "in-v3.mailjet.com";
    $mail -> SMTPAuth = true;
    $mail -> Username = "2eaf3d0afc2e5a33ad83c313ec8bb1f7";
    $mail -> Password = "3423b4f81ae04c00325065b2252077e8";
    $mail -> SMTPSecure = "tls";
    $mail -> Port = 587;

    $mail -> setFrom($from, $_POST["nom"]);
    $mail -> addAddress($to);

    $mail -> isHTML(true);
    $mail -> Subject = $subject;
    $mail -> Body = $message;

    $mail -> Send();


    header('location: contact-success.html');
    echo "<br>Mail envoyé";
} catch (Exception $e) {
    echo "Erreur : {$mail->ErrorInfo}";
}
