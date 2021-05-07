import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

function importData (array){
  let urlArray = [];
  array.forEach(login => {
    urlArray.push(`https://api.github.com/users/${login}`)});
  urlArray.forEach(link =>
    axios.get(link)
  .then( response => {
      cardCreator(response.data)
  }))
}


// Original answer for Step 1 below - I made a function (above) so that I wouldn't have to write the code to import things multiple times
        // axios.get("https://api.github.com/users/ChristopherHenao")
        // .then( response => {
        //     cardCreator(response.data)
        // })
        // .catch( err => {
        //     console.log(`error: ${err}`)
        // })
//


// Stretch Goal Answer - since I didn't have any followers on Github, I did the task for the followers of a different account 
axios.get("https://api.github.com/users/bigknell/followers")
.then(obj => obj.data )

.then(obj => 
 obj.map(item => item.login))
  
.then(array =>
  importData(array))

.catch(err =>
  console.log(`error: ${err}`))


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "ChristopherHenao",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];


importData(followersArray)

// Original answer to Step 5 - I was able to shorten it after making the function importData
                  // followersArray.forEach(function(item){
                  //   axios.get(`https://api.github.com/users/${item}`)
                  //     .then( response => {
                  //         cardCreator(response.data)
                  //     })
                  //     .catch( err => {
                  //         console.log(`error: ${err}`)
                  //     })
                  // })
//







/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const parentDiv = document.querySelector(".cards");

function cardCreator(obj){

  let cardContainter = document.createElement("div");
  let img = document.createElement("img");
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let username = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");
  let link = document.createElement("a");

  cardContainter.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  img.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = obj.location;
  profile.textContent = "Profile:";
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;
  link.textContent = obj.html_url;
  link.href = obj.html_url;

  parentDiv.appendChild(cardContainter);
  cardContainter.appendChild(img);
  cardContainter.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(link);

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/