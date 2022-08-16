import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import Musiqana from "../../../assets/gallery/Musiqana1.png";




function MusiqanaPage() {

    const MusiqanaImages = [

        {
            img: Musiqana,
            title: 'Musiqana',
            description: "Musiqana (Unsere Musik) ist ein musikalisches Projekt, das die nachwuchs Künstler und Künstlerinnen\nmit Migrationshintergrund im Schwerpunkt die Syrische Diaspora dadurch fördert, dass es sie\nzusammenbringt und sie die Möglichkeit gibt, andere Künstler*innen kennenzulernen, eine Band zu\ngestalten und zusammen neue Songs zu komponieren. Wir hatten viel Erfolg mit dem ersten Kick-off Day\nund es wurden schon zwei Bands gegründet, die gerade sich regelmäßig treffen um sich für deren ersten\nKonzert vorzubereiten.حل",

        }

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={MusiqanaImages}
            />
        </div>
    );
}

export default MusiqanaPage;
