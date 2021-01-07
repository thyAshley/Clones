export default interface JumbotronProps {
  direction: string;
}

interface JumbotronImgProps {
  src: string;
  alt: string;
}

export interface JumbotronComposition {
  Container: React.FC;
  Title: React.FC;
  SubTitle: React.FC;
  Image: React.FC<JumbotronImgProps>;
  Pane: React.FC;
}
