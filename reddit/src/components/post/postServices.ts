import crypto from "crypto";

export const makeID = (length: number) => {
  return crypto.randomBytes(length).toString("hex");
};

export const stringToSlug = (str: string) => {
  str = str
    .replace(/\s/g, "_")
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\_]/g, "");
  return str;
};
