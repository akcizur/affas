import { defineComponent, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    const crumbs = computed(() =>
      route.path
        .split('/')
        .filter(Boolean)
        .map((part, index, parts) => ({
          text: part[0]?.toUpperCase() + part.slice(1),
          path: index === parts.length - 1 ? null : '/' + parts.slice(0, index + 1).join('/'),
        })),
    )

    return () => (
      <nav class="mb-6 flex items-center gap-1.5 text-sm text-zinc-500" aria-label="Breadcrumb">
        <RouterLink to="/" class="rounded-full px-2 py-1 -ml-2 hover:bg-zinc-900 hover:text-zinc-200">Home</RouterLink>
        {crumbs.value.map((crumb, index) => (
          <span key={index} class="flex min-w-0 items-center gap-1.5">
            <ChevronRight class="size-3.5 shrink-0 text-zinc-700" />
            {crumb.path
              ? <RouterLink class="truncate rounded-full px-2 py-1 hover:bg-zinc-900 hover:text-zinc-200" to={crumb.path}>{crumb.text}</RouterLink>
              : <span class="rounded-full px-2 py-1 font-medium text-zinc-200">{crumb.text}</span>}
          </span>
        ))}
      </nav>
    )
  },
})
