<?php
    if(isset($_POST['enviar-formulario'])){
        $formatosPermitidos = array("png", "jpeg", "jpg", "gif");
        $extensao = pachinfo($_FILES['arquivo']['name'], PATHINFO_EXTENSION);
        if(in_array($extensao, $formatosPermitidos)){
            $pasta = "image/arquivos/";
            $temporario = $_FILES['arquivos'][tmp_name];
            $novoNome = uniqid().".$extensao";
           
            if(move_uploaded_file($temporario, $pasta.$novoNome)){
                $mensagem = "Upload feito com sucesso!";
           
            }else{
                $mensagem = "Erro, não foi possível fazer o upload";
            }
        }
        else{
            $mensagem = "Formato inválido";
        }
         }
            echo $mensagem;
    
?>
