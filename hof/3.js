// let pattern = 'pw'

// let regExOne = new RegExp(pattern)

// let flag = 'gi'
// let regExTwo = new RegExp(pattern, flag)

// let regExThree = /pw/gi


// const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

// const result = regExThree.test(strToCheck)
// console.log(result);

// const anotherResult = strToCheck.match(regExThree)
// console.log(anotherResult);

// const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
// console.log(oneMoreResult);



// const webUrl = "https://pwskills.com/hitesh%20choudhary"

// const useableUrl = webUrl.replace(/%\d0/, '-')
// console.log(useableUrl);


// Example array of books
let books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

// Function to sort books by year in ascending order
function sortByYear(books) {
    return books.sort((a, b) => a.year - b.year);
}

// Sort the books array by year
let sortedBooks = sortByYear(books);

// Output the sorted books
console.log("Books sorted by year:");
sortedBooks.forEach(book => {
    console.log(`${book.title} (${book.year}) - ${book.author}`);
});
