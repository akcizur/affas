import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import tocData from '@/data/toc'

export default defineComponent({
  name: 'SidebarRight',
  setup() {
    const route = useRoute()
    const toc = computed(() => tocData[route.path] ?? [])

    return () => (
      <aside class="hidden lg:block sidebar-scroll sticky top-[60px] shrink-0 h-[calc(100vh-60px)] w-[220px] overflow-y-auto py-6 pr-4">
        <div class="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
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
                }}
                class="block rounded-full px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
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
