import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Search } from 'lucide-vue-next'
import navigation from '@/data/navigation'

const items = navigation.flatMap(group => group.children)

export default defineComponent({
  name: 'SearchBox',
  setup() {
    const query = ref('')
    const results = () => {
      const value = query.value.trim().toLowerCase()
      return value ? items.filter(item => item.title.toLowerCase().includes(value)).slice(0, 8) : []
    }

    return () => (
      <div class="relative">
        <Search class="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
        <input
          value={query.value}
          onInput={(event) => query.value = (event.target as HTMLInputElement).value}
          placeholder="Search documentation..."
          aria-label="Search documentation"
          class="w-full rounded-full border border-zinc-800 bg-zinc-900/80 py-2 pl-10 pr-4 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-zinc-600 focus:bg-zinc-900 focus:ring-2 focus:ring-zinc-700/40"
        />
        {results().length > 0 && (
          <ul class="absolute left-0 right-0 top-full z-50 mt-2 space-y-1 overflow-hidden rounded-2xl border border-zinc-800 bg-[#111113] p-1.5 shadow-2xl shadow-black/40">
            {results().map(item => (
              <li key={item.path}>
                <RouterLink
                  to={item.path}
                  onClick={() => query.value = ''}
                  class="block rounded-full px-4 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  {item.title}
                </RouterLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  },
})
