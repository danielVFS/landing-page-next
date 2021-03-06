import Head from 'next/head';

import { BaseTemplate } from '../BaseTemplate';

import { theme } from '../../styles/theme';

import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { GridText, GridTextProps } from '../../components/GridText';
import config from '../../config';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type SectionProps =
  | GridImageProps
  | GridContentProps
  | GridTwoColumnsProps
  | GridTextProps;

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type HomeProps = {
  data: PageData[];
};

export default function Home({ data }: HomeProps) {
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
          return (
            <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
          );
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...(section as GridTextProps)} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }
      })}
    </BaseTemplate>
  );
}
