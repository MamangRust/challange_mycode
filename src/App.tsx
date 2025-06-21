import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { ThemeProvider } from "./hooks/use-theme";

import AboutCheatsheet from "./pages/About";
import LeetCodes from "./pages/LeetCodes";
import LeetCode from "./pages/LeetCode";
import Codewars from "./pages/Codewars";
import Codewar from "./pages/Codewar";
import HackerRanks from "./pages/Hackerranks";
import HackerRank from "./pages/Hackerrank";
import Exercisms from "./pages/Exercisms";
import Exercism from "./pages/Exercism";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename="/challange_mycode">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leetcode" element={<LeetCodes />} />
            <Route path="/leetcode/:slug" element={<LeetCode />} />
            <Route path="/codewar" element={<Codewars />} />
            <Route path="/codewar/:slug" element={<Codewar />} />
            <Route path="/hackerrank" element={<HackerRanks />} />
            <Route path="/hackerrank/:slug" element={<HackerRank />} />
             <Route path="/exercism" element={<Exercisms />} />
            <Route path="/exercism/:slug" element={<Exercism />} />
            <Route path="/about" element={<AboutCheatsheet />} />
           </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;