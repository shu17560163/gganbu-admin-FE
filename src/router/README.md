# Router

According to the Auth, we divide Routes into three kinds for users who have different roles.

- ContantRoutes
  - for all users
- AsyncRoutes
  - according to the role of user
    which need to verify the Page-Auth routes from Backend.
- OtherRoutes(Tentative) 3xx 4xx 5xx

## Lazy Load

use

- React.lazy
- React.Suspense

to realize lazy load component
