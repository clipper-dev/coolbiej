interface PropsTableCell extends Props {
  strong?: boolean
  align?: 'left' | 'center' | 'right'
}
interface PropsTableCellFunctionable extends PropsTableCell {
  onClick?: (...args: Type) => void
}
interface PropsTableHeader extends PropsTableCell {
  sortable?: boolean
  sort?: 'asc' | 'desc' | 'none'
  onClick?: (...args: Type) => void
}
