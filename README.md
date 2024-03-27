# testefluig

## Premissa

A empresa XPTO Inc tem a necessidade de feedback do responsável do almoxarifado quanto a entrega de remessas e mercadorias entre as unidades dela. Uma unidade cadastra uma solicitação onde identifica o ponto de coleta, a unidade destino e qual a mercadoria/conteúdo da entrega.
Após essa etapa inicial, cabe ao responsável do almoxarifado da unidade destino confirmar o recebimento da mercadoria.

Para tal objetivo, pretende-se implementar:

- um pré-cadastro de filial com campos de código, nome, endereço e zoom de usuário responsável almoxarifado. Ao cadastrar um novo registro validar se o código já está cadastrado. Todos os campos são obrigatórios.

- um processo de entrega, com os campos de CEP origem integrando CEP (consulta pública de algum serviço de CEP - exemplo ViaCEP) que preencha campos complementares (campos esses bloqueados, que serão preenchidos automaticamente com base no retorno obtido da consulta de CEP), como nome da rua, cidade e estado, zoom de filial destino (listar com base nos dados do cadastro de empresa), um campo prazo da entrega (não pode ser inferior a data atual) e um campo descritivo da mercadoria, sendo os campos mencionados obrigatórios. Usuário responsável pelo almoxarifado daquela filial confirma recebimento da mercadoria.

O projeto criado deverá ser publicado em um repositório, como drive ou git. Além disso, o resultado do teste deve vir com instruções (documentação simples) para realização dos testes.

## Instruções

A estrutura de pastas é a padrão do fluig então se copiar e colar os arquivos já é possível subir o projeto em um servidor.

- Abra o processo "Pré Cadastro Filial" e preencha os campos obrigatóriso sinalizados através do *(asterísco) a frente de cada campo (label), foram utilizados métodos de consulta pública no serviço de CEP ViaCep através da inserção do CEP, obrigatoriedade de preenchimento de todos os campos, consumo do dataset do Colleague para seleção do responsável almoxarifado como também foi requerido nas premissas, tomei a liberdade de utilizar uma máscara no campo de CEP para deixar visualmente mais agradável.
  
- Após a primeira etapa o cadastro de filial está concluído.
  
-Abra o processo "Feedback Almoxarifado" e preencha os campos obrigatóriso sinalizados através do *(asterísco) a frente de cada campo (label), foram utilizados métodos de obrigatoriedade de preenchimento de todos os campos, consumo do dataset do "ds_preCadastro_filial" criado através da finalização do processo da etapa 1 para seleção dos campos de Unidade Origem e Unidade Destino, foi criado um campo de prazo atendendo as regras citadas nas premissas como exigências.

- Após a etapa terceira nota-se que aatividade foi encaminhada para o usuário responsável almoxarifado, atendendo assim mais uma exigência descrita nas premissas, tomei a liberdade de criar um botão (switch) para sinalizar o recebimento e tornei-o obrigatório (mesmo não tendo sido exigído).

## Considerações

Não ficou claro pra mim se era pra ser feito tudo em um único processo ou mais, optei por fazer em dois processos para poder também para obter um dinamismo maior das tarefas;
