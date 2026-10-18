import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import TopBar from '@/components/TopBar'
import SidebarLeft from '@/components/SidebarLeft'
import SidebarRight from '@/components/SidebarRight'
import Breadcrumb from '@/components/Breadcrumb'
import Pagination from '@/components/Pagination'
import { useUIStore } from '@/stores/ui'

export default defineComponent({
  name: 'DocsLayout',
  setup() {
    const ui = useUIStore()

    return () => (
      <div class="flex min-h-screen flex-col bg-[#09090b] text-zinc-100">
        <TopBar />
        {(ui.leftSidebarOpen || ui.rightSidebarOpen) && (
          <div
            class="fixed inset-0 z-40 bg-black/65 backdrop-blur-[2px] lg:hidden"
            onClick={() => ui.closeAll()}
          />
        )}
        <div class="flex flex-1 pt-[60px]">
          <SidebarLeft />
          <main class="min-w-0 flex-1">
            <div class="doc-content mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-10">
              <Breadcrumb />
              <RouterView />
              <Pagination />
            </div>
          </main>
          <SidebarRight />
        </div>
      </div>
    )
  },
})
