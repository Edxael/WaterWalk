# WateWalk


## Auth0

in the root of the project create the file "config.js"
there put the following code: 

```
export const AUTH_CLIENT_ID = "";
export const AUTH_DOMAIN = "https://";
export const ID_TOKEN_KEY = "todo-id-token";
export const NONCE_KEY = "todo-nonce";
```

Note: the Auth_ID and the Domain are not provided, the project will run with no problem, 
for the real data ask a member of your team. 

the file "config.js" is already listed in the .gitignore file and should NOT be commited. 