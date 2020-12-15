import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as S from './styles';

const convertBreadcrumb = (string) => {
  if (!string) return;
  return string.replace(/-/g, ' ');
};

//TODO:
const Breadcrumbs = () => {
  const router = useRouter();
  const personName = useSelector((state) => state.person.name);
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          // Ugly hack goes here
          breadcrumb: i === 0 ? path : personName,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router, personName]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <S.Breadcrumbs className="breadcrumb" aria-label="breadcrumbs">
      {breadcrumbs.map(({ href, breadcrumb }, index) => {
        return (
          <React.Fragment key={href}>
            <li>
              <Link href={href} passHref>
                <S.Link>{convertBreadcrumb(breadcrumb)}</S.Link>
              </Link>
            </li>
            {index < breadcrumbs.length - 1 ? '\u00a0/\u00a0' : ''}
          </React.Fragment>
        );
      })}
    </S.Breadcrumbs>
  );
};

export default Breadcrumbs;
