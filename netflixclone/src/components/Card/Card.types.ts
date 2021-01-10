interface itemProps {
  item: string;
}

export interface GroupProps {
  flexDirection?: string;
  alignItems?: string;
  margin?: string;
}

export interface MaturityProps {
  rating: number;
}

export interface FeatureTextProps {
  fontWeight: string;
}

export interface FeatureProps {
  src?: string;
  category?: string;
}

export interface CardComposition {
  Title: React.FC;
  Group: React.FC;
  SubTitle: React.FC;
  Text: React.FC;
  Entities: React.FC;
  Meta: React.FC;
  Image: React.FC<{
    src: string;
  }>;
  Item: React.FC<itemProps>;
  FeatureText: React.FC<FeatureTextProps>;
  Feature: React.FC<FeatureProps>;
  FeatureTitle: React.FC;
  FeatureClose: React.FC;
  Content: React.FC;
  Maturity: React.FC<MaturityProps>;
}
