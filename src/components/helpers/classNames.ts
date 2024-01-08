type Mods = Record<string, string | boolean>

interface IClassNamesProps {
    cls: string,
    mods?: Mods,
    additional?: string[]
}

export function classNames({cls, mods, additional}: IClassNamesProps) {
    const add = additional ? additional : [];
    const md = mods ? mods : {}

    return [cls, ...add,  ...Object.entries(md).filter(([className, value]) => {
        return value
    }).map(([className, value]) => className)].join(' ')
}