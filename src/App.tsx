import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Layout from "./components/ui/layout";
import { ThemeProvider } from "./contex/theme-provider";
import CityPage from "./pages/city-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import WeatherDashboard from "./pages/weather-dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
}}}
)

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>    
      <Router>
        <ThemeProvider defaultTheme="dark">
        <Layout> 
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
        </ThemeProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    );
}

export default App
