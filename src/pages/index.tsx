import Carousel1 from "../components/Carousel";
import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react"
import FooterApp from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Drawer from "@/components/ui/Drawer"
import Cart from "@/components/minicart/Cart"




import { useProductsStore } from "@/stores/useProductsStore"


export default function Products() {


	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const { products, isLoading, error, fetchData } = useProductsStore()

	useEffect(() => {
		fetchData()
	}, [fetchData])

	const handleCartIconClick = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	return (
		<>
			<Head >
				<title> Liquid Gold Juice</title>
				<meta
					name="description"
					content="Fresh Squeezed Juice for sale"/>
			</Head>

			<Header onCartIconClick={handleCartIconClick} />
			<Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
				<Cart />
			</Drawer>


			<main className='container mx-auto md:w-10/12 py-8 px-4'>

				<Carousel1 />
				<div>
					<h2>mission statement</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sed expedita eius similique qui tempore minus cupiditate porro eligendi nisi enim fugit voluptates explicabo cumque maxime a, recusandae magnam? Adipisci?</p>
				</div>
			</main>
			<footer className="bg-red-950">
				<FooterApp/>
			</footer>
		</>
	)
};