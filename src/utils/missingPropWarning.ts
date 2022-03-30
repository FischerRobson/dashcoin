/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

export function missingPropWarning(props: string[], obj: any): void {
  const propsValidation = props.map((prop) => {
    if (obj[prop] === undefined) {
      return `${prop}`;
    }
  });
  console.log(propsValidation);

  const missingProps = propsValidation.filter((e) => e);

  if (missingProps.length === 0) {
    return;
  }

  throw new Error(`Missing props: ${missingProps.join(', ')}`);
}
