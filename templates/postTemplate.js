export const postTemplate = (postData) => {
  return `
  <div id="post-${postData.id}">
    <h1>${postData.title}</h1>
    <p>${postData.creationDate}</p>
    <p>${postData.post}</p>
    <ul>
      <li>${postData.author}</li>
    </ul>
    <p>Comments: </p>
    <ul><li>${postData.comments}</li></ul>
  </div>
  `
}