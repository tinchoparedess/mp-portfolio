import es from "./es";
import en from "./en";
import pt from "./pt";
import it from "./it";

export const DICTS = { es, en, pt, it };
export type Lang = keyof typeof DICTS;
export default DICTS;
