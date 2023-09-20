<?php
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$coment = $_POST['coment'];

$token = "6077530287:AAGJGKqNPkOtUOc6rFrTQ0MmP04pCq6O6pA";

$chat_id = "-925130244";
$arr = array(
  'Name: ' => $name,
  'Phone: ' => $phone,
  'Email' => $email,
  'Coment: ' => $coment
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
