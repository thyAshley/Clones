export interface Link {
  to: string;
  src?: string;
}

export interface HeaderComposition {
  Frame: React.FC;
  Logo: React.FC<Link>;
  ButtonLink: React.FC<Link>;
}

export interface HeaderProps {
  bg?: boolean;
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
