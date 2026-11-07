"""Requer Python e Playwright; Chromium instalado no sistema ou pelo Playwright."""
from pathlib import Path
import json,shutil,threading,http.server,functools
server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(Path(__file__).resolve().parent)))
threading.Thread(target=server.serve_forever,daemon=True).start()
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parent
with sync_playwright() as p:
 kwargs={'headless':True}
 if shutil.which('chromium'):kwargs['executable_path']=shutil.which('chromium')
 browser=p.chromium.launch(**kwargs)
 page=browser.new_page(viewport={'width':1000,'height':1200},device_scale_factor=1)
 page.goto(f'http://127.0.0.1:{server.server_port}/index.html',wait_until='networkidle')
 page.emulate_media(media='print')
 page.evaluate('document.fonts.ready')
 problems=page.evaluate('''()=>[...document.querySelectorAll('.page')].map((p,i)=>{const b=p.querySelector('.body').getBoundingClientRect(),f=p.querySelector('footer').getBoundingClientRect();return {page:i+1,gap:Math.round(f.top-b.bottom),overflow:p.scrollWidth>p.clientWidth}})''')
 print(json.dumps(problems))
 assert len(problems)==16
 assert all(x['gap']>=8 and not x['overflow'] for x in problems),'Conteúdo invade o rodapé ou excede a largura'
 page.pdf(path=str(root/'seguranca-digital-para-todos.pdf'),format='A4',print_background=True,prefer_css_page_size=True,display_header_footer=False,tagged=True,outline=True)
 browser.close()
