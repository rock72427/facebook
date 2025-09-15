const postBtn = document.getElementById("postBtn");
const postInput = document.getElementById("postInput");
const postsContainer = document.getElementById("posts");

postBtn.addEventListener("click", () => {
  const text = postInput.value.trim();
  if (text !== "") {
    const post = document.createElement("div");
    post.classList.add("post");
    post.textContent = text;
    postsContainer.prepend(post);
    postInput.value = "";
  }
});
