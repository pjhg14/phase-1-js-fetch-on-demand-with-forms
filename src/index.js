const init = () => {
    const inputForm = document.querySelector("form")
    const title = document.querySelector("section#movieDetails h4");
    const summary = document.querySelector("section#movieDetails p");
    
    inputForm.addEventListener("submit", event => {
        event.preventDefault()
        const input = document.querySelector('input#searchByID');

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(res => res.json())
            .then(movie => {
                title.innerText = movie.title
                summary.innerText = movie.summary
            })
    })
}

document.addEventListener('DOMContentLoaded', init);