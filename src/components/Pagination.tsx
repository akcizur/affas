import { defineComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import navigation from '@/data/navigation'
const pages=navigation.flatMap(g=>g.children)
export default defineComponent({name:'Pagination',setup(){const route=useRoute();return()=>{const i=pages.findIndex(p=>p.path===route.path);const prev=pages[i-1],next=pages[i+1];return <nav class="mt-16 pt-6 border-t border-slate-200 flex justify-between gap-4">{prev?<RouterLink to={prev.path} class="group text-sm text-slate-500"><span class="flex items-center gap-1 text-xs"><ArrowLeft class="w-3.5 h-3.5"/>Previous</span><span class="font-medium text-slate-800">{prev.title}</span></RouterLink>:<span/>}{next&&<RouterLink to={next.path} class="group text-right text-sm text-slate-500 ml-auto"><span class="flex justify-end items-center gap-1 text-xs">Next<ArrowRight class="w-3.5 h-3.5"/></span><span class="font-medium text-slate-800">{next.title}</span></RouterLink>}</nav>}}})
