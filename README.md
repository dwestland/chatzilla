# chatzilla

Run dev environment:
```
npm run dev
```
Access with browser:

```
http://localhost:3000/
```
## Authentication

Setup next-auth with CredentialsProvider for password authentication. Wrapping the entire app by wrapping the root layout with Session provider using:
```
src/app/providers.tsx
```
Protected routes using middleware:
```
src/middleware.ts
```




**Push Prisma**
When using prisma with PlanetScale, migrations are not used. To update the database, use the command:
```
npx prisma db push
```



