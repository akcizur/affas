import { defineComponent } from 'vue'
export default defineComponent({name:'InstallationPage',setup:()=>()=> <article><h1>Installation</h1><p>Nainstalujte závislosti pomocí npm a spusťte vývojový server.</p><pre class="shiki"><code>npm install{`\n`}npm run dev</code></pre><p>Produkční build ověří typy a vytvoří statické soubory pro GitHub Pages.</p></article>})
