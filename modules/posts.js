let posts = [];
// POST CLASS
export class Post {
  #title;
  #content;
  #id;
  #author;
  #creationDate;
  constructor(title, id, content, author, creationDate, comments = []){
    this.#title = title;
    this.#content = content;
    this.#id = id;
    this.#author = author;
    this.#creationDate = creationDate;
    this.comments = comments;
    this.commentCount = comments.length;
  }
  set commentList(newComment){
    this.comments.push(newComment);
  }
  get commentList(){
    return this.comments;
  }
  commentAdded(){
    this.commentCount++
  }
  commentDeleted(){
    this.commentCount--
  }

  post = () => {
    return `
    <div id="post-${this.#id}">
      <h1>${this.#title}</h1>
      <ul>
        <li>${this.#author}</li>
        <li>${this.#creationDate}</li>
      </ul>
      <p>${this.#content}</p>
      <Section>
      <h3>Comments:</h3>
      <label for="comments-${this.#id}">
        <input id="comments-${this.#id}" name="comment-${this.id}" type="textarea">
        <input id="btn-comments-${this.#id}-submit" value="submit comment" type="submit">
      </label>
      <ul><li>${this.comments}</li></ul>
    </div>
    `;
  }
  register = () => {
    const el = document.getElementById(`btn-comments-${this.#id}-submit`);
      el.addEventListener('click', function (e){
      e.preventDefault();
      console.log(`added`); // api: send comment to db, on verification, append to comments(first child)
    }); 
  }
}

/**
 * Build template of posts
 */
// for(i=0; i<api.length; i++){
//   let newPost = new Post(
//     api[i]["title"],
//     api[i]["id"],
//     api[i]["post"],
//     api[i]["author"],
//     api[i]["creationDate"],
//     api[i]["comments"],
//   );
//   posts.push(newPost);
// }
