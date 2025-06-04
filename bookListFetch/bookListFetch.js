import { LightningElement } from 'lwc';

const Book_URL='https://www.googleapis.com/books/v1/volumes?q='
export default class BookListFetch extends LightningElement {

    searchKey='bhagavan'
    books
    timer

    connectedCallback(){
        this.fetchBooks()
    }

    fetchBooks() {
        fetch(Book_URL + this.searchKey)
            .then(response => response.json())
            .then(data => {
                if (data.items) {
                    this.books = {
                        items: data.items.map(book => {
                            const info = book.volumeInfo || {};
                            const imageLinks = info.imageLinks || {};
                            return {
                                id: book.id,
                                title: info.title || 'No Title',
                                publishedDate: info.publishedDate || 'N/A',
                                averageRating: info.averageRating || 'N/A',
                                thumbnail: imageLinks.smallThumbnail || ''
                            };
                        })
                    };
                } else {
                    this.books = { items: [] };
                }
            })
            .catch(error => console.error('Error fetching books:', error));
    }

    fetchBooksHandler(event){
        this.searchKey=event.target.value
        window.clearTimeout(this.timer)
        this.timer=setTimeout(()=>{
            this.fetchBooks()
        },1000);
    }
}