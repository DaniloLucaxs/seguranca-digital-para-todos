# Segurança Digital para Todos

## Baixar os arquivos

- [Abrir o e-book em PDF](seguranca-digital-para-todos.pdf) — 16 páginas A4.
- [Baixar o projeto completo em ZIP](projeto-completo-seguranca-digital.zip).

No visualizador do PDF do GitHub, use o botão de download para salvar no computador. Para baixar o repositório inteiro, use **Code → Download ZIP**.


Autor: Danilo Lucas dos Santos · UNIP · Análise e Desenvolvimento de Sistemas · 2026.

## Arquivos
- `seguranca-digital-para-todos.pdf`: publicação A4, 16 páginas, com texto selecionável e links.
- `index.html`, `styles.css`, `content.js`: fonte editável e versão responsiva. Não há backend ou coleta de dados.
- `assets/illustrations/comunidade.svg`: diagrama original da capa, também incorporado ao HTML.
- `docs/`: fontes, plano de divulgação, avaliação, indicadores, CSVs vazios, modelo de relatório e revisão de qualidade.
- `exportar.py`: exportação automatizada com verificação de espaço antes dos rodapés.

## Leitura e edição
Abra `index.html` em um navegador comum. Se a política do navegador bloquear arquivos locais, execute `python -m http.server 8000` na pasta e acesse `http://localhost:8000`. A versão HTML se adapta ao celular, mantendo a ordem de leitura. Edite o texto no vetor `pages` de `content.js`, preservando a sintaxe JavaScript e os 16 itens. Cada item corresponde a uma página. Títulos e caixas usam HTML; o CSS define a diagramação A4 e a leitura móvel. Não adicione texto sem reconferir o espaço disponível.

## Exportação
1. Requisitos: Python 3, pacote `playwright` e Chromium. Em ambiente próprio, instale com `python -m pip install playwright` e `python -m playwright install chromium`, se necessário. Chromium do sistema é detectado automaticamente.
2. Execute `python exportar.py`. O script usa servidor local temporário, aplica CSS de impressão e gera o PDF na mesma pasta. Um erro de espaço interrompe a exportação.
3. Alternativa manual: abrir no navegador, Imprimir > Salvar PDF; A4; escala 100%; margens nenhuma; gráficos de fundo ativos; cabeçalhos e rodapés do navegador desativados.
4. Confira 16 páginas, todas as margens, textos, links e caracteres. Inspecione visualmente as 16 páginas após qualquer alteração. O script não substitui essa inspeção.

## Avaliação e QR Code
O espaço da página 16 não é um QR Code. Crie o formulário usando `docs/formulario-avaliacao.md`; depois de testar o endereço real, substitua o texto e, se desejado, adicione QR Code funcional. Exporte e confira novamente.

## Recursos e acessibilidade
Não há fontes empacotadas, imagens de banco, rastreadores ou dependências remotas para a leitura. Usa fontes do sistema; substituições em outro computador podem mudar a quebra de linhas. O PDF entregue é a referência da diagramação validada. Texto estruturado em HTML com idioma pt-BR; contraste em cores escuras sobre branco e azul-claro; laranja apenas como acento e sem transmitir informação sozinho. O PDF foi gerado com marcação de estrutura, mas não há certificação PDF/UA nem validação completa com leitores de tela. Para melhor adaptação de tamanho e fluxo no celular, prefira o HTML.

Os diagramas são originais e o texto foi preparado com apoio de IA. Referências externas mantêm seus próprios direitos. Nenhuma licença de terceiros foi transferida ao projeto. A distribuição educativa gratuita é o objetivo declarado pelo autor; a entrega não define uma licença aberta em seu nome.

## Próximos passos reais
Revisão final do autor; confirmação dos requisitos e modelo oficial da UNIP; publicação do formulário; divulgação autorizada; avaliação e registro de evidências reais. Não há resultados, horas certificadas, validação institucional ou assinaturas nesta entrega.
