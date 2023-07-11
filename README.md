# Installation and Setup Instructions

Clone down this repository. You will need `Docker`

To connect the application to the DB, you need to create a `.env` file in the server root directory that looks like this:

```
DATABASE_URL=file:./app.db
PORT=4000
...
```

For the application to work correctly, you need to create docx templates in the `server/public/templates` directory.

After that just run: `docker-compose up`
