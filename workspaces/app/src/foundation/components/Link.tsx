import type { LinkProps } from 'react-router-dom';
import { Link as ReactRouterLink } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
} & LinkProps;

export const Link: React.FC<Props> = ({ children, to, ...rest }) => {
  return (
    <ReactRouterLink to={to} {...rest}>
      {children}
    </ReactRouterLink>
  );
};
