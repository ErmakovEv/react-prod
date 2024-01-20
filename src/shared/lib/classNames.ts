type Mods = Record<string, string | boolean>;

interface IClassNamesProps {
  cls: string,
  mods?: Mods,
  additional?: string[]
}

export function classNames({ cls, mods, additional }: IClassNamesProps) {
  const add = additional || [];
  const md = mods || {};

  return [cls, ...add, ...Object.entries(md).filter(([, value]) => value).map(([className]) => className)].join(' ');
}
