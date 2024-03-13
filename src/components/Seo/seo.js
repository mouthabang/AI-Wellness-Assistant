import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Seo = React.memo(({ description, title, keywords }) => {
  const site = {
    title: `Vodacom Lesotho`,
    description: `Vodacom Lesotho`,
  };
  const metaDescription = description || site.description;
  const defaultTitle = site.title;

  return (
    <Helmet
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: !!keywords && keywords.length > 0 ? keywords.join(`, `) : "",
        },
      ]}
    >
  

    </Helmet>
  );
});

Seo.defaultProps = {
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
