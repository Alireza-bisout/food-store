import DetailsPage from '@/components/template/DetailsPage/DetailsPage'
import { useRouter } from 'next/router'
import React from 'react'

function Details({ data }) {

    const router = useRouter()
    console.log(data)
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <DetailsPage {... data}/>
    ) 
}

export default Details

export async function getStaticPaths() {
    const res = await fetch('http://localhost:4000/data')
    const json = await res.json()
    const data = json.slice(0, 10)

    const paths = data.map(food => {
        return { params: { id: food.id.toString() } }
    })

    return {
        paths,
        fallback: true
    }
}



export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:4000/data/${params.id}`)
    const data = await res.json()

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: { data },
        revalidate: 10
    }
}