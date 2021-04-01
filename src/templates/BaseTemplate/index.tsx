import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type BaseTemplateProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
  footerHtml: string;
};

export const BaseTemplate = ({
  links,
  logoData,
  footerHtml,
  children,
}: BaseTemplateProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};
