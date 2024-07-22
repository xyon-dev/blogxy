import { Post } from "./modules/posts.js";
import { posts } from "./store/posts.js";

let main = document.getElementById("main");

function postsLoop(posts){
  // generate new time line
  for(let i=0; i<posts.length; i++){
    // create new post object
    const newPost = new Post(
      posts[i]["title"],
      posts[i]["id"],
      posts[i]["post"],
      posts[i]["author"],
      posts[i]["creationDate"],
      posts[i]["comments"]
    );
    // assign newPost temp
    let newPostTemp = newPost.post();
    // add new post to output html: do not use innerHTML +=
    // it sucks and doesnt work if youre adding event listeners
    let div = document.createElement("section");
    div.innerHTML = newPostTemp;
    main.append(div);
    // add event listener
    newPost.register();
  }
}
postsLoop(posts);
