# BackEnd
Back End

API Documentation:

ACCOUNT MANAGEMENT:

TO REGISTER AS OPERATOR:
.post(https://foodtrucktrackr.herokuapp.com/api/auth/register/operators)
body needs to have: username, email and password

{ username: “michaeljackson”, email: “michaeljackson@gmail.com”, password: “beatit” }

TO REGISTER AS DINER:
.post(https://foodtrucktrackr.herokuapp.com/api/auth/register/diners)
body needs to have: username, email, password 
location is optional

{ username: “barackobama”, email: “barack.obama@gmail.com”, password: “yeswecan”, location: “Chicago, IL” }

TO LOGIN AS OPERATOR:
.post(https://foodtrucktrackr.herokuapp.com/api/auth/login/operators)
body needs to have: username and password

{ username: “michaeljackson”, password: “beatit” }

TO LOGIN AS DINER:
.post(https://foodtrucktrackr.herokuapp.com/api/auth/login/diners)
body needs to have: username and password

{ username: “barackobama”, password: “yeswecan” }

TO RETRIEVE OPERATOR ACCOUNT INFO:
.get(https://foodtrucktrackr.herokuapp.com/api/operator/1)

TO RETRIEVE DINER ACCOUNT INFO:
.get(https://foodtrucktrackr.herokuapp.com/api/diner/1)

TO EDIT OPERATOR ACCOUNT (i.e. change username/email/password):
.put(https://foodtrucktrackr.herokuapp.com/api/operator/1)
body needs to have: username, email and password
id will self-populate based on params

{ username: “drake”, email: “drake@gmail.com”, password: “hotlinebling” }

TO DELETE OPERATOR ACCOUNT:
.delete(https://foodtrucktrackr.herokuapp.com/api/operator/4)

TO EDIT DINER ACCOUNT (i.e. change username/email/password/location):
.put(https://foodtrucktrackr.herokuapp.com/api/diner/1)
body needs to have: username, email and password
location is optional
id will self-populate based on params

{ username: “willsmith”, email: “will.smith@gmail.com”, password: “badboys4life” }

TO DELETE DINER ACCOUNT:
.delete(https://foodtrucktrackr.herokuapp.com/api/diner/4)



LISTING OF ACCOUNTS: 

GET ALL OPERATORS:
.get(https://foodtrucktrackr.herokuapp.com/api/accounts/operators)

GET ALL DINERS:
.get(https://foodtrucktrackr.herokuapp.com/api/accounts/diners)


OPERATOR MANAGEMENT OF TRUCKS

TO GET TRUCKS BY OPERATOR:
.get(https://foodtrucktrackr.herokuapp.com/api/operator/2/trucks)

TO ADD A TRUCK:
.post(https://foodtrucktrackr.herokuapp.com/api/operator/2/trucks)
body needs to have: name and cuisine_type
image, physical_address are optional
operator_id will self-populate based on params

{
    "name": "Taqueria Mi Rancho",
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/0f/f2/a6/1e/photo0jpg.jpg",
    "cuisine_type": "Mexican",
    "physical_address": “1434 1st Ave, Oakland, CA”
  }


TO EDIT A TRUCK:
.put(https://foodtrucktrackr.herokuapp.com/api/operator/2/truck/3)
body needs to have: name and cuisine_type
image is optional
operator_id and truck_id will self-populate based on params

{
    "name": "Taqueria Mi Rancho",
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/0f/f2/a6/1e/photo0jpg.jpg",
    "cuisine_type": "Mexican",
    "physical_address": “1322 Campbell St, Oakland, CA”
  }

TO DELETE A TRUCK:
.delete(https://foodtrucktrackr.herokuapp.com/api/operator/2/truck/3)


OPERATOR MANAGEMENT OF MENU

TO ADD A MENU ITEM:
.post(https://foodtrucktrackr.herokuapp.com/api/operator/2/truck/3/items)
body needs to have: name and price
description is optional
truck_id and id will self-populate based on params

{ name: “pork lumpia”, description: “Filipino version of an eggroll”, price: 2.50 }

TO EDIT A MENU ITEM:
.put(https://foodtrucktrackr.herokuapp.com/api/operator/2/truck/3/item/7)
body needs to have: name and price
description is optional
truck_id and id will self-populate based on params

{ name: “pork lumpia”, description: “Filipino version of an eggroll”, price: 3.50 }

TO DELETE A MENU ITEM:
.delete(https://foodtrucktrackr.herokuapp.com/api/operator/2/truck/3/item/7)


DINER FEATURES FOR TRUCKS/MENU

GET ALL TRUCKS:
.get(https://foodtrucktrackr.herokuapp.com/api/trucks)

GET MENU FOR PARTICULAR TRUCK:
.get(https://foodtrucktrackr.herokuapp.com/api/trucks/2/menu)

GET REVIEWS FOR PARTICULAR TRUCK:
.get(https://foodtrucktrackr.herokuapp.com/api/trucks/1/reviews)

ADD A REVIEW OF TRUCK:
.post(https://foodtrucktrackr.herokuapp.com/api/trucks/1/reviews)
body needs to have: diner_id, star_rating and review

{ diner_id: 1, star_rating: 5, review: “delicious, love this place!” }





