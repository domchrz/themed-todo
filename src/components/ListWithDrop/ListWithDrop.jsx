import { List } from './styled';

export default function ListWithDrop({children, items, ...rest}) {
  return (
    <List {...rest}>{children(items)}</List>
  )
}

