// query select both inputs and sav btn
var saveBtn = document.querySelector('#save-btn');
var ideas = [];




// event listener for save button that generates a new card and populates with inputs
// event listener will also save the data in local storage

saveBtn.addEventListener('click', createIdea)

// create function to save inputs in local storage
function createIdea() {
  var title = document.querySelector('.title-style').value;
  var body = document.querySelector('.body-style').value;
  var newIdea = new Idea(title, body, "Swill", Date.now());
  ideas.push(newIdea);
  newIdea.saveToStorage(ideas)
}

  // for (var i = 0; i < inputIdeas.length; i++) {
  //   var currentPost = inputIdeas[i];
  //   var postId = currentPost.id;
  //   newPost[postId] = currentPost.value;
  // }

  // var stringIdea = JSON.stringify(newPost);
  // console.log(newPost);
  //
  // localStorage.setItem('post', stringIdea);
  //
  // var post = localStorage.getItem('post');
  //
  // post = JSON.parse(post);



  // post.push(newPost);
  // console.log(post);
}

// create function to JSON the local storage inputs


// create function to generate card

// append card to the DOM

// idea card persists after
