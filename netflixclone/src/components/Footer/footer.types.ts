interface FooterLinkProps {
  href: string;
}

export interface FooterComposition {
  Row: React.FC;
  Column: React.FC;
  Link: React.FC<FooterLinkProps>;
  Title: React.FC;
  Text: React.FC;
  Break: React.FC;
}
