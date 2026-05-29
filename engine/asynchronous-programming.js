// Callback is passing a function as an argument of another function
// Callback Hell is the state of many nested callbacks and make the code unreadable, unmaintainable, for example:
const fetchUser1 = (userId, callback) => {
  setTimeout(() => {
    callback({ id: 1, name: "Minh" });
  }, 50);
};

const fetchPosts1 = (userId, callback) => {
  setTimeout(() => {
    callback([
      { id: 1 },
      { id: 2 }
    ]);
  }, 50);
};

const fetchComments1 = (postId, callback) => {
  setTimeout(() => {
    callback(["comment 1", "comment 2"]);
  }, 50);
};

fetchUser1(1, (user) => {
  fetchPosts1(user.id, (posts) => {
    fetchComments1(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});

// Similar code but using Promise
const fetchUser = (userId) => Promise.resolve({ id: 1, name: "Minh" });
const fetchPosts = (userId) => Promise.resolve([{ id: 1 }, { id: 2 }]);
const fetchComments = (postId) => Promise.resolve(["comment 1", "comment 2"]);

fetchUser(1)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(err => console.error(err));

// Still similar code but using async/await + promise
async function displayComments() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

displayComments();