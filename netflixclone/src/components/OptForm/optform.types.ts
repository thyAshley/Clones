import { AllHTMLAttributes } from "react";

export interface OptFormComposition {
  Input: React.FC<{
    placeholder: string;
  }>;
  Button: React.FC;
  Text: React.FC;
}
