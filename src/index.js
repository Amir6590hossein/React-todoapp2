
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client"
import App from './App';
import Global from './Contex/Global';
const container=document.getElementById("root")

const root=ReactDOM.createRoot(container)


root.render(
<Global>
<BrowserRouter>
<App/>

</BrowserRouter>

</Global>
)