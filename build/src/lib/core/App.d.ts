import { JSONAOptions } from "../../../types";
import { ReactElementLike } from "prop-types";
export declare function getJSONA(options: JSONAOptions): Promise<{
    app: ReactElementLike;
    options: any;
}>;
