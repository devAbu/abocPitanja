<?php

require ('connection/connect.php');

$id = $_REQUEST["ID"];
$feedback = $_REQUEST["text"];
$session = $_REQUEST["session"];

$sql = "INSERT INTO aboc (`text`, `session`) VALUES ('$feedback', '$session') ";

$exec = @mysqli_query($dbc, $sql);
    if ($exec) {
        echo '<ul><li>'.$id.'</li><li>'.$feedback.'</li><li>'.$session.'</li></ul>';
    } else {
        echo mysqli_error($dbc);
    }

?>