import P from 'prop-types';
import Head from 'next/head';

import { BaseTemplate } from '../BaseTemplate';

import { theme } from '../../styles/theme';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import { GridText } from '../../components/GridText';
import config from '../../config';

export default function Home({ data }) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <BaseTemplate
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>

        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta
          name="description"
          content="As landing pages mais legais da Internet."
        />
      </Head>

      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </BaseTemplate>
  );
}

Home.propTypes = {
  data: P.array,
};
