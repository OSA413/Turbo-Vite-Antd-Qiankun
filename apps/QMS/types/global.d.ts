interface Window {
  aliveController: {
    drop: (name: string | RegExp) => Promise<boolean>
    dropScope: (name: string | RegExp) => Promise<boolean>
    refresh: (name: string | RegExp) => Promise<boolean>
    refreshScope: (name: string | RegExp) => Promise<boolean>
    clear: () => Promise<boolean>
    getCachingNodes: () => Array<{
      createTime: number
      updateTime: number
      name?: string
      id: string
      [key: string]: any
    }>
  }
}
