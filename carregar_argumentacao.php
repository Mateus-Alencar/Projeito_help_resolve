<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_help_resolve";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if (isset($_GET['id_argumento'])) {
        $id = intval($_GET['id_argumento']);

        $stmt = $conn->prepare("SELECT * FROM argumentos WHERE id_argumento = :id_argumento");
        $stmt->bindParam(':id_argumento', $id);
        $stmt->execute();

        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            echo json_encode(["status" => "success", "data" => $result]);
        } else {
            echo json_encode(["status" => "error", "message" => "Argumentação não encontrada."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "ID não fornecido."]);
    }
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Erro ao carregar dados: " . $e->getMessage()]);
}
?>
