<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_help_resolve";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents("php://input"), true);

    $stmt = $conn->prepare("INSERT INTO argumentos (tipo_cliente, situacao, repertorio, argumentacao_primaria, processos_internos, pedido_desculpas, cortes_falas, argumentacao_encerramento, scripts_finalizacao, ranking) VALUES (:tipo_cliente, :situacao, :repertorio, :arg_primaria, :proc_internos, :pedido_desculpas, :cortes_falas, :arg_encerramento, :scripts_finalizacao, 1)");

    $stmt->bindParam(':tipo_cliente', $data['tipo_cliente']);
    $stmt->bindParam(':situacao', $data['situacao']);
    $stmt->bindParam(':repertorio', $data['repertorio']);
    $stmt->bindParam(':arg_primaria', $data['arg_primaria']);
    $stmt->bindParam(':proc_internos', $data['proc_internos']);
    $stmt->bindParam(':pedido_desculpas', $data['pedido_desculpas']);
    $stmt->bindParam(':cortes_falas', $data['cortes_falas']);
    $stmt->bindParam(':arg_encerramento', $data['arg_encerramento']);
    $stmt->bindParam(':scripts_finalizacao', $data['scripts_finalizacao']);

    $stmt->execute();

    echo json_encode(["status" => "success"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Erro ao salvar dados: " . $e->getMessage()]);
}
?>
