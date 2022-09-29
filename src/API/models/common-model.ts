export interface Iitems {
    name: string,
    resourceURI : string,
    type ?: string
}

export interface ICommonModel {
    available: number,
    collectionURI : string,
    returned: number,
    items : Iitems[],
}