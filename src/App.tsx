import MainContent from './components/mainContent/MainContent'
import ButtonScrollTop from './components/ui/buttonScrollTop/ButtonScrollTop'
import { GalleryProvider } from './context/galleryContext'
import useActions from './hooks/useActionsImage'

const App = () => {
    const data = useActions()

    return (
        <>
            <div className="min-h-screen">
                <div className="flex flex-col items-center">
                    <div className="my-8 grid max-w-5xl divide-y divide-dashed rounded-lg shadow">
                        <h1 className="p-2 text-clamp uppercase">
                            images gallery
                        </h1>
                    </div>
                    <GalleryProvider value={data}>
                        <MainContent />
                    </GalleryProvider>
                </div>
            </div>
            <ButtonScrollTop />
        </>
    )
}

export default App
