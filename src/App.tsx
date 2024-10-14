import './App.css'
import { EligibilitySelector } from './components/EligibilitySelector/EligibilitySelector'
import { PageHeader } from './components/PageHeader/PageHeader'

function App() {

  return (
    <div style={{ width: '100%'}}>
      <PageHeader />
      <EligibilitySelector />
    </div>
  )
}

export default App
