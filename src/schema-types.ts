export class SourceGroup {
    isMultiple: boolean
    sids: number[]
    name?: string
    expanded?: boolean
    index?: number // available only from groups tab container

    constructor(sids: number[], name: string = null) {
        name = (name && name.trim()) || "订阅源组"
        if (sids.length == 1) {
            this.isMultiple = false
        } else {
            this.isMultiple = true
            this.name = name
            this.expanded = true
        }
        this.sids = sids
    }
}

export enum ViewType {
    Cards, List, Customized
}

export enum ThemeSettings {
    Default = "system", 
    Light = "light", 
    Dark = "dark"
}

export type SchemaTypes = {
    version: string
    theme: ThemeSettings
    pac: string
    pacOn: boolean
    view: ViewType
    locale: string
    sourceGroups: SourceGroup[]
    fontSize: number
    menuOn: boolean
    fetchInterval: number
}
