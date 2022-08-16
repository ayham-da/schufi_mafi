import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import Yalla1 from '../../../assets/gallery/Yalla1.jpg'
import Yalla2 from '../../../assets/gallery/Yalla2.jpg'
import Yalla3 from '../../../assets/gallery/Yalla3.jpg'
import Yalla4 from '../../../assets/gallery/Yalla4.jpg'
import Yalla5 from '../../../assets/gallery/Yalla5.jpg'
import Yalla6 from "../../../assets/gallery/Yalla6.jpg";



function YallaPage() {

    const YallaPageImages = [

        {
            img: Yalla1,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla2,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla3,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla4,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla5,
            title: 'Yalla',
            description:'Yalla'

        },
        {
            img: Yalla6,
            title: 'Yalla',
            description:'Yalla'

        },

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={YallaPageImages}
            />
        </div>
    );
}

export default YallaPage;
