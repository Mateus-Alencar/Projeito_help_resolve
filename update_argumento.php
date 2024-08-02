<?php
// update_argumento.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_help_resolve";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(array("status" => "error", "message" => "Connection failed: " . $conn->connect_error)));
}

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['id']) && isset($data['arg_primaria']) && isset($data['proc_internos']) && isset($data['pedido_desculpas']) && isset($data['cortes_falas']) && isset($data['arg_encerramento']) && isset($data['scripts_finalizacao'])) {
    $id = $data['id'];
    $arg_primaria = $conn->real_escape_string($data['arg_primaria']);
    $proc_internos = $conn->real_escape_string($data['proc_internos']);
    $pedido_desculpas = $conn->real_escape_string($data['pedido_desculpas']);
    $cortes_falas = $conn->real_escape_string($data['cortes_falas']);
    $arg_encerramento = $conn->real_escape_string($data['arg_encerramento']);
    $scripts_finalizacao = $conn->real_escape_string($data['scripts_finalizacao']);

    $sql = "UPDATE argumentos SET argumentacao_primaria='$arg_primaria', processos_internos='$proc_internos', pedido_desculpas='$pedido_desculpas', cortes_falas='$cortes_falas', argumentacao_encerramento='$arg_encerramento', scripts_finalizacao='$scripts_finalizacao' WHERE id_argumento='$id'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("status" => "success", "message" => "Argumento atualizado com sucesso."));
    } else {
        echo json_encode(array("status" => "error", "message" => "Erro ao atualizar argumento: " . $conn->error));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Dados insuficientes."));
}

$conn->close();
?>
