import { Button, Icon } from './styled';

export default function IconButton({ children, ...rest }) {
  return (
    <Button {...rest} aria-label="button">
      <Icon>{children}</Icon>
    </Button>
  );
}
