<?php require 'class.simple_mail.php';
$name=$_POST['name'];
$company=$_POST['company'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$message=$_POST['message'];
/* @var SimpleMail $mail */
$mail = new SimpleMail();
$mail->setTo('kshirley@88brandpartners.com', 'kshirley@88brandpartners.com')
     ->setSubject('Test Message')
     ->setFrom('no-reply@millennial-myth.com', 'no-reply@millenniall-myth.com')
     ->addGenericHeader('X-Mailer', 'PHP/' . phpversion())
     ->addGenericHeader('Content-Type', 'text/html; charset="utf-8"')
     ->setMessage('Name:'.$name.'<br /> Company:'.$company.'<br /> E-mail:'.$email.'<br /> Phone:'.$phone.'<br /> Message:'.$message)
     ->setWrap(78);
$send = $mail->send();
//echo $mail->debug();
if ($send) {
    echo 'Email was sent successfully!';
} else {
    echo 'An error occurred. We could not send email';
}