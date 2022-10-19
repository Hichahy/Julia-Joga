import { useRef, createContext } from 'react';
import { Footer } from '../components/footer';
import { Home } from '../components/home';
import { NavigationBar } from '../components/navigationBar';
import './app.scss';

export const SectionContext = createContext<any>({});

export const App = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  return (
    <div className='app-container'>
      <SectionContext.Provider value={{ sectionRef1, sectionRef2, sectionRef3, sectionRef4 }}>
        <NavigationBar />
        <Home />
      </SectionContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
