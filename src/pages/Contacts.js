const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>16727 Velten, Brandenburg Germany</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Phone</h2>
                        <p><a href="tel:+4915111019346">+49 151 11019346</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p>+38(067)63 92 254</p>
                        <p>
                            <a href="https://t.me/+380676392254">Telegram</a> / 
                            <a href="https://wa.me/380676392254"> WhatsApp</a>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:ania000535@gmail.com">ania000535@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Contacts;
