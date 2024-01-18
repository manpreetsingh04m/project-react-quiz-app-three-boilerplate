import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./Component/HomeComponent";
import QuizComponent from "./Component/QuizComponent";
import ResultPage from "./Component/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Quiz" element={<QuizComponent />} />
        <Route path="/Result" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;