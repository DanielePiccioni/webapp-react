import { Link } from "react-router-dom";

export default function Footer() {

    const footerMenus = [
        {
            id: 1,
            title: "Menu",
            links: [
                { id: 1, text: "Home", link: "/" },
                { id: 2, text: "Contacts", link: "/contacts" },
                { id: 3, text: "Films", link: "/movies" }
            ]
        },
        {
            id: 2,
            title: "Legal",
            links: [
                { id: 1, text: "Privacy Policy", link: "/" },
                { id: 2, text: "Terms and Conditions", link: "/" }
            ]
        }
    ];

    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                    <div className="col mb-3">
                        <h5>Filmzz</h5>
                        <p>MEOWWWWWWWWWWW</p>
                    </div>
                    {footerMenus.map((footerMenu) => (
                        <div className="col mb-3" key={footerMenu.id}>
                            <h5>{footerMenu.title}</h5>
                            <ul className="list-unstyled">
                                {footerMenu.links.map((link) => (
                                    <li key={link.id}>
                                        <Link className="text-light text-decoration-none" to={link.link}>
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
