import './App.css';
import Header from './Components/Header';
import Display from './Components/Display';
import Services from './Components/Services';
import HeaderDropDown from './Components/HeaderDropDown';
import SlideGallery from './Components/SlideGallery';
import Contact from './Components/Contact';
import Quote from './Components/Quote';
import Footer from './Components/Footer';
import { useRef } from 'react';

function App() {

    const servicesRef = useRef(null);
    const slideGalleryRef = useRef(null);
    const contactRef = useRef(null);
    const quoteRef = useRef(null);

    const refs = {
        about: servicesRef,
        projects: slideGalleryRef,
        contact: contactRef,
        quote: quoteRef
    }

    const onScrollToComponent = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    };

    return (
        <>
            <Header
                onScroll={onScrollToComponent}
                refs={refs}
            />
            <HeaderDropDown
                onScroll={onScrollToComponent}
                refs={refs}
            />
            <Display
                onScroll={onScrollToComponent}
                refs={refs}
            />
            <Services ref={ servicesRef } />
            <SlideGallery ref={ slideGalleryRef } />
            <Contact ref={ contactRef } />
            <Quote ref={ quoteRef } />
            <Footer />
        </>
    )
}

export default App;
