document.addEventListener('DOMContentLoaded', function () {
    let tipo_de_cliente = document.querySelector('.sBtn-text');
    let tipo_de_situacao = document.querySelector('.sBtn-text2');
    let tipo_de_vocabulario = document.querySelector('.sBtn-text3');

    let tipo_de_cliente_background = document.querySelector('.select-menu .options');
    let tipo_de_situacao_background = document.querySelector('.select-menu2 .options2');
    let tipo_de_vocabulario_background = document.querySelector('.select-menu3 .options3');

    let texto_novo_arg1 = document.querySelector('#block-arg1 #situacao-detalhes-arg1 p');
    let texto_novo_arg2 = document.querySelector('#block-arg2 #situacao-detalhes-arg1 p');
    let texto_novo_arg3 = document.querySelector('#block-arg3 #situacao-detalhes-arg1 p');
    let texto_novo_arg4 = document.querySelector('#block-arg4 #situacao-detalhes-arg1 p');
    let texto_novo_arg5 = document.querySelector('#block-arg5 #situacao-detalhes-arg1 p');
    let texto_novo_arg6 = document.querySelector('#block-arg6 #situacao-detalhes-arg1 p');

    document.getElementById('Atualizar_args').addEventListener('click', function() {
        if (tipo_de_cliente.textContent != "Tipo de Cliente" && tipo_de_situacao.textContent != "Situações" && tipo_de_vocabulario.textContent != "Repertório") {
            const url = `http://localhost/Projeto%20HELP%20RESOLVE/select_args.php?tipo_cliente=${encodeURIComponent(tipo_de_cliente.textContent)}&situacao=${encodeURIComponent(tipo_de_situacao.textContent)}&repertorio=${encodeURIComponent(tipo_de_vocabulario.textContent)}`;
            console.log('URL:', url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const situacoes2 = data.map(item => ({
                        id_argumento: item.id_argumento,
                        tipo_cliente: item.tipo_cliente,
                        situacao: item.situacao,
                        repertorio: item.repertorio,
                        argumentacao_primaria: item.argumentacao_primaria,
                        processos_internos: item.processos_internos,
                        pedido_desculpas: item.pedido_desculpas,
                        cortes_falas: item.cortes_falas,
                        argumentacao_encerramento: item.argumentacao_encerramento,
                        scripts_finalizacao: item.scripts_finalizacao,
                        ranking: item.ranking
                    }));

               

                    
                    const situacaoEspecifica = situacoes2.find(situacao => 
                        situacao.tipo_cliente === tipo_de_cliente.textContent && 
                        situacao.situacao === tipo_de_situacao.textContent && 
                        situacao.repertorio === tipo_de_vocabulario.textContent);

                    if (situacaoEspecifica) {
                        document.querySelector('.endereco_arg_id p').textContent = "Id_argumentação: " + situacaoEspecifica.id_argumento + ", classificação entre as mais utilizadas: " + situacaoEspecifica.ranking;
                         addText(situacaoEspecifica);
                        }else{
                            texto_novo_arg1.textContent = "Ainda não existe uma estratégias de argumentação para essa situação.";
                            texto_novo_arg2.textContent = "Ainda não existe uma estratégias de argumentação para essa situação.";  
                            texto_novo_arg3.textContent = "Ainda não existe uma estratégias de argumentação para essa situação.";  
                            texto_novo_arg4.textContent = "Ainda não existe uma estratégias de argumentação para essa situação.";
                            texto_novo_arg5.textContent = "Ainda não existe uma estratégias de argumentação para essa situação."; 
                            texto_novo_arg6.textContent = "Ainda não existe uma estratégias de argumentação para essa situação.";
                        }

            
                })
                .catch(error => {
                    console.error('Erro:', error);
                    document.getElementById('result').textContent = 'Erro ao buscar os dados.';
                });
            } else {
                if (tipo_de_cliente.textContent === "Tipo de Cliente"){
                    tipo_de_cliente_background.style.backgroundColor = 'red';
                }
                if (tipo_de_situacao.textContent === "Situações"){
                    tipo_de_situacao_background.style.backgroundColor = 'red';
                }
                if (tipo_de_vocabulario.textContent === "Repertório"){
                    tipo_de_vocabulario_background.style.backgroundColor = 'red';
                }
            }
        });
    
        function addText(situacaoEspecifica) {
            texto_novo_arg1.textContent = situacaoEspecifica.argumentacao_primaria;   
            texto_novo_arg2.textContent = situacaoEspecifica.processos_internos;  
            texto_novo_arg3.textContent = situacaoEspecifica.pedido_desculpas;  
            texto_novo_arg4.textContent = situacaoEspecifica.cortes_falas;  
            texto_novo_arg5.textContent = situacaoEspecifica.argumentacao_encerramento;  
            texto_novo_arg6.textContent = situacaoEspecifica.scripts_finalizacao; 
          }

});
