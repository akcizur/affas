import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ListPostsPage',
  setup: () => () => (
    <article>
      <h1 id="overview">List Posts</h1>
      <p>Endpoint vrací seznam příspěvků s podporou stránkování a řazení.</p>

      <h2 id="parameters">Parametry</h2>
      <div class="my-4 overflow-x-auto rounded-2xl border border-zinc-800 bg-[#111113] p-2 shadow-sm shadow-black/20">
        <table class="w-full border-separate border-spacing-y-1 text-sm">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Name</th>
              <th class="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Type</th>
              <th class="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['page', 'number', 'Stránka výsledků'],
              ['limit', 'number', 'Počet položek, max 100'],
              ['sort', 'string', 'asc nebo desc'],
            ].map(parameter => (
              <tr key={parameter[0]} class="group">
                <td class="rounded-l-full bg-zinc-900 px-4 py-3 font-mono text-zinc-100 transition-colors group-hover:bg-zinc-800">{parameter[0]}</td>
                <td class="bg-zinc-900 px-4 py-3 font-mono text-xs text-zinc-500 transition-colors group-hover:bg-zinc-800">{parameter[1]}</td>
                <td class="rounded-r-full bg-zinc-900 px-4 py-3 text-zinc-300 transition-colors group-hover:bg-zinc-800">{parameter[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="response">Příklad odpovědi</h2>
      <pre class="shiki"><code>{JSON.stringify({ data: [{ id: 1, title: 'První příspěvek' }, { id: 2, title: 'Druhý příspěvek' }], total: 42, page: 1, limit: 10 }, null, 2)}</code></pre>
    </article>
  ),
})
