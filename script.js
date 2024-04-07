let story_cont = document.querySelector('.story-container ')
let fullScr = document.querySelector('.story-full')


let arr = [
    { dp: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww' },
    {
        dp: 'https://images.unsplash.com/photo-1510706019500-d23a509eecd4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsfGVufDB8fDB8fHww', story: 'https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww'
    },
    {
        dp: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww', story: 'https://images.unsplash.com/photo-1515468381879-40d0ded81044?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        dp: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww', story: 'https://images.unsplash.com/photo-1525299374597-911581e1bdef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vZGVsfGVufDB8fDB8fHww'
    }
]

let clutter = '';
arr.forEach((ele, indx) => {
    // console.log(ele.dp,indx)
    clutter += `<div class="story">
    <img id=${indx} src="${ele.dp}" alt="" />
  </div>`
    story_cont.innerHTML = clutter;
})


story_cont.addEventListener('click', (e) => {
    console.log(arr[e.target.id].story);
    // arr[e.target.id].story;
    fullScr.style.display = 'block'
    fullScr.style.backgroundImage = `url(${arr[e.target.id].story})`
    console.log('hello timeout');

    setTimeout(() => {
        fullScr.style.display = 'none'
    }, 3000)

})
