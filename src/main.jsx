import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailView from "../Routes/DetailView"
import NotFound from "../Routes/NotFound.jsx"
import Layout from "../Routes/Layout"
import App from "./App.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index={true} element={<App />} />
					<Route path="CoinDetail/:symbol" element={<DetailView />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
