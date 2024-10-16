import MyPost from './mypost.js';

async function getPost() {
  let postData = await fetch('https://jsonplaceholder.typicode.com/posts');
  postData = await postData.json();
  return postData;
}

const Post = async () => {
  let posts = await getPost();
  return (
    <div>
      <h2>Fetch data on server side component</h2>
      {
        posts?.map((post) => (
          <div key={post.id}>
            <h4>
              #{post.id} Post Title: {post?.title}
            </h4>
            <MyPost data={post.id}/>
          </div>
        ))
      }
    </div>
  );
};

export default Post;
