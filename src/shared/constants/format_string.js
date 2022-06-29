function isNullOrEmpty(value) {
  return value === null || value === undefined || value === '';
}

export function formatString(source, args) {
  if (isNullOrEmpty(source)) return source;

  return Array.isArray(args)
    ? args.reduce(
        (accumulator, value, index) =>
          accumulator.replace(`{${index}}`, value?.toString()),
        source
      )
    : Object.entries(args).reduce(
        (accumulator, [key, value]) =>
          accumulator.replace(`{${key}}`, value?.toString()),
        source
      );
}