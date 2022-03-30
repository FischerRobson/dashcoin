# Object Empty Values Cleaner

It's a function that receives an object, and remove all attributes with falsy value.

```ts
export function objectEmptyValuesCleaner(obj: Object) {
  const asArray = Object.entries(obj);
  const filtered = asArray.filter(([key, value]) => value);
  const cleaned = Object.fromEntries(filtered);

  return cleaned;
}

```

It was created for GET routes, where the user can request a search with one or more parameters. The Controller will take all parameters as default, but some of them can be falsy, then this function will clean it on Service and the valid parameters is used on Repository method.

Like the example, you revice an object on Service method (don't do the destructuring!), and it's passed to the function objectEmptyValuesCleaner,
the return value is an object with only truthy values, so it's just use the spread operator in the find method.

```ts
export class GetUserService {
  async execute(getUserServiceProps: IGetUserServiceProps) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const findParams = objectEmptyValuesCleaner(getUserServiceProps);

    const user = await usersRepositories.find({
      where: [
        {
          ...findParams,
        },
      ],
    });

    return user;
  }
}
```
