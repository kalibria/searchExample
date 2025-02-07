import { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import {CharacterPage} from "../shared/ui/characterPage/CharacterPage.tsx";


const routes: RouteObject[] = [
    {
        path: "characterPage/id",
        element: <CharacterPage />,
    },
];

const router = createBrowserRouter(routes);

export default router;