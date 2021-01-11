import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface HeaderOptionProps {
  avatar?: string;
  title?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
