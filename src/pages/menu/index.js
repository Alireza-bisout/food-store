import MenuPage from "@/components/template/MenuPage/MenuPage"

function Menu({ data }) {
    return <MenuPage data={data} />
}

export default Menu


export async function getStaticProps() {

    const res = await fetch('http://localhost:4000/data')
    const menu = await res.json()
    return {
        props: {
            data: menu
        },
        revalidate: 10
    }

}