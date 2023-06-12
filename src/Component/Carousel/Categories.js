export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'پوشاک مردانه',
                description: 'Product Description',
                image: './home/1677496947249-پوشاک مردانه.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'پوشاک زنانه',
                description: 'Product Description',
                image: './home/1677496958439-پوشاک زنانه.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'پوشاک دخترانه',
                description: 'Product Description',
                image: './home/1677496987041-پوشاک دخترانه.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'پوشاک پسرانه',
                description: 'Product Description',
                image: './home/1677496971481-پوشاک پسرانه.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'کیف و کفش مردانه',
                description: 'Product Description',
                image: './home/1676444921750-کیف و کفش مردانه.png',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'کیف و کفش زنانه',
                description: 'Product Description',
                image: './home/1677497004373-کیف و کفش زنانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'اکسسوری زنانه',
                description: 'Product Description',
                image: './home/1677497025409-اکسسوری زنانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'اکسسوری مردانه',
                description: 'Product Description',
                image: './home/1677497015943-اکسسوری مردانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'همه محصولات مردانه',
                description: 'Product Description',
                image: './home/1678541202837-همه محصولات مردانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'همه محصولات زنانه',
                description: 'Product Description',
                image: './home/1677497054435-همه محصولات زنانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'کیف و کفش پسرانه',
                description: 'Product Description',
                image: './home/1677497130252-کیف و کفش پسرانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'کیف و کفش دخترانه',
                description: 'Product Description',
                image: './home/1678002386531-کیف و کفش دخترانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'همه محصولات پسرانه',
                description: 'Product Description',
                image: './home/1677497179332-همه محصولات پسرانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'همه محصولات دخترانه',
                description: 'Product Description',
                image: './home/1677497186701-همه محصولات دخترانه.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
      
        ];
    },
 

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

