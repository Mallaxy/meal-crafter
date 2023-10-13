import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PageContainer } from './layout/PageContainer'
import { Home } from './pages/Home/Home'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { NAVIGATION_ROUTES } from './constants'
import { IngredientsBase } from './pages/Ingredients/IngredientsBase.tsx'
import { IngredientCreation } from './pages/Ingredients/IngredientCreation.tsx'
import { IngredientEdit } from './pages/Ingredients/IngredientEdit.tsx'
import { IngredientInfo } from './pages/Ingredients/IngredientInfo.tsx'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageContainer />}>
          <Route index element={<Home />} />
          <Route path={NAVIGATION_ROUTES.Storage} />
          <Route path={NAVIGATION_ROUTES.Tobuy} />
          <Route path={NAVIGATION_ROUTES.Recipes} />
          <Route path={NAVIGATION_ROUTES.Ingredients} element={<IngredientsBase />} />
          <Route path={NAVIGATION_ROUTES.IngredientInfo} element={<IngredientInfo />} />
          <Route path={NAVIGATION_ROUTES.IngredientEdit} element={<IngredientEdit />} />
          <Route path={NAVIGATION_ROUTES.IngredientCreation} element={<IngredientCreation />} />
          <Route path={NAVIGATION_ROUTES.NotFoundPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
