import type { TocItem } from '@/types'
const toc: Record<string, TocItem[]> = { '/': [{ id: 'welcome', text: 'Welcome' }, { id: 'quick-start', text: 'Quick Start' }], '/posts': [{ id: 'overview', text: 'Overview' }, { id: 'parameters', text: 'Parameters' }, { id: 'response', text: 'Response' }] }
export default toc
