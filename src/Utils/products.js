const products = [
    {   id: 1,
        title: "Acuvue OASYS",
        description: "descripcion",
        price: 1000,
        stock: 10,
        image: [
            "https://www.opticapaesani.com.ar/media/catalog/product/cache/8/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acuvue_oasys_2.jpg"
        ]
    },
    {   id: 2,
        title: "Acuvue 2",
        description: "descripcion",
        price: 1000,
        stock: 10,
        image: [
            "https://www.lentesplus.com/media/catalog/product/a/c/acuvue2.png?auto=webp&format=png&width=320&height=400&fit=cover"
        ]
    },
    {   id: 3,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    },
    {   id: 4,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    },
    {   id: 5,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    },
    {   id: 6,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    },
    {   id: 7,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    },
    {   id: 8,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    },
    {   id: 9,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    },
    {   id: 10,
        title: "",
        description: "",
        price: 100,
        stock: 10,    
        image: [
            "https://"
        ]
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000);
    })
}

