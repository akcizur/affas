import { defineComponent } from 'vue'
import { Menu, PanelRight, BookOpen } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { useUIStore } from '@/stores/ui'
import SearchBox from './SearchBox'

export default defineComponent({
  name: 'TopBar',
  setup() {
    const ui = useUIStore()

    return () => (
      <header class="glass-topbar fixed inset-x-0 top-0 z-50 flex h-[60px] items-center gap-3 px-4 text-zinc-100 md:px-6">
        <button
          class="grid size-9 shrink-0 place-items-center rounded-full text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-100 md:hidden"
          onClick={ui.toggleLeft}
          aria-label="Open navigation"
        >
          <Menu class="size-5" />
        </button>
        <RouterLink to="/" class="group flex shrink-0 items-center gap-2.5 rounded-full text-zinc-100 no-underline">
          <span class="grid size-8 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-200 glass-brand-mark transition-colors group-hover:border-white/[0.12] group-hover:bg-white/[0.055]">
            <BookOpen class="size-4" />
          </span>
          <span class="text-[15px] font-semibold tracking-[0.14em]">AFFAS</span>
          <span class="hidden rounded-full border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[9px] font-medium tracking-[0.16em] text-zinc-500 sm:inline">DOCS</span>
        </RouterLink>
        <div class="mx-auto w-full max-w-md flex-1">
          <SearchBox />
        </div>
        <button
          class="grid size-9 shrink-0 place-items-center rounded-full text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-100 lg:hidden"
          onClick={ui.toggleRight}
          aria-label="Open page contents"
        >
          <PanelRight class="size-5" />
        </button>
      </header>
    )
  },
})
