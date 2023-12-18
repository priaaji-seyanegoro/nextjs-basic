import { useRouter } from 'next/router'
const DetailProductPages = () => {
    const { query } = useRouter()
    return (
        <div>
            <h3>Detail Produk Pages</h3>
            <p>Produk : {query.id}</p>
        </div>
    )
}

export default DetailProductPages