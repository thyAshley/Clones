export interface Link {
  to: string;
  src?: string;
}
export interface TextLink {
  active?: string;
}

export interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface HeaderComposition {
  Frame: React.FC;
  Logo: React.FC<Link>;
  ButtonLink: React.FC<Link>;
  Feature: React.FC;
  Text: React.FC;
  Group: React.FC;
  FeatureCallOut: React.FC;
  TextLink: React.FC<TextLink>;
  Picture: React.FC<PictureProps>;
  Profile: React.FC;
  Dropdown: React.FC;
  Search: React.FC<SearchProps>;
}

export interface HeaderProps {
  bg?: boolean;
  src?: string;
}

export interface BackgroundProps {
  src?: string;
  dontShowOnSmallViewPort?: string;
}

export interface LinkProps {
  active: string;
}
export interface InputProps {
  active: boolean;
}

export interface PictureProps {
  src: string;
}
