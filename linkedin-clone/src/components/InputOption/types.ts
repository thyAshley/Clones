import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface InputOptionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color?: string;
}
