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
        <RouterLink to="/" class="flex items-center gap-2 rounded-full text-lg font-semibold tracking-tight text-zinc-100">
          <BookOpen class="size-5 text-zinc-300" />
          <span>AFFAS</span>
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
