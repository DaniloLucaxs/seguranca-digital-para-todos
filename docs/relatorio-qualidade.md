# Relatório de qualidade — 7 de novembro de 2026

## Escopo e autoria da revisão
Revisões realizadas nesta execução com apoio de IA e verificações de navegador e PDF. Não representam revisão humana especializada, validação da UNIP ou avaliação com a comunidade. A revisão autoral final e a conferência dos documentos institucionais permanecem necessárias.

## 1. Revisão técnica
Conceitos e procedimentos confrontados com os fascículos do CERT.br e a FAQ do Banco Central sobre MED; conceitos de deepfakes apoiados também no estudo da ANPD. HTTPS foi explicitamente separado de legitimidade. Códigos pessoais e confirmações independentes foram destacados. Conteúdos sintéticos não são tratados como identificáveis por um sinal isolado. Recomendações após incidentes distinguem recebimento, clique, credencial divulgada, perda de acesso e transferência. Não se afirma que um clique por si só prove invasão.

Ajustes efetivamente feitos: substituição de menção a passkeys por recomendação de chaves de segurança e aplicativo autenticador para manter a orientação apoiada no fascículo consultado; acréscimo de que MED não equivale a cancelamento e não se aplica automaticamente a desacordo comercial ou envio errado. Contato com o banco precede coleta demorada de evidências; nenhuma recuperação é prometida.

## 2. Revisão factual
Nove PDFs do CERT.br foram obtidos e tiveram texto extraído para consulta. A página dinâmica do MED foi renderizada em Chromium e lida. O portal do TSE foi consultado para encontrar o endereço atual do canal Fato ou Boato. O PDF efetivo do Radar Tecnológico da ANPD foi consultado no endpoint do arquivo, distinguindo-o da página de apresentação.

Correções efetivamente feitas: remoção de endereço antigo do TSE que retornava 404 no navegador; substituição pelo endereço indicado no portal, com HTTP 200; descarte de rota inexistente da ANPD; inclusão do estudo de deepfakes com referência rastreável. As **7 anotações de links do PDF** foram extraídas, comparadas com os destinos esperados e tiveram seus destinos consultados com HTTP 200. Isso confirma os destinos na data da revisão; não garante disponibilidade futura.

Não há estatísticas, participantes, depoimentos, horas executadas, encontros ou resultados acadêmicos inventados. A apresentação foi condensada exclusivamente a partir do relato fornecido. Casos A, B e C e exercícios estão identificados como fictícios. Formulário, QR Code real, documentos oficiais da UNIP e evidências de divulgação permanecem pendentes.

## 3. Revisão pedagógica
Foi realizada leitura editorial com foco no público sem formação técnica: definições de engenharia social, phishing, autenticação e deepfakes; exemplos próximos da rotina; passos concretos para verificar e agir; método de quatro etapas, três situações de aprendizagem com respostas comentadas e checklist. O diálogo familiar evita julgamento e mantém autonomia. A orientação política aplica critérios de evidência sem defesa partidária ou equivalência artificial.

Esta etapa é análise editorial, não teste com leitores. Compreensão, satisfação, acessibilidade com tecnologias assistivas e mudança de comportamento ainda devem ser avaliadas com pessoas reais. O roteiro de formulário contém oito perguntas, uma situação de conhecimento e espaços opcionais para sugestões, sem solicitar dados financeiros ou documentos.

## 4. Revisão editorial e visual
O PDF inicial foi convertido em imagens e **todas as 16 páginas foram inspecionadas visualmente** em quatro conjuntos. As páginas 5, 11, 14 e 16 foram novamente renderizadas e inspecionadas individualmente após as alterações finais. Foram observados títulos, parágrafos, caixas, margens, rodapés, paginação, acentos e diagramas. Não foram identificados cortes ou sobreposições nas imagens inspecionadas.

Correção efetivamente feita: a caixa de conversa da página 5 teve espaçamentos reduzidos, elevando a distância do conteúdo ao rodapé de 10 para 31 pixels no navegador em mídia de impressão, sem diminuir o tamanho da letra. Páginas 14 e 16 foram novamente conferidas após acréscimos de conteúdo e referência.

## Verificações executadas
- **16 páginas**, A4; todas com dimensão aproximada de 594,96 × 841,92 pontos, dentro do arredondamento do navegador.
- Numeração de 01 a 16; texto selecionável extraído em todas as páginas; sem caracteres de substituição encontrados na extração.
- Limites geométricos dos fragmentos de texto dentro da página; nenhuma largura excedida no HTML de impressão; conteúdo acima dos rodapés em todas as páginas.
- PDF com marcação estrutural gerada pelo Chromium. Não foi realizada certificação PDF/UA ou validação integral com leitor de tela.
- HTML testado em viewport de 390 × 844 pixels: largura do documento 390 pixels, sem rolagem horizontal; conteúdo e rodapé separados nas 16 páginas; nenhum erro JavaScript.
- Sete links externos anotados e sete destinos com HTTP 200. Banco Central depende de JavaScript para leitura completa, testada na FAQ do MED.
- PDF: **237,003 bytes** (aproximadamente 231 KiB), sem anexos ou dependências externas para abrir. É um arquivo leve para envio como documento no WhatsApp; não houve envio real nem teste em uma conta do WhatsApp.
- Sem fontes de terceiros redistribuídas. Ilustração vetorial original da capa e texto com apoio de IA; sem revisores humanos ou validações atribuídos ficticiamente.

Os resultados estruturados estão em `validacao-tecnica.json`. As capturas usadas na inspeção permaneceram como arquivos intermediários; não são evidências de participação comunitária.

## Pendências para execução extensionista
Revisão e aceite autoral; confirmação da coordenação quanto à modalidade, modelos, exigência presencial e critérios de horas; publicação e teste do formulário; inserção de link/QR Code real na página 16 e nova exportação; divulgação autorizada; avaliações e documentação de impacto real. A produção editorial foi concluída, mas essas ações externas ainda não foram executadas.
