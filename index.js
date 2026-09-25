function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach((post) => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.append(h1, p);
    postList.append(li);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    const posts = [
      {
        title: "sunt aut facere repellat",
        body: "quia et suscipit\nsuscipit"
      }
    ];

    displayPosts(posts);
  }
}

fetchPosts();
