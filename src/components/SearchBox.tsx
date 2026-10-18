import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Search } from 'lucide-vue-next'
import navigation from '@/data/navigation'
const items = navigation.flatMap(g=>g.children)
export default defineComponent({ name:'SearchBox', setup(){ const query=ref(''); const results=()=>{const q=query.value.trim().toLowerCase(); return q?items.filter(x=>x.title.toLowerCase().includes(q)).slice(0,8):[]}; return ()=> <div class="relative"><Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/><input value={query.value} onInput={(e)=>query.value=(e.target as HTMLInputElement).value} placeholder="Search documentation..." class="w-full pl-9 pr-3 py-1.5 text-sm rounded-md bg-slate-100 border border-transparent focus:bg-white focus:border-brand-500 focus:outline-none"/>{results().length>0&&<ul class="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden z-50">{results().map(r=><li key={r.path}><RouterLink to={r.path} onClick={()=>query.value=''} class="block px-3 py-2 text-sm hover:bg-slate-50">{r.title}</RouterLink></li>)}</ul>}</div> } })
