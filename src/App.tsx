import ThemeProvider from "./contexts/Theme"
import Router from "./router"

function App() {

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
