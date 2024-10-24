# Fantasy-Football

This is a simple demonstration task with Nuxt, Vuetify, TypeScript, and Tailwind.

## Project Setup

- Clone the Repository:

```sh
git clone https://github.com/Casmir293/Fantasy-Football
```

```sh
cd Fantasy-Football
```

- Install Dependencies:

```sh
npm install
```

- Install Mock Server:

```sh
npm install -g http-server
```

- Run the Mock server on the Database Folder:

```sh
http-server ./database --cors
```

- Run the App:

```sh
npm run dev
```

## Note

Remember to update the BASE_URL on line four (4) of the database/api.ts directory to your mock up server URL.

```sh
const BASE_URL = 'http://127.0.0.1:8080'
```

## Acknowledgments

- Shoutout to the Nuxt, TypeScript, Vuetify, Tailwind communities for their excellent tools and resources.
