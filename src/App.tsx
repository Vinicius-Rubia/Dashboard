import { Provider } from "react-redux";
import { BreadCrumb } from "./components/bread-crumb";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { NavBar } from "./components/navbar-menu";
import { SocialMedia } from "./components/social-media";
import { Summary } from "./components/summary";
import { ThemeProvider } from "./components/theme-provider";
import { TrafficAndSales } from "./components/traffic-and-sales";
import { TrafficChart } from "./components/traffic-chart";
import { ScrollArea } from "./components/ui/scroll-area";
import store from "./redux/store";

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex min-h-screen">
          <NavBar />
          <div className="flex-1">
            <Header />
            <ScrollArea className="h-[calc(100vh-64px)]">
              <BreadCrumb />
              <div className="max-w-[1300px] mx-auto mb-10">
                <Summary />
                <TrafficChart />
                <SocialMedia />
                <TrafficAndSales />
              </div>
              <Footer />
            </ScrollArea>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
