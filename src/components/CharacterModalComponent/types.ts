interface Iimage {
    path?: string,
    extension?: string,
    name?: string,
}

type props = {
    data: Iimage,
    index: number,
    totalLength : number
}

export type Props = props