# Project REST-Rant

REST-Rant is an app where users can review restaurants.

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes
| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | home page |
| GET | `/places` | Places index page |
| POST | `/places` | Create a new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places/:id` | Details about a particular place|
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Form page for editing an existing place  |
| DELETE | `/places/:id` | Delete a particular place |
| POST | `/places/:id/rant` | Create a rant (comment) about a particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place |
| GET | `*` | 404 page (matches any route not defined above) |

**places** 
(Full CRUD)

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |