"use client"; // Add this at the top to mark it as a Client Component

const MyPost = ({data}) => {
  return (
    <>
      {/* <button onClick={() => alert('Hello')}>Click me</button> */}
      <button onClick={() => alert(data)}>Click me</button>
    </>
  );
};

export default MyPost;
