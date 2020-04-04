import Head from "next/head";
import { SingletonRouter, withRouter } from "next/router";
import React, { FC } from "react";

const Meta: FC<Props> = ({ title = "", description = "", router, url }) => {
  const currentRoute = url ? url : `https://www.mydomain.com${router.route}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={currentRoute} />

      <meta name="twitter:url" content={currentRoute} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentRoute} />
    </Head>
  );
};

export default withRouter(Meta);

interface Props {
  title?: string;
  description?: string;
  router: SingletonRouter;
  url?: string;
}

export const DefaultMeta: FC = () => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/favicon.png" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:image" content="" />
    <meta name="twitter:creator" content="@bjoern_rave" />
    <meta name="twitter:site" content="@plezzles" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Plezzles" />
    <meta property="og:image" content="" />
  </Head>
);
