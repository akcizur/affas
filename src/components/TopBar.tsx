import { defineComponent } from 'vue'
import { Menu, PanelRight, BookOpen } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useUIStore } from '@/stores/ui'
import SearchBox from './SearchBox'
export default defineComponent({ name: 'TopBar', setup() { const ui = useUIStore(); return () => <header class="fixed top-0 inset-x-0 h-[60px] bg-white/90 backdrop-blur border-b border-slate-200 flex items-center px-4 md:px-6 gap-3 z-50"><button class="md:hidden p-1.5 rounded hover:bg-slate-100" onClick={ui.toggleLeft}><Menu class="w-5 h-5" /></button><RouterLink to="/" class="flex items-center gap-2 font-bold text-lg"><BookOpen class="w-6 h-6 text-brand-600" />AFFAS</RouterLink><div class="flex-1 max-w-md mx-auto"><SearchBox /></div><button class="lg:hidden p-1.5 rounded hover:bg-slate-100" onClick={ui.toggleRight}><PanelRight class="w-5 h-5" /></button></header> } })
