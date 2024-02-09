import Backgroud from './components/background';
import MainContent from './components/mainContent/MainContent';
import ButtonScrollTop from './components/ui/buttonScrollTop/ButtonScrollTop';
import { GalleryProvider } from './context/galleryContext';
import useActions from './hooks/useActionsImage';

const App = () => {
    const data = useActions();
    return (
        <>
            <div className="min-h-screen">
                <div className="xs:pt-0 flex flex-col items-center pt-32">
                    <div className="xs:grid my-8 hidden max-w-5xl divide-y divide-dashed rounded-lg shadow">
                        <h1 className="rounded-lg bg-black/50 p-2 text-clamp uppercase text-white">
                            images gallery
                        </h1>
                    </div>

                    <GalleryProvider value={data}>
                        <MainContent />
                    </GalleryProvider>
                </div>
            </div>

            <ButtonScrollTop />

            <Backgroud />
        </>
    );
};

export default App;
