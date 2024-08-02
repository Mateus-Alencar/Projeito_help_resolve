<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permite qualquer origem. Para produção, ajuste para o domínio específico.
header('Access-Control-Allow-Methods: GET, POST, OPTIONS'); // Métodos permitidos
header('Access-Control-Allow-Headers: Content-Type'); // Cabeçalhos permitidos

// Definindo as variáveis de conexão
$servername = "localhost";
$username = "root"; // Nome de usuário do MySQL
$password = ""; // Senha do MySQL (deixe em branco se não houver senha)
$dbname = "bd_help_resolve";

try {
    // Criando uma nova conexão PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Configurando o modo de erro do PDO para exceção
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Preparando e executando a consulta SQL
    $stmt = $conn->prepare("SELECT tipo_cliente, situacao, repertorio, argumentacao_primaria, processos_internos, pedido_desculpas, cortes_falas, argumentacao_encerramento, scripts_finalizacao, ranking FROM argumentos");
    $stmt->execute();

    // Buscando todos os resultados
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retornando os resultados como JSON
    echo json_encode($result);
} catch(PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Erro ao buscar dados: " . $e->getMessage()]);
}
?>
?>