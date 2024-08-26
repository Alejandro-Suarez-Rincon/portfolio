# Portfolio

Porfolio using

- NextJs
- TailwindCSS
- Directus

## Directus Added to Next.Js

To use directus with next.js, nedd this configurations.

1. In the directory where Next.js is located, install the Directus SDK. `npm install @directus/sdk`
2. In the environment variables, enable CORS. `CORS_ENABLED=true`
3. To upload images to Directus, permissions need to be granted. `docker exec -u root <directus-container-id> chown -R node:node /directus/database /directus/extensions /directus/uploads`
4. Restart the Directus container. `docker restart <directus-container-id>`
