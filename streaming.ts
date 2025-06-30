/**
 * Splits the input string into three parts based on the first occurrence of the specified delimiter.
 *
 * If the delimiter is found:
 *   - The first element of the returned tuple is the substring before the delimiter.
 *   - The second element is the delimiter itself.
 *   - The third element is the substring after the delimiter.
 *
 * If the delimiter is not found:
 *   - The first element is the entire input string.
 *   - The second and third elements are empty strings.
 *
 * @param str - The string to be partitioned.
 * @param delimiter - The delimiter used to split the string.
 * @returns A tuple of three strings: [beforeDelimiter, delimiter, afterDelimiter].
 */
function partition(str: string, delimiter: string): [string, string, string] {
  const index = str.indexOf(delimiter);
  if (index !== -1) {
    return [
      str.substring(0, index), // Portion before the delimiter.
      delimiter,               // The delimiter itself.
      str.substring(index + delimiter.length) // Portion after the delimiter.
    ];
  }

  // When delimiter is not found, return the whole string with empty strings for other parts.
  return [str, '', ''];
}