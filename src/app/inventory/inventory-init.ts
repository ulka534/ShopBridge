export class Init {
    load() {
        if (localStorage.getItem('inventory') === null || localStorage.getItem('inventory') == undefined) {
            console.log('No inventory Found... Creating...');
            let invent = [
                {
                    id: 1,
                    name: 'Book1',
                    description: 'Book1 Description',
                    price: "250",
                    author: "author 1",
                    type: "Non-fiction",
                },
                {
                    id: 2,
                    name: 'Book2',
                    description: 'Book2 Description',
                    price: "200",
                    author: "author 2",
                    type: "Biographies",
                },
                {
                    id: 3,
                    name: 'Book3',
                    description: 'Book3 Description',
                    price: "150",
                    author: "author 3",
                    type: "Fiction",
                },
            ];

            localStorage.setItem('inventory', JSON.stringify(invent));
            return
        } else {
            console.log('Found inventory...');
        }
    }
}
