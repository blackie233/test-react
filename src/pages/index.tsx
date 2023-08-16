import Layout from "../components/layout";

export default function Home() {
    return (
        <div>HELLO WORLD</div>
    )
}
Home.getLayout = function getLayout(page:any) {
    return  (
        <Layout>
            <div>home{ page }</div>
        </Layout>
    )
}
