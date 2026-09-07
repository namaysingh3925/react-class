import React from 'react'
import CardOne from './components/CardOne'
import CardTwo from './components/CardTwo'

const App = () => {
    const brands = [
        {
            id: 1,
            name: "Nike",
            since: "1964",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMfEzybaKq8UI9uyyh4n_RKa4WPg9jc9wYQ&s",
            about: "Nike is a global leader in sportswear, known for innovative athletic shoes, apparel, and equipment designed for performance and style."
        },
        {
            id: 2,
            name: "Adidas",
            since: "1949",
            img: "https://kreafolk.com/cdn/shop/articles/adidas-logo-design-history-and-evolution-kreafolk_38173afa-39ca-444a-85a7-8a76705e405e.jpg?v=1770705164&width=2048",
            about: "Adidas focuses on sports apparel and footwear, blending performance with fashion, and is recognized worldwide for its iconic three-stripe design."
        },
        {
            id: 3,
            name: "Puma",
            since: "1948",
            img: "https://w0.peakpx.com/wallpaper/400/361/HD-wallpaper-puma-red-awesomestic-logo.jpg",
            about: "Puma creates stylish and performance-driven sportswear, combining athletic functionality with modern design, popular among athletes and youth culture globally."
        },
        {
            id: 4,
            name: "Apple",
            since: "1976",
            img: "https://cdn.logojoy.com/wp-content/uploads/20230509113407/apple-logo-1977.png",
            about: "Apple designs premium consumer electronics, software, and services, known for innovation, sleek design, and a strong ecosystem of connected devices."
        },
        {
            id: 5,
            name: "Samsung",
            since: "1938",
            img: "https://cdn.prod.website-files.com/659a9ef71c962485037fcc8f/669a6179e705d21b94d49949_samsung%20logo%20black.png",
            about: "Samsung is a global technology company producing smartphones, TVs, and electronics, recognized for innovation, quality, and cutting-edge display technologies."
        }
    ]

    function clickHandle() {
        console.log("Clicked the card");
    }
    return (
        <div className='parent' onClick={clickHandle}>
            {brands.map((brand) =>
                <CardTwo
                    key={brand.id}
                    name={brand.name}
                    img={brand.img}
                    since={brand.since}
                    about={brand.about}
                />
            )
            }


        </div>
    )
}

export default App