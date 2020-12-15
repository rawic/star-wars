import { useRouter } from 'next/router';
import Link from 'next/link';
import { StyledLinkWrapper } from './index.styles';
import React, { Children } from 'react';

const ActiveLink = ({ children, ...props }) => {
  const { asPath } = useRouter();

  const active = asPath.includes(props.href);

  return (
    <li>
      <Link {...props} passHref>
        <StyledLinkWrapper $active={active}>{children}</StyledLinkWrapper>
      </Link>
    </li>
  );
};

export default ActiveLink;
