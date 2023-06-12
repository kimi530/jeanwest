export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'شومیز زنانه',
                description: 'Product Description',
                image: './fav/75066.jpg',
                price: 1199000,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'پیراهن مردانه',
                description: 'Product Description',
                image: './fav/83403.jpg',
                price: 223000,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'شلوار مردانه',
                description: 'Product Description',
                image: './fav/94976.jpg',
                price: 1134000,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'تیشرت زنانه',
                description: 'Product Description',
                image: './fav/97118.jpg',
                price: 1121000,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
      
            {
                id: '1004',
                code: 'h456wer53',
                name: 'شلوار زنانه',
                description: 'Product Description',
                image: './fav/99506.jpg',
                price: 2345000,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'کت زنانه',
                description: 'Product Description',
                image: './fav/100208.jpg',
                price: 3500000,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'کتونی زنانه',
                description: 'Product Description',
                image: './fav/100662.jpg',
                price: 250000,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'مانتو زنانه',
                description: 'Product Description',
                image: './fav/102206.jpg',
                price: 250000,
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

