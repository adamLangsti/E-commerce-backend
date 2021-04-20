// HOME DATA
const home = [
    {
        id: 99,
        header: `Greetings dear customer. ƎE-Commerce was founded back in 1996 and has since grown to become one of the
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
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
        link: 'laptops',
    },
    {
        id: 2,
        name: 'Stationary Computers',
        image:
            'https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 29.98,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
        link: 'stationary',
    },
    {
        id: 3,
        name: 'Components',
        image:
            'https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: 10.99,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
        link: 'components',
    },
    {
        id: 4,
        name: 'Mouse & Keyboards',
        image:
            'https://images.unsplash.com/photo-1594063788908-2ee05db0ec48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
        price: 9.99,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
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
        desc: `Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels.
        It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.`,
    },
    {
        id: 6,
        name: 'Chromebook',
        image:
            'https://images.unsplash.com/photo-1536508183722-0f11d94c62c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: `$1299`,
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
        desc: `Dell's new two-in-one laptops are manufactured with precision and premium material and has screens with a natural
        image to give you the best possible experience. We have the performance that you need.`,
    },
    {
        id: 9,
        name: 'Asus',
        image:
            'https://images.unsplash.com/photo-1582203422342-1541a90a0103?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        price: `$639`,
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
        desc: `Lenovo is one of the world's leading personal technology companies, producing innovative PCs and mobile internet devices. Now, #286 on fortune 500 list,
        Lenovo is the world's largest PC vendor and fourth largest smartphone company.`,
    },
    {
        id: 11,
        name: 'HP',
        image:
            'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        price: `$829`,
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
        desc: `1.0 Acer company profile. Acer Incorporated is a Taiwan-based multinational electronics manufacturer. Its product
        includes laptops, desktops as well as servers and storage, personal digital assistance (PDA), peripherals, peripherals
        and e-business services for government, business, education, and home users.`,
    },
];
// LAPTOP BRAND
module.exports = { categories, laptops, home };
