module.exports = (date, separator, glue) => {
  separator = separator || "/"
  glue = glue || "-"
  return date.split(separator).reverse().join(glue)
}
