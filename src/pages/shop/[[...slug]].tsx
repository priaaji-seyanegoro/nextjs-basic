import { useRouter } from 'next/router'
const ShopPages = () => {
    const { query } = useRouter()
    console.log('query', query)
    return (
        <div>
            <h3>Shop Produk Pages</h3>
            <p>{JSON.stringify(query)}</p>
        </div>
    )
}

export default ShopPages