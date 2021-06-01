export default class BooksService {

    getBooks(){
        return (
          [
            { id: 1,
              title: 'Reservation',
              author: 'Sergej Dovlatov',
              price: 26,
              coverImage: 'https://s1.livelib.ru/boocover/1000432262/200/862f/boocover.jpg'
            },
            { id: 2,
              title: 'Lolita',
              author: 'Vladimir Nabokov',
              price: 31,
              coverImage: 'https://www.insidehighered.com/sites/default/server_files/media/Lolita.png'
              },
          ]
        )
    }
}
  
