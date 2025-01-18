import Link from "next/link"
import Image from "next/image"

export const dynamic = "force-dynamic"

const getAllItems = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readall`)
    const jsonData = await response.json()       
    const allItems = jsonData.allItems
    return allItems    
} 

const ReadAllItems = async() => {
    const allItems = await getAllItems() 
    return (
        <div className="grid-container-in">
            <title>NextMarket</title>     
            <meta name="description" content="NextMarketです"/>
            {allItems.map(item => 
                <Link href={`/item/readsingle/${item.id}`} key={item.id}>
                    <Image src={item.image} width={750} height={500} alt="item-image" priority/>
                    <div> 
                        <h2>¥{item.price}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.description.substring(0, 80)}...</p>  
                    </div>
                </Link>
            )}
        </div>
    )
} 

export default ReadAllItems