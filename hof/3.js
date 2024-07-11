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
function uniq(array) {
    return [...new Set(array)];
}

// Example usage:
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = uniq(arr);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]




// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data from an API)
        setTimeout(() => {
            const data = {
                name: 'John Doe',
                age: 30,
                city: 'New York'
            };
            // Resolve the promise with the data
            resolve(data);
            // Alternatively, you can reject the promise if an error occurs:
            // reject(new Error('Failed to fetch data'));
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the fetchData function with Promises
fetchData()
    .then(data => {
        console.log('Data:', data);
        // You can chain further operations that depend on this data
        return data.age; // Example of chaining
    })
    .then(age => {
        console.log('Age:', age);
        // Another chained operation
    })
    .catch(error => {
        console.error('Error:', error);
    });
