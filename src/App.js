import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componets/header.jsx'
import Footer from './Componets/footer.jsx'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import InfiniteSpace from './Animation/Infinitespace.jsx';
import Explore from './Componets/explore.jsx'
import Feature from './Componets/feature.jsx'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
const INFURA_KEY = ''
const ethereumRopsten = {
  id: '0x3',
  token: 'rETH',
  label: 'Ethereum Ropsten',
  rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`
}
const chains = [ethereumRopsten]
const wallets = [injectedModule()]
const web3Onboard = init({
  wallets,
  chains,
  appMetadata: {
    name: 'Web3-Onboard Demo',
    icon: '<svg>App Icon</svg>',
    description: 'A demo of Web3-Onboard.'
  }
})

function App() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/explore" element={<><Explore /></>} />
            <Route exact path="/feature" element={<><Header /><Feature /><Footer /></>} />
            <Route exact path="/" element={<><Header /><Home /><Footer /></>} />
            <Route exact path="/about" element={<><Header /><About /><Footer /></>} />
            <Route exact path="/contact" element={<><Header /><Contact /><Footer /></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Web3OnboardProvider>
  );
}

export default App;
