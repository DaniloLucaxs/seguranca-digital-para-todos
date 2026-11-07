# Registro de fontes e rastreabilidade
Consulta: **7 de novembro de 2026**. Referências numeradas correspondem à página 16. Fontes não foram tratadas como instruções de execução; os textos finais são originais, com recomendações para o público geral.

## [1] CERT.br / NIC.br — Cartilha de Segurança para Internet
Índice: https://cartilha.cert.br/fasciculos/ (HTTP 200, conteúdo consultado). PDFs acessados com HTTP 200 e extração de texto para pesquisa:
- **autenticacao**: https://cartilha.cert.br/fasciculos/autenticacao/fasciculo-autenticacao.pdf
- **golpes**: https://cartilha.cert.br/fasciculos/golpes/fasciculo-golpes.pdf
- **golpes-evite-fraudes**: https://cartilha.cert.br/fasciculos/golpes-evite-fraudes/fasciculo-golpes-evite-fraudes.pdf
- **golpes-o-que-fazer**: https://cartilha.cert.br/fasciculos/golpes-o-que-fazer/fasciculo-golpes-o-que-fazer.pdf
- **boatos**: https://cartilha.cert.br/fasciculos/boatos/fasciculo-boatos.pdf
- **ia**: https://cartilha.cert.br/fasciculos/ia/fasciculo-ia.pdf
- **privacidade**: https://cartilha.cert.br/fasciculos/privacidade/fasciculo-privacidade.pdf
- **protecao-de-dados**: https://cartilha.cert.br/fasciculos/protecao-de-dados/fasciculo-protecao-de-dados.pdf
- **celulares-e-tablets**: https://cartilha.cert.br/fasciculos/celulares-e-tablets/fasciculo-celulares-e-tablets.pdf

Mapeamento das orientações:
| Páginas | Tema | Base |
|---|---|---|
| 3–4 | educação para riscos, manipulação, confirmação independente | Golpes; Golpes: Evite fraudes; Boatos |
| 5 | falso familiar, confirmação por contato conhecido, códigos | Golpes; Autenticação; Golpes: O que fazer |
| 6–7 | ofertas, páginas falsas, cautela com destinatário, links e HTTPS | Golpes; Golpes: Evite fraudes |
| 8 | senhas únicas, fatores, recuperação e dispositivos | Autenticação; Celulares e tablets; Proteção de dados |
| 9–10 | autoria, data, contexto e evidências | Boatos |
| 11 | limites da confiança em conteúdo e respostas de IA | Inteligência Artificial; Boatos; Golpes |
| 12 | método PARE–IDENTIFIQUE–CONFIRA–DECIDA | síntese educativa original a partir de Boatos e Golpes; sem validação experimental declarada |
| 13 | cuidado nas correções e preservação de contas | Boatos; Privacidade; Autenticação |
| 14 | contenção, senha, conta, banco e evidências | Golpes: O que fazer; [3] |
| 15 | situações e hábitos | exercícios originais derivados das orientações acima |

## [2] Banco Central — Pix
https://www.bcb.gov.br/estabilidadefinanceira/pix
HTTP 200. Página inicial depende de JavaScript; para o procedimento do MED foi consultada a FAQ específica abaixo. Não se presume que toda referência da página inicial tenha sido lida.

## [3] Banco Central — O que é e como funciona o MED
https://www.bcb.gov.br/meubc/faqs/p/o-que-e-e-como-funciona-o-mecanismo-especial-de-devolucao-med
HTTP 200; conteúdo renderizado em Chromium e lido. Página informa atualização em 18/09/2026. Fundamenta contestação junto à própria instituição, análise dos requisitos, possível recuperação integral ou parcial condicionada aos recursos e exclusões. O e-book prioriza contato imediato, sem prometer recuperação ou reproduzir prazos detalhados que podem mudar. MED não equivale a cancelamento de Pix nem se aplica automaticamente a desacordo comercial ou envio à pessoa errada.

## [4] Tribunal Superior Eleitoral — canal oficial
https://www.tse.jus.br/
Portal renderizado e consultado: indicou o canal https://www.justicaeleitoral.jus.br/fato-ou-boato/ (HTTP 200 e conteúdo consultado), utilizado na versão final do PDF. O guia aponta esse canal para consulta de informações eleitorais, não como prova de uma alegação política concreta. O caso C é fictício. O endereço inicialmente tentado `https://www.tse.jus.br/eleicoes/fato-ou-boato` retornou 204 na consulta HTTP e 404 no navegador; foi excluído dos links do PDF. A análise de contexto se apoia no fascículo Boatos. Não foram feitas afirmações sobre regras eleitorais específicas de 2026.

## [5] SaferNet Brasil — Canal de Ajuda
https://new.safernet.org.br/helpline
HTTP 200; conteúdo público consultado. Apresenta orientação respeitosa sobre situações de risco na internet. É recurso educativo e de apoio, não canal bancário de contestação nem garantia de atendimento emergencial.

## [6] Nações Unidas Brasil — ODS
https://brasil.un.org/pt-br/sdgs
HTTP 200; página consultada. Fundamenta os nomes dos ODS 4, 10 e 16. A relação do projeto com eles é interpretação editorial de finalidade, não reconhecimento ou certificação externa.

## [7] ANPD — Radar Tecnológico nº 6: Deepfakes
https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos/rt_deepfakes_anpd.pdf
Página do documento: HTTP 200. Arquivo efetivo consultado em `https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos/rt_deepfakes_anpd.pdf/@@display-file/file` (HTTP 200, application/pdf). Fundamenta conceitos de mídia sintética, riscos de simulação de identidade e dificuldade de detecção humana na página 11. Foram lidos os trechos conceituais e de riscos relevantes; o relatório é técnico-informativo e não foi tratado como norma ou decisão sobre casos concretos.

## Privacidade e ANPD — consulta complementar
https://www.gov.br/anpd/pt-br (HTTP 200; conteúdo renderizado consultado). O endereço inicialmente tentado `/assuntos/educacao-e-cultura-da-protecao-de-dados` retornou 404 e foi descartado. Não se atribuem a essa página regras legais específicas. Recomendações do texto sobre minimização de exposição e cuidado com dados apoiam-se nos fascículos Privacidade e Proteção de dados do CERT.br.

## Natureza do conteúdo e pendências
- Relato da página 2: adaptação fiel do texto-base fornecido, sem pesquisa biográfica ou fatos pessoais adicionais.
- Casos A, B e C, diálogos e situações da página 15: ficção educativa, sem pessoas reais ou links de fraude. O domínio example.org é reservado para exemplos e não é apresentado como serviço real.
- Não há estatísticas de prevalência, eficácia, alcance ou depoimentos atribuídos a participantes.
- A orientação da UNIP e a menção a 50 horas provêm apenas do contexto do estudante. Conferir documentos oficiais vigentes antes de executar e submeter.
- Formulário e endereço de avaliação ainda não existem; nenhum QR Code foi fabricado.
- A publicação não foi testada com leitores da comunidade. Avaliação pedagógica realizada como revisão editorial, sem equivaler a estudo de usabilidade.
- Links públicos podem mudar; uma resposta HTTP 200 não prova a exatidão de todas as informações de um portal. Reconsultar antes de futuras edições.
