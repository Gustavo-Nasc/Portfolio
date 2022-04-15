<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message  = $_POST["message"];

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require './PHPMailer.php';
    require './SMTP.php';
    require './Exception.php';
        
    $mail = new PHPMailer();
        
    try {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'smtp-mail.outlook.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'gustavo.ns@outlook.com.br';
        $mail->Password = '16nascgu';
        $mail->SMTPSecure = 'STARTTLS';
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';
        
        $mail->setFrom('gustavo.ns@outlook.com.br', 'Nova mensagem de Contato!');
        $mail->addAddress('gustavo.ns@outlook.com.br');
        $mail->addCC($email);

        $mail->Subject = 'Nova mensagem de Contato: ' . $subject;

        $mail->isHTML(true);
        $mail->Body = "
        <html>
        <head>
            <style>
                strong {
                    font-size: 20px;
                }

                p {
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <strong>Nome:</strong>
            <br>
            <p>$name</p>
            <br>
            <br>
            <strong>Assunto:</strong>
            <br>
            <p>$subject</p>
            <br>
            <br>
            <strong>Mensagem:</strong>
            <br>
            <p>$message</p>
        </body>
        </html>
        ";

        if($mail->send()) {
            echo "
                <script>
                    alert('Email enviado com sucesso')
                </script>
            ";
        } else {
            echo "
                <script>
                    alert('Email enviado com sucesso')
                </script>
            ";
        }
    } catch (Exception $e) {
        echo "
            <script>
                alert('Erro ao enviar mensagem: {$mail->ErrorInfo}')
            </script>
        ";
    }
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-mail enviado!</title>

    <!--==================== CSS ====================-->
    <link rel="stylesheet" href="../css/styles.css">

    <!--==================== UNICONS LINE ====================-->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
</head>
<body id="body-send-email">
    <br>
    <br>
    <a class="button button--flex" href="../../index.html">
        Voltar ao Portfólio
        <i class="uil uil-message button__icon"></i>
    </a>
</body>
</html>