const posts = [
  { title: "Post Onea", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 2000);
  });
}



function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      console.log("push success");
      let error = false;
      if (error) {
        reject("Error!!");
      } else {
        resolve();
      }
    }, 3000);
  });
}

// .then สมัยเก่า ปัญหาคือถ้า function เยอะ ต้อง .then เยอะ ละก็ต้อง return promise ทุกครั้ง
// createPost({ title: "Post Three", body: "This is post three" }).then(getPosts);

// async/await สมัยใหม่
async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
  
}
init();

