# Missing Prop Warning

This function aims to handle objects coming from a POST request and trigger an alert if any of the properties of that object is missing.

```ts
export function missingPropWarning(props: string[], obj: any): void {
  const propsValidation = props.map((prop) => {
    if (obj[prop] === undefined) {
      return `${prop}`;
    }
  });

  const missingProps = propsValidation.filter((e) => e);

  if (missingProps.length === 0) {
    return;
  }

  throw new Error(`Missing props: ${missingProps.join(', ')}`);
}
```

First argument is an array of strings, containing all the expected attributes of object passed on second argument.
The function check if all props exists in object, if the prop isn't found, it is returned in map function, then the array containing the props is cleaned, keeping only 
missing props (valid props retuns undefined). If no missing props was found, nothing is returned, else a Error is thrown informing the missing props.

```ts
// User Attributes expected
const userProps = [
  'name',
  'lastName',
  'email',
  'birthday',
  'gender',
  'cpf',
];
```

The request object JSON:

```json
{
  "lastName": "Fischer",
  "birthday": "23/11/2000",
  "cpf": "12312312312",
  "email": "teste@gmail.com",
  "gender": "M"
}
```

```ts
//function call
missingPropWarning(userProps, requestUser);
```

So, the response is:

```json
{
  "message": "Missing props: name"
}
```
