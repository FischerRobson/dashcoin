/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

export function missingPropWarning(props: string[], obj: any): string {
  const propsValidation = props.map((prop) => {
    if (obj[prop] === undefined) {
      return `${prop}`;
    }
  });

  const missingProps = propsValidation.filter((e) => e);

  if (missingProps.length === 0) {
    return '';
  }

  return `Missing props: ${missingProps.join(', ')}`;
}
