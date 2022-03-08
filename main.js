const posts = [
    {
        id: 1,
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/300?image=171',
        author: {
            name: 'Phil Mangione',
            image: 'https://unsplash.it/300/300?image=15',
            shortName: 'PM'
        },
        likes: 80,
        created: {
            year: 2021,
            month: 06, 
            day: 25
        }
    },
    {
        id: 2,
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=112',
        author: {
            name: 'Sofia Perlari',
            image: 'https://unsplash.it/300/300?image=10',
            shortName: 'SF'
        },
        likes: 120,
        created: {
            year: 2021,
            month: 09,
            day: 03,
        }
    },
    {
        id: 3,
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=234',
        author: {
            name: 'Chiara Passaro',
            image: 'https://unsplash.it/300/300?image=20',
            shortName: 'CP'
        },
        likes: 78,
        created: {
            year: 2021,
            month:05,
            day:15
        }
    },
    {
        id: 4,
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=24',
        author: {
            name: 'Luca Formicola',
            image: null,
            shortName: 'LF'
        },
        likes: 56,
        created: {
            year: 2021,
            month: 04,
            day: 03,
        }
    },
    {
        id: 5,
        content: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        media: 'https://unsplash.it/600/400?image=534',
        author: {
            name: 'Alessandro Sainato',
            image: 'https://unsplash.it/300/300?image=29',
            shortName: 'AS'
        },
        likes: 95,
        created: {
            year: 2021,
            month: 03,
            day: 05
        }
    }
];
let profilePic = document.querySelector('.post-meta')

for (let i = 0; i < posts.length; i++){
    card =  
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${posts[i]['author']['image']}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i]['author']['name']}</div>
                    <div class="post-meta__time">${posts[i]['created']['day']}-${posts[i]['created']['month']}-${posts[i]['created']['year']}</div>
                </div>                   
            </div>
        </div>
        <div class="post__text">${posts[i]['content']}</div>
        <div class="post__image">
            <img src="${posts[i]['media']}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${posts[i]['id']}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${posts[i]['id']}" class="js-likes-counter">${posts[i]['likes']}</b> persone
                </div>
            </div> 
        </div>            
    </div>`

   
    if(posts[i]['author']['image'] == null){
        card =  
        `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon profile-pic-default">
                        <span>${posts[i]['author']['shortName']}</span>             
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i]['author']['name']}</div>
                        <div class="post-meta__time">${posts[i]['created']['day']}-${posts[i]['created']['month']}-${posts[i]['created']['year']}</div>
                    </div>                   
                </div>
            </div>
            <div class="post__text">${posts[i]['content']}</div>
            <div class="post__image">
                <img src="${posts[i]['media']}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${posts[i]['id']}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i]['id']}" class="js-likes-counter">${posts[i]['likes']}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`
    }
    container.innerHTML += card
}
let likedPosts = []
let liked = false

for (let i = 0; i < posts.length; i++){
    let likeBtn = document.querySelector(`a[data-postid="${posts[i]['id']}"]`)
    let likeCount = document.querySelector(`#like-counter-${posts[i]['id']}`)
    likeBtn.addEventListener('click', function(){
        if(!likedPosts.includes(posts[i].author.name)){
            likedPosts.push(posts[i].author.name)
        }
        this.classList.toggle('like-button--liked')
        let activeLikeBtn = document.querySelector(`like-button--liked`)
        liked = true
        if (liked == true){
            likeCount.innerHTML = posts[i].likes + 1
        }
    })
}