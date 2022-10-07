import ArticleList from "../components/ArticleList"

const Home = () => {
    return (
        <main className="h-screen flex flex-col justify-center items-center bg-purple-400 ">
            <h1 >Homepage + Articles </h1>
            <ArticleList />
        </main>
    )
}

export default Home