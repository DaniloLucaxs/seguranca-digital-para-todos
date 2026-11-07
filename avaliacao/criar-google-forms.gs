/** Cole em https://script.google.com/create e execute criarFormulario. */
function criarFormulario() {
  var props = PropertiesService.getScriptProperties();
  var existente = props.getProperty('FORMULARIO_SEGURANCA_DIGITAL_ID');
  if (existente) {
    var anterior = FormApp.openById(existente);
    console.log('LINK PARA RESPONDER: ' + anterior.getPublishedUrl());
    console.log('EDITAR E VER RESPOSTAS: ' + anterior.getEditUrl());
    return;
  }
  var f = FormApp.create('Avaliação — Segurança Digital para Todos');
  f.setDescription('Projeto de extensão de Danilo Lucas dos Santos — UNIP. São 6 perguntas, cerca de 2 minutos. Participação voluntária. Não pedimos nome, e-mail, CPF ou telefone. As respostas serão usadas para avaliar o guia e documentar o projeto acadêmico, com apresentação agregada dos resultados. Responda apenas uma vez e conforme sua experiência. Você pode sair sem enviar.');
  f.setCollectEmail(false);
  f.setLimitOneResponsePerUser(false);
  f.setPublishingSummary(false);
  f.setShowLinkToRespondAgain(false);
  f.setConfirmationMessage('Obrigado! Sua avaliação foi registrada. Lembre-se: pedido de Pix por número novo deve ser confirmado por um contato que você já conhece.');
  var perguntas = [
    ['1. Quanto do e-book você leu?', ['Li tudo', 'Li parte', 'Ainda não li']],
    ['2. O material foi fácil de entender?', ['Muito fácil', 'Fácil', 'Regular', 'Difícil', 'Não consigo avaliar']],
    ['3. Antes da leitura, você já conhecia os golpes apresentados?', ['Não conhecia', 'Conhecia alguns', 'Conhecia a maioria', 'Já conhecia todos']],
    ['4. Depois da leitura, como você se sente para identificar mensagens suspeitas?', ['Mais preparado', 'Igualmente preparado', 'Menos preparado', 'Não consigo avaliar']],
    ['5. Qual orientação você pretende aplicar primeiro?', ['Confirmar pedidos por outro canal', 'Usar senhas diferentes', 'Ativar verificação em duas etapas', 'Verificar notícias antes de repassar', 'Ainda não decidi', 'Já aplico esses cuidados']],
    ['6. Um número novo usa a foto de um familiar e pede Pix urgente. Qual a conduta mais segura?', ['Confirmar pelo número antigo já conhecido', 'Fazer o Pix porque reconheci a foto', 'Pedir outra foto no número novo', 'Não sei']]
  ];
  perguntas.forEach(function(p) {
    f.addMultipleChoiceItem().setTitle(p[0]).setChoiceValues(p[1]).setRequired(true);
  });
  if (typeof f.setPublished === 'function') f.setPublished(true);
  f.setAcceptingResponses(true);
  props.setProperty('FORMULARIO_SEGURANCA_DIGITAL_ID', f.getId());
  console.log('LINK PARA RESPONDER: ' + f.getPublishedUrl());
  console.log('EDITAR E VER RESPOSTAS: ' + f.getEditUrl());
  console.log('Confira o acesso em uma janela anônima antes de divulgar. No formulário, a aba Respostas mostra os gráficos. Na questão 6, a conduta correta é confirmar pelo número antigo já conhecido.');
}
