import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import Workshop1 from '../../../assets/gallery/Workshop1.jpg'
import Workshop2 from '../../../assets/gallery/Workshop2.jpg'



function WorkshopPage() {

    const WorkshopImages = [

        {
            img: Workshop2,
            title: 'Workshop',
            description:''

        },




        {
            img: Workshop1,
            title: 'Workshop',
            description:''

        }

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={WorkshopImages}
            />
        </div>
    );
}

export default WorkshopPage;
