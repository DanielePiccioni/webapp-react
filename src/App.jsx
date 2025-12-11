import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./Pages/HomePage"
import MovieDetailPage from "./Pages/MovieDetailPage"


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<DefaultLayout />}>

            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movie/:id" element={<MovieDetailPage />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
