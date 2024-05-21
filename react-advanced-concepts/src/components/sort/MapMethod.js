const data = [
    {
        id:1,
        title: 'ABC',
        description: 'xyz',
        image: 'https://picsum.photos/200/300/?random',
        price: "$89"
    },
    {
        id:2,
        title: 'ABC',
        description: 'xyz',
        image: 'https://picsum.photos/200/300/?random',
        price: '$45'
    },
    {
        id:3,
        title: 'ABC',
        description: 'xyz',
        image: 'https://picsum.photos/200/300/?random',
        price: '$32'
    }
];

// const myItems = data.map(item => {
//     return {
//         content: `${item.id} - ${item.title}`,
//         price: item.price
//     }
// })

export default function MapMethod() {
   // console.log(myItems);
    const listItems = data.map(item => {
        const itemText = `${item.price} - ${item.title}`;
        return <li>{itemText}</li>
    })
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}