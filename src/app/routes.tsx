import { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import {CharacterPage} from "../shared/ui/character/CharacterPage.tsx";


const routes: RouteObject[] = [
    {
        path: "character/id",
        element: <CharacterPage />,
    },
];

const router = createBrowserRouter(routes);

export default router;