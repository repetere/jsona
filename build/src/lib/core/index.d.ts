import { JSONAOptions, VXAConfig } from "../../../types";
import { ReactElement } from "react";
export default function JSONA(options?: JSONAOptions): Promise<{
    app: ReactElement;
    options: VXAConfig;
}>;
