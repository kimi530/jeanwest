export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: './home/1678028193605-desk-monday@3x-100.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: './home/1678028222879-desk-firstbuy@3x-100.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: './home/1678028237742-desk-giftcard@3x-100.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: './home/1682319552724-coin copy.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: './home/1683612156650-New Website Slider -100.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
           
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

