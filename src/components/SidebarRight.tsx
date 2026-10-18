import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUIStore } from '@/stores/ui'
import tocData from '@/data/toc'

export default defineComponent({
  name: 'SidebarRight',
  setup() {
    const ui = useUIStore()
    const route = useRoute()
    const toc = computed(() => tocData[route.path] ?? [])

    return () => (
      <aside
        class={[
          'sidebar-scroll glass-sidepanel lg:glass-sidepanel-docked lg:sticky lg:top-[60px] lg:h-[calc(100vh-60px)] lg:w-[220px] lg:shrink-0 lg:overflow-y-auto lg:py-6 lg:pr-4 rounded-l-3xl lg:rounded-none',
          ui.rightSidebarOpen
            ? 'fixed right-0 top-[60px] z-50 block h-[calc(100vh-60px)] w-[min(84vw,300px)] overflow-y-auto border-l px-4 py-6 shadow-2xl shadow-black/40'
            : 'hidden lg:block',
        ]}
      >
        <div class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          On this page
        </div>
        <ul class="space-y-1">
          {toc.value.map(item => (
            <li key={item.id}>
              <a
                href={'#' + item.id}
                onClick={(event) => {
                  event.preventDefault()
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  ui.closeAll()
                }}
                class="glass-row block px-3 py-2 text-sm text-zinc-500 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    )
  },
})
