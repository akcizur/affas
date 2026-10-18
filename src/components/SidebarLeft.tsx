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
          'glass-sidepanel sidebar-scroll fixed md:sticky top-[60px] h-[calc(100vh-60px)] w-[260px] shrink-0 border-r py-5 overflow-y-auto transition-transform duration-200 z-50 md:translate-x-0 rounded-r-3xl md:rounded-none md:shadow-none',
          ui.leftSidebarOpen ? 'translate-x-0 shadow-2xl shadow-black/40' : '-translate-x-full',
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
                    class="glass-row group flex min-h-10 items-center px-4 py-2 text-sm text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 hover:text-zinc-100"
                    activeClass="glass-row-active font-medium text-zinc-50"
                    exactActiveClass="glass-row-active font-medium text-zinc-50"
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
