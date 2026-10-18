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
    return () => <div class="min-h-screen flex flex-col bg-white">
      <TopBar />
      {ui.leftSidebarOpen && <div class="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => ui.closeAll()} />}
      <div class="flex flex-1 pt-[60px]"><SidebarLeft /><main class="flex-1 min-w-0"><div class="doc-content max-w-3xl mx-auto px-4 md:px-8 py-8"><Breadcrumb /><RouterView /><Pagination /></div></main><SidebarRight /></div>
    </div>
  }
})
