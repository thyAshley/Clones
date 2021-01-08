import { LinkProps } from "react-router-dom";

export interface FormComposition {
  Error: React.FC;
  Base: React.FC<React.FormHTMLAttributes<HTMLFormElement>>;
  Title: React.FC;
  Text: React.FC;
  TextSmall: React.FC;
  Submit: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;
  Link: React.FC<LinkProps>;
}
