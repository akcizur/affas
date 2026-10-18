export interface NavChild { title: string; path: string }
export interface NavGroup { title: string; children: NavChild[] }
export interface TocItem { id: string; text: string }
export interface ApiParam { name: string; type: string; description: string }
export interface ApiEndpoint { parameters: ApiParam[]; response: Record<string, string> }
