import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import Iwan from '../../../assets/gallery/Iwan.jpg'




function IwanPage() {

    const IwanImages = [

        {
            img: Iwan,
            title: 'Iwan',
            description: "Iwan ist ein sozialer Salon für Syrer und Syrerinnen, um zusammenzukommen, zu reden und zu\ndiskutieren in demokratischen Rahmen.\nAls Syrer hatten wir in Syrien nicht den Luxus, unter einem Diktatur frei zu diskutieren und uns frei\nauszudrücken. Das wollen wir mit dem Iwan Projekt ändern, denn Iwan ermächtigt die Syrer und\nSyrerinnen sich über aktuellen Themen ins Gespräch zu kommen und somit werden sie selber die\nDemokratie und die Freiheit erleben. hoffentlich kommen wir danach mit Vorstellungen über\numstrittene Themen aus syrischem perspektiv.",


        }

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={IwanImages}
            />
        </div>
    );
}

export default IwanPage;
