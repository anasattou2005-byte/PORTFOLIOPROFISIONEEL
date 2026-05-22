<?php

$conn = new mysqli("localhost", "root", "", "contact_form");

if ($conn->connect_error){
    $message = "Connection failed: " . $conn->connect_error;
    echo "<script>window.parent.postMessage({ type: 'contact-result', status: 'error', message: " . json_encode($message) . " }, '*');</script>";
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    if ($name === '' || $email === '' || $subject === '' || $message === '') {
        echo "<script>window.parent.postMessage({ type: 'contact-result', status: 'error', message: 'Please fill in all fields.' }, '*');</script>";
        exit;
    }

    $sql = "INSERT INTO messages (name, email, subject, message)
            VALUES ('$name', '$email', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>window.parent.postMessage({ type: 'contact-result', status: 'success', message: 'Message sent successfully!' }, '*');</script>";
    } else {
        $errorMessage = "Error: " . $conn->error;
        echo "<script>window.parent.postMessage({ type: 'contact-result', status: 'error', message: " . json_encode($errorMessage) . " }, '*');</script>";
    }
}

?>
