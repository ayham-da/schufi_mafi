import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import Layali from '../../../assets/gallery/Layali.png'




function LayaliPage() {

    const LayaliImages = [

        {
            img: Layali,
            title: 'Layali',
            description: "Layali (Nächte) ist ein Syrisches Cafe, indem Syrer und Syrerinnen sowie auch Düsseldorfer und\nDüsseldorferinnen sich ein syrisches Atmosphäre mit Musik, Getränke und dem Zusammenkommen\ngenießen können. Beim Layali gibt’s ein Open Stage, wo man vor dem lokalen Community singen,\nschauspielern oder eine Geschichte erzählen kann. Am Ende wird immer auf die Rhythmus der syrischen\nVolksmusik (Dabke) zusammen getanzt wird.",


        },

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={LayaliImages}
            />
        </div>
    );
}

export default LayaliPage;
