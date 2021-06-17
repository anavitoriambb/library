<?php

    // Declarar as variáveis necessárias para gerar a minha conexão com o banco de dados
    //$hostname = "fdb18.awardspace.net";
    //$dbname = "3838903_library";
    //$username = "3838903_library";
    //$password = "Et3cL1br@ry";

    $hostname = "sql213.epizy.com";
    $dbname = "epiz_28849729_library";
    $username = "epiz_28849729";
    $password = "nVPiBfmcawbw";

    try {
        $pdo = new PDO('mysql:host=' .$hostname.';dbname='.$dbname, $username, $password);
        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo 'Conexão realizada com sucesso!!';
    } catch (PDOException $e){
       //echo 'Error: '.$e->getMessage();
    }