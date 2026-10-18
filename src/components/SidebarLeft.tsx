import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import navigation from '@/data/navigation'
import { useUIStore } from '@/stores/ui'

export default defineComponent({
  name: 'SidebarLeft',
  setup() {
    const ui = useUIStore()

    return () => (
      <aside
        class={[
          'sidebar-scroll fixed md:sticky top-[60px] h-[calc(100vh-60px)] w-[260px] shrink-0 border-r border-zinc-800/80 bg-[#0c0c0f] py-5 overflow-y-auto transition-transform duration-200 z-50 md:translate-x-0',
          ui.leftSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ]}
      >
        <nav class="px-3">
          {navigation.map(group => (
            <div class="mb-6" key={group.title}>
              <div class="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                {group.title}
              </div>
              <div class="space-y-1">
                {group.children.map(item => (
                  <RouterLink
                    key={item.path}
                    to={item.path}
                    class="group flex min-h-10 items-center rounded-full px-4 py-2 text-sm text-zinc-400 transition-all duration-150 hover:bg-zinc-900 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
                    activeClass="bg-zinc-800/90 text-zinc-50 font-medium shadow-sm shadow-black/20"
                    exactActiveClass="bg-zinc-800/90 text-zinc-50 font-medium shadow-sm shadow-black/20"
                    onClick={() => ui.closeAll()}
                  >
                    <span class="min-w-0 truncate">{item.title}</span>
                  </RouterLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    )
  },
})
