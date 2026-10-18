import { defineComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import navigation from '@/data/navigation'

const pages = navigation.flatMap(group => group.children)

export default defineComponent({
  name: 'Pagination',
  setup() {
    const route = useRoute()

    return () => {
      const index = pages.findIndex(page => page.path === route.path)
      const previous = pages[index - 1]
      const next = pages[index + 1]

      return (
        <nav class="mt-16 flex justify-between gap-3 border-t border-zinc-800 pt-6" aria-label="Pagination">
          {previous
            ? <RouterLink to={previous.path} class="group min-w-0 rounded-2xl border border-zinc-800/80 px-4 py-3 text-sm text-zinc-500 hover:border-zinc-700 hover:bg-zinc-900/70">
                <span class="mb-1 flex items-center gap-1 text-xs text-zinc-500"><ArrowLeft class="size-3.5" />Previous</span>
                <span class="block truncate font-medium text-zinc-200 group-hover:text-white">{previous.title}</span>
              </RouterLink>
            : <span />}
          {next && <RouterLink to={next.path} class="group ml-auto min-w-0 rounded-2xl border border-zinc-800/80 px-4 py-3 text-right text-sm text-zinc-500 hover:border-zinc-700 hover:bg-zinc-900/70">
            <span class="mb-1 flex items-center justify-end gap-1 text-xs text-zinc-500">Next<ArrowRight class="size-3.5" /></span>
            <span class="block truncate font-medium text-zinc-200 group-hover:text-white">{next.title}</span>
          </RouterLink>}
        </nav>
      )
    }
  },
})
