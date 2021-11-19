import LoadingAnimation from "../../assets/loading.gif"

export const LoadingComponent = () => {
    return (
        <div className="mx-auto flex flex-col items-center justify-center">
            <img src={LoadingAnimation} className="w-1/2" alt="Loading animation"/>
            <h2 className="text-2xl">Loading...</h2>
        </div>
    )
}