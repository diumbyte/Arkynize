import { Helmet } from "react-helmet"
import { Route, RouteProps } from "react-router-dom"

type TitledRouteProps = RouteProps & {
    title: string
}

export const TitledRoute:React.FC<TitledRouteProps> = ({
    title,
    children,
    ...props
}) => {
    return (
        <>
            <Helmet>
                <title>{title} - Arkynized</title>
            </Helmet>
            <Route {...props}>
                {children}
            </Route>
        </>
    )
}