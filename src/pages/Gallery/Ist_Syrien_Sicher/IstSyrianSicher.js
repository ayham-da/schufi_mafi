import WSPGallery from '../../../components/Gallery/WSPGallery';
import '../GalleryPage.css';

import IstSyrienSicher1 from '../../../assets/gallery/IstSyrienSicher1.jpg'
import IstSyrienSicher2 from '../../../assets/gallery/IstSyrienSicher2.jpg'



function IstSyrienSicherPage() {

    const IstSyrienSicherImages = [

        {
            img: IstSyrienSicher1,
            title: 'Ist Syrien Sicher',
            description: "Im Zuge des „Syrian Prisoner Day“ lädt euch das syrische Kollektiv „Schu Fi Ma Fi“ in Kooperation mit\nAmnesty International (Asylgruppe) und mit „Adopt a Revolution“ am 17.09 zu einem Workshop und\nanschließend zu einem Podiumsgespräch ein. In dem Workshop werden wir gemeinsam Beutel mit\nverschiedenen Sprüchen bedrucken, um uns mit den syrischen Verschwunden und ihren Angehörigen zu\nsolidarisieren. Wir werden Beutel zur Verfügung stellen, aber ihr könnt auch eure eigenen T-Shirts oder\nTextilien zum Bedrucken mitbringen.\nIn dem Podiumsgespräch werden wir mit unseren Gästen über die Frage diskutieren: Ist Syrien aktuell\nein sicheres Land?\nDazu sind die Amnesty-Asylgruppe und die Geschäftsführerin von Adopt a Revolution Christin Lüttich\nsowie der syrische Menschenrechtsaktivist Anwar Al Bounni (Syrian Center for Legal Studies and\nResearches) und Wafa Moustafa von der Frauengruppe (Families for Freedom) eingeladen",


        },
        {
            img: IstSyrienSicher2,
            title: 'Ist Syrien Sicher',
            description: "Im Zuge des „Syrian Prisoner Day“ lädt euch das syrische Kollektiv „Schu Fi Ma Fi“ in Kooperation mit\nAmnesty International (Asylgruppe) und mit „Adopt a Revolution“ am 17.09 zu einem Workshop und\nanschließend zu einem Podiumsgespräch ein. In dem Workshop werden wir gemeinsam Beutel mit\nverschiedenen Sprüchen bedrucken, um uns mit den syrischen Verschwunden und ihren Angehörigen zu\nsolidarisieren. Wir werden Beutel zur Verfügung stellen, aber ihr könnt auch eure eigenen T-Shirts oder\nTextilien zum Bedrucken mitbringen.\nIn dem Podiumsgespräch werden wir mit unseren Gästen über die Frage diskutieren: Ist Syrien aktuell\nein sicheres Land?\nDazu sind die Amnesty-Asylgruppe und die Geschäftsführerin von Adopt a Revolution Christin Lüttich\nsowie der syrische Menschenrechtsaktivist Anwar Al Bounni (Syrian Center for Legal Studies and\nResearches) und Wafa Moustafa von der Frauengruppe (Families for Freedom) eingeladen",


        }

    ]

    return (
        <div className="GalleryPage">
            <br /><br />

            <WSPGallery
                galleryImages={IstSyrienSicherImages}
            />
        </div>
    );
}

export default IstSyrienSicherPage;
