import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUIStore } from '@/stores/ui'
import tocData from '@/data/toc'
export default defineComponent({ name:'SidebarRight', setup(){ const ui=useUIStore(); const route=useRoute(); const toc=computed(()=>tocData[route.path]??[]); return ()=> <aside class="hidden lg:block sidebar-scroll sticky top-[60px] shrink-0 h-[calc(100vh-60px)] w-[220px] overflow-y-auto py-6 pr-4"><div class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">On this page</div><ul class="space-y-1">{toc.value.map(h=><li key={h.id}><a href={'#'+h.id} onClick={(e)=>{e.preventDefault();document.getElementById(h.id)?.scrollIntoView({behavior:'smooth'})}} class="block text-sm py-1 border-l-2 border-transparent pl-3 text-slate-500 hover:text-slate-800">{h.text}</a></li>)}</ul></aside> } })
