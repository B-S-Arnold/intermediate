// document.addEventListener("DOMContentloaded", (event)=>{
    const likesButton = document.querySelector('.likes');

    // let count = 0
    likesButton.addEventListener('click', async (e) => {
        // e.preventDefault()
        // const shakasCount = await db.Shaka.count
        const postId = likesButton.id
        // console.log(postId)
        const res = await fetch(`/hobbyposts/${postId}/likes`, {
            method: "POST"
        })

        const likes = await res.json()
        console.log(likes)
        // console.log('we made it!')
        // const div = document.createElement('div')
        // const p = document.createElement('p')
        // document.body.append(div)
        // div.append(p)
        // likesButton.innerText = `Shaka: ${likes.count}`

        if(likes.status === 'liked'){
            // count++
            likesButton.innerText = `Shaka'd ${likes.count}`

        }else {
            // count--
            likesButton.innerText = `Shaka ${likes.count}`

        }
       const form = document.querySelector('form')

    }


)
// })
