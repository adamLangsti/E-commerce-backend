// HOME DATA
const home = [
    {
        id: 99,
        header: `Greetings customer. ƎE-Commerce was founded back in 1996 and has since grown to become one of the
        largest software companies in the world, rivalling the likes of Microsoft, Apple and Oracle.`,
    },
];

// MAIN CATEGORIES
const categories = [
    {
        id: 1,
        name: 'Laptops',
        image:
            'https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        price: 39.95,
        link: 'laptops',
    },
    {
        id: 2,
        name: 'Stationary Computers',
        image:
            'https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 29.98,
        link: 'stationary',
    },
    {
        id: 3,
        name: 'Components',
        image:
            'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 10.99,
        link: 'components',
    },
    {
        id: 4,
        name: 'Mouse & Keyboards',
        image:
            'https://images.unsplash.com/photo-1594063788908-2ee05db0ec48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        price: 9.99,
        link: 'accessories',
    },
];

// LAPTOPS
const laptops = [
    {
        id: 5,
        name: 'Apple',
        image:
            'https://images.unsplash.com/photo-1494498902093-87f291949d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: `$1499`,
        link: 'apple',
        desc: `Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels.
        It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.`,
    },
    {
        id: 6,
        name: 'Chromebook',
        image:
            'https://images.unsplash.com/photo-1536508183722-0f11d94c62c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: `$1299`,
        link: 'chromebook',
        desc: `Chromebook is a computer built by Google. Chromebook is perfect when you are in need of a laptop for studies or work
        on-the-go. It has built in virus protection software, battery that lasts for a whole day and the best function from Google
        built in.`,
    },
    {
        id: 7,
        name: 'Laptop gaming',
        image:
            'https://images.unsplash.com/photo-1551033541-2075d8363c66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        price: `$999`,
        link: 'gaming',
        desc: `In this category you will find your new gaming laptop. With laptops from ASUS, MSI and Lenovo, we will guarantee that
        you will find the perfect match for your needs. If you want the best gaming experience, we recommend that you consider a product 
        with a screen that has an updating frequence of 120 to 144Mhz.`,
    },
    {
        id: 8,
        name: 'Dell',
        image:
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: `$349`,
        link: 'dell',
        desc: `Dell's new two-in-one laptops are manufactured with precision and premium material and has screens with a natural
        image to give you the best possible experience. We have the performance that you need.`,
    },
    {
        id: 9,
        name: 'Asus',
        image:
            'https://images.unsplash.com/photo-1582203422342-1541a90a0103?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: `$639`,
        link: 'dell',
        desc: `ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989.
        Dedicated to creating products for today’s and tomorrow’s smart life, ASUS is the world’s No. 1 motherboard and gaming brand
        as well as a top-three consumer notebook vendor.`,
    },
    {
        id: 10,
        name: 'Lenovo',
        image:
            'https://images.unsplash.com/photo-1578598335941-2ddafa759de2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        price: `$899`,
        link: 'lenovo',
        desc: `Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices. Now, #286 on fortune 500 list,
        Lenovo is the world's largest PC vendor and fourth largest smartphone company.`,
    },
    {
        id: 11,
        name: 'HP',
        image:
            'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        price: `$829`,
        link: 'hp',
        desc: `HP (Hewlett-Packard) is a multinational information technology (IT) company that sells hardware, software and related
        business services. ... The company's corporate culture is encapsulated in an approach known as the HP Way, a set of values
        designed to foster innovation, respect for individuals and value for customers.`,
    },
    {
        id: 12,
        name: 'Acer',
        image:
            'https://images.unsplash.com/photo-1525971977907-20d22da82d6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1260&q=80',
        price: `$549`,
        link: 'acer',
        desc: `1.0 Acer company profile. Acer Incorporated is a Taiwan-based multinational electronics manufacturer. Its product
        includes laptops, desktops as well as servers and storage, personal digital assistance (PDA), peripherals, peripherals
        and e-business services for government, business, education, and home users.`,
    },
];
// LAPTOP BRAND
const apple = [
    {
        id: 13,
        name: 'Macbook Air',
        image:
            'https://www.apple.com/v/macbook-air/j/images/overview/hero_endframe__ea0qze85eyi6_large.jpg',
        heroHeadline: 'Power is in the Air.',
        heroContent: `Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster.
     GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery
     life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.`,
        price: `From $999`,
    },
    {
        id: 14,
        name: 'Macbook Pro',
        image:
            'https://www.apple.com/v/macbook-pro-13/g/images/overview/hero_endframe__bsza6x4fldiq_large.jpg',
        heroHeadline: 'All systems Pro.',
        heroContent: `The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance.
        Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of
        battery life — the longest of any Mac ever. It’s our most popular pro notebook, taken to a whole new level.`,
        price: `From $1099`,
    },
    {
        id: 15,
        name: 'iMac',
        image:
            'https://www.apple.com/v/imac-24/a/images/overview/color_front_purple__bxvrajaaheeu_large.jpg',
        heroHeadline: `Say hello to the new iMac.`,
        heroContent: `M1 and Big Sur.
        With great power comes great capability.`,
        price: `From $1299`,
    },
];
module.exports = { categories, laptops, home, apple };
