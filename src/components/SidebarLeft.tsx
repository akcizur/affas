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
          'sidebar-scroll fixed md:sticky top-[60px] h-[calc(100vh-60px)] w-[260px] shrink-0 bg-white border-r border-slate-200/80 overflow-y-auto py-5 transition-transform duration-200 z-50 md:translate-x-0',
          ui.leftSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ]}
      >
        <nav class="px-3">
          {navigation.map(group => (
            <div class="mb-6" key={group.title}>
              <div class="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                {group.title}
              </div>
              <div class="space-y-1">
                {group.children.map(item => (
                  <RouterLink
                    key={item.path}
                    to={item.path}
                    class="group flex min-h-10 items-center rounded-full px-4 py-2 text-sm text-slate-600 transition-all duration-150 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    activeClass="bg-brand-50 text-brand-700 font-medium shadow-sm shadow-blue-950/[0.03]"
                    exactActiveClass="bg-brand-50 text-brand-700 font-medium shadow-sm shadow-blue-950/[0.03]"
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
