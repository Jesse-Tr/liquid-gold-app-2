import ProductCard from "./ProductCard"

import { Product } from "@/types.d"

import { products1 } from "@/data/db-liuidGold"


interface Props {
	products: Product[]
}

export default function ProductList({ products }: Props) {
	return (
		<>
			
			<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{products1.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	)
}

// goes above div in return
//<h1 className='text-3xl font-semibold mb-4'>Products</h1>