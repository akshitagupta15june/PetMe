## Details

This is a REST API and the API can be accessed at `/api/v1` route. There are currently 4 endpoints: 

1. `GET /api/v1`         ->  Gives a list of all pets
2. `POST /api/v1`        -> To add another Pet
3. `GET /api/v1/pet/id` -> To get details of only 1 pet
4. `DELETE /api/v1/pet/id` -> To delete only 1 pet

The following details need to be given in the body of `POST` request
- name
- breed (optional)
- color
- species
- gender
- location
- img (optional) (Not functional)

### This API was made following the MVC architecture so it should be easily expandable. 

## How to Use? 

1. Install all the node modules: `npm i`
2. Create a env file (inside the server) called `config.env` and store all secrets in there. Template of this file is provided
3. Now `npm start` to start the server. 


# Donate pet section 

## Details

Related Issue: closes #41 
This is a REST API and the API can be accessed at `/api/v1` route. There are currently 8 endpoints: 

### Under Pet
| No | Route | Description |
| --- | --- | --- |
| 1. | `GET /api/v1/pet/`      |    Gives a list of all pets |
| 2. | `POST /api/v1/pet/`       |  To add another Pet |
| 3. | `GET /api/v1/pet/:id` |  To get details of only 1 pet |
| 4. | `DELETE /api/v1/pet/:id` |  To delete only 1 pet |


### Under Donation
| No | Route | Description |
| --- | --- | --- |
| 1. | `GET /api/v1/donation/`      |    Gives a list of all pets |
| 2. | `POST /api/v1/donation`       |  To add another Pet |
| 3. | `GET /api/v1/donation/:id` |  To get details of only 1 pet |
| 4. | `DELETE /api/v1/donation/:id` |  To delete only 1 pet |

## Request Body

The following details need to be given in the body of `POST` request for **PET**
- name
- breed (optional)
- color
- species
- gender
- location
- img (optional) (Not functional)

The following details need to be given in the body of `POST` request for **Donation**
- petName
- breed (optional)
- color
- species
- gender
- location
- img (optional) (Not functional)
- name
- address
- city
- state
- country
- email
- phone

***This API was made following the MVC architecture so it should be easily expandable.*** 

## How to Use? 

1. Install all the node modules: `npm i`
2. Create a env file (inside the server) called `config.env` and store all secrets in there. Template of this file is provided
3. Now `npm start` to start the server. 
