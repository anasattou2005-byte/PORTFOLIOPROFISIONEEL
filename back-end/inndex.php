<?php



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            text-align: center;
            margin-top: 100px;
           
            font-size: 3rem;
        }
        span{
            color: green;
        }
    </style>
</head>
<body>
<p>
<?php 

if (
    isset($_POST['name']) &&
    isset($_POST['email']) &&
    isset($_POST['subject']) &&
    isset($_POST['message']) &&
    
    !empty($_POST['name']) &&
    !empty($_POST['email']) &&
    !empty($_POST['subject']) &&
    !empty($_POST['message'])
) {

    // Protection XSS
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    echo " Thank you for your message <span>$name</span> , we will get back to you soon.";
    echo "<style> p { color: black; } </style> <p> <br> Your message : <span>$message</span> <br> has been received.</p>";
} else {

    echo "<style>p { color: red; } </style> Please fill in all fields.";

}

?>
</p>


    
</body>
</html>