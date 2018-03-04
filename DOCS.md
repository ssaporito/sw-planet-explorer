# sw-planet-explorer v0.0.0



- [Planet](#planet)
	- [Create planet](#create-planet)
	- [Delete planet](#delete-planet)
	- [Retrieve planet](#retrieve-planet)
	- [Retrieve planets](#retrieve-planets)
	- [Update planet](#update-planet)
	


# Planet

## Create planet



	POST /planets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Planet's name.</p>							|
| climate			| 			|  <p>Planet's climate.</p>							|
| terrain			| 			|  <p>Planet's terrain.</p>							|

## Delete planet



	DELETE /planets/:id


## Retrieve planet



	GET /planets/:id


## Retrieve planets



	GET /planets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update planet



	PUT /planets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Planet's name.</p>							|
| climate			| 			|  <p>Planet's climate.</p>							|
| terrain			| 			|  <p>Planet's terrain.</p>							|


