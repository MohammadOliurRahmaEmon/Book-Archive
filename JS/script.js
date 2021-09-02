// Show Books Api Call Function
const showBooks = () => {
        const searchField = document.getElementById('searchInput');
        const showInput = searchField.value;
        console.log(showInput);
        searchField.value = '';

        // Api Load
        const url = `https://openlibrary.org/search.json?q=${showInput}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => showResult(data.docs, data.numFound));
    }
    // Show Book Result Function
const showResult = (books, numList) => {
    const output = document.getElementById('showDetails');
    // Condition for if he could not get result then it will show
    if (numList === 0) {

        const booksNum = document.getElementById('book-foundlist');
        booksNum.innerHTML = ` <h1><span class="text-red-600">OOOPS!</span> Search is not found ❌</h1>`;
        output.textContent = '';
    } else {
        const booksNum = document.getElementById('book-foundlist');
        booksNum.innerHTML = ` <h1>Search Result: ${numList}</h1>`;
        output.textContent = '';

        books.forEach(book => {
            console.log(book);
            // Image Load from API 
            const imgUrlMedium = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
            // Create Div For Make card to show information from API
            const div = document.createElement('div');
            div.classList.add('mx-auto');
            div.classList.add('mb-6');
            div.classList.add('mt-12');

            div.innerHTML = `
        <div class=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
        <img src="${imgUrlMedium}" class="object-cover w-full h-72" alt="">
        <div class="p-5">
            <h1 class="text-2xl font-bold">${book.title.slice(0,20)}</h1>
            <p class="mt-2 text-lg font-semibold text-gray-600">by ${book.author_name[0].slice(0,20)}</p>
            <p class="mt-1 text-gray-500 font-">${book.publisher[0].slice(0,20) ? book.publisher[0].slice(0,20):"Not Found"}</pa>
            <p class="mt-1 text-gray-500 font-">${book.first_publish_year ? book.first_publish_year:"Not Found"}</pa>
        </div>
    </div>
     `;
            output.appendChild(div);

        });
    }


}