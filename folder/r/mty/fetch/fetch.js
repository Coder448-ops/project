const container=document.getElementById(`postsContainer`)
const limit=20
fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
.then(response => response.json())
      .then(posts =>{
        posts.forEach(post =>{
            const card= document.createElement(`div`);
            card.classList.add(`card`);
            card.innerHTML=`
             <h3>${post.title}</h3>
             <p>${post.body}</p>
             `;
             container.appendChild(card)
             });
})
.catch(error =>{
  container.innerHTML= "<p> Xatolik yuz berdi:" + error.message + "</p>";
});
 