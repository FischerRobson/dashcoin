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

Using the User as example, imagine you have this GET request:

```ts
export class GetUserController {
  async handle(req: Request, res: Response) {
    const getUserService = new GetUserService();

    const {
      name, lastName, cpf, email,
    } = req.query;

    const user = await getUserService.execute({
      name, lastName, cpf, email,
    });

    return res.json(user);
  }
}
```

You revice Name, LastName, Cpf and Email. You can revice all of them, or three, or two, or just one. So how can we deal with this?
This is the objective of objectEmptyValuesCleaner!

In a scenario where you only get the name, the other attributes are undefined., but if you get name and lastName, you need to make a search using AND operator,
so if the undefined values still in, the search never will find a user.

Returning for the fist example, you only have the name:

```
{{url}}/users?name=Robson
```

But, on Controller you get all parameters:

```ts
const {
  name, lastName, cpf, email,
} = req.query;
```

So, you pass the object for the function, and fowards to search:

```ts
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
```