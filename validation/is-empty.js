/**
 * La fonction "is-empty" de validator vérifie uniquement sur les Strings pas les objets ou autes types. Cette fonction Permet de vérifer si les valeurs exites de objets, strings ou null/undefined.
 */

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
