// import React from 'react';
// import Link from 'next/link';
// import { StyledLinkWrapper } from './index.styles';
// import { useRouter } from 'next/router';

// const NavLink = ({ href, children }) => {
//   const router = useRouter();

//   let active = false;
//   if (router.pathname === href) {
//     active = true;
//   }

//   return (
//     <li>
//       <Link href={href} passHref>
//         <StyledLinkWrapper $active={active}>{children}</StyledLinkWrapper>
//       </Link>
//     </li>
//   );
// };

// export default NavLink;

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
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
