import React from 'react';
import { withRouter } from 'next/router';
import clsx from 'clsx';

const ActiveLink = ({
  router, href, children, activeClassName, className,
}: any) => {
  (function prefetchPages() {
    if (typeof window !== 'undefined') {
      router.prefetch(router.pathname);
    }
  }());

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    router.push(href);
  };
  let newHref = href.pathname;
  if (href.pathname[href.pathname.length - 1] === '/') {
    newHref = href.pathname;
    const newLink = newHref.split('');
    newLink.pop();
    newHref = newLink.join('');
  }
  const isCurrentPath = router.pathname.replace('[id]', router.query.id) === newHref || router.asPath === newHref;
  return (
    <a
      href={href}
      onClick={handleClick}
      className={clsx(isCurrentPath ? activeClassName : '', className)}
    >
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
