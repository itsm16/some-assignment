import { Provider } from "react-redux"
import { BrowserRouter, RouterProvider } from "react-router"
import { store } from "./store/store"
import { StrictMode } from "react"

function Providers({ children }) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <StrictMode>
                {children}
                </StrictMode>
            </BrowserRouter>
        </Provider>
    )
}
export default Providers