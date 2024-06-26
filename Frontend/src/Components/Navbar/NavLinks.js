import React from 'react';
import './NavLinks.css'
import { Link } from 'react-router-dom';


const NavLinks = () => {


    const links = [
        {
            name: "MEN",
            destination:"/men",
            submenu: true,
            sublink: [
                {
                Head: "TOP WEAR",
                sublink: [
                    { name: "T-Shirts", link: "/tshirt" },
                    { name: "Hoodies", link: "/hoodies" },
                    { name: "Jackets", link: "/jackets" },
                    { name: "Football Jerseys", link: "/football" },
                    { name: "Cricket Jerseys", link: "/cricket" },
                    { name: "Casual Shirt", link: "/casual" },
                    { name: "Formal Shirts", link: "/formal" },
                ],
            },
                {
                Head: "BOTTOM WEAR",
                sublink: [
                    { name: "Jeans", link: "/jeans" },
                    { name: "Casual Trousers", link: "/trousers" },
                    { name: "Shorts", link: "/shorts" },
                    { name: "Joggers & Trackpants ", link: "/joggers" },
                ],
            },
            {
                Head: "FOOT WEAR",
                sublink: [
                    { name: "Running", link: "/running" },
                    { name: "Sneakers", link: "/sneakers" },
                    { name: "Sandals", link: "/sandals" },
                    { name: "Hiking", link: "/hiking" },
                    { name: "Walking", link: "/walking" },
                ],
            },
            {
            Head: "ACCESSORIES",
            sublink: [
                { name: "Caps & Beanies", link: "/caps" },
                { name: "Socks", link: "/socks" },
                { name: "Gloves", link: "/gloves" },
                { name: "Headwear", link: "/headwear" },
                { name: "Backpacks", link: "/backpacks" },
            ],
        },
        ],
    },
    { name: "WOMEN", destination:"/women", submenu: true, sublink: [
            {
                Head: "TOP WEAR",
                sublink: [
                    { name: "T-Shirts & Tops", link: "/tops" },
                    { name: "Polos", link: "/polos" },
                    { name: "Jackets", link: "/jacketss" },
                    { name: "Football Jerseys", link: "/fjerseys" },
                    { name: "Cricket Jerseys", link: "/cjerseys" },
                    { name: "SweatShirts", link: "/sweatshirts" },
                    { name: "Hoodies", link: "/whoodies" },
                ],
            },
            {
                Head: "BOTTOM WEAR",
                sublink: [
                    { name: "Jeans", link: "/wjeans" },
                    { name: "Shorts", link: "/wshorts" },
                    { name: "Pants", link: "/wpants" },
                    { name: "Tights & Leggings", link: "/leggings" },
                    { name: "TrackSuits", link: "/tracksuits" },
                    { name: "HomeWear", link: "/homewear" },
                ],
            },
            {
                Head: "ETHNIC WEAR",
                sublink: [
                    { name: "Kurtas", link: "/kurtas" },
                    { name: "Sarees", link: "/sarees" },
                    { name: "Kurtis & Tunics", link: "/kurtis" },
                    { name: "Skirts & Ghagras", link: "/skirts" },
                    { name: "Palazzos & Culottes", link: "/palazzos" },
                ],
            },
            {
                Head: "ACCESSORIES",
                sublink: [
                    { name: "Socks", link: "/wsocks" },
                    { name: "Gloves & Scarves", link: "/wgloves" },
                    { name: "Gym & Training Bags", link: "/wgym" },
                    { name: "Face Covers", link: "/wfacecovers" },
                    { name: "Headwear", link: "/wheadwear" },
                ],
            },
        ] },
        
        { name: "KIDS",destination:"/kids", submenu: true, sublink: [
            {
                Head: "BOYS",
                sublink: [
                    { name: "Bags & Accessories", link: "/bags" },
                    { name: "T-Shirts", link: "/shirts" },
                    { name: "Hoodies And Sweatshirts", link: "/bhoodies" },
                    { name: "Pants & Shorts", link: "/bpants" },
                    { name: "Jackets", link: "/bjackets" },
                ],
            },
            {
                Head: "BOYS SHOES",
                sublink: [
                    { name: "Casual", link: "bcasual" },
                    { name: "Sports", link: "/bsports" },
                    { name: "Scandals and FLip Flops", link: "/bscandals" },
                    { name: "School Shoes", link: "/bschool" },
                ],
            },
            {
                Head: "GIRLS",
                sublink: [
                    { name: "Bags & Accessories", link: "/gbags" },
                    { name: "T-Shirts", link: "/gshirts" },
                    { name: "Hoodies And Sweatshirts", link: "/ghoodies" },
                    { name: "Pants & Shorts", link: "/gpants" },
                    { name: "Jackets", link: "/gjackets" },
                ],
            },
            {
                Head: "GIRLS SHOES",
                sublink: [
                    { name: "Casual", link: "/gcasual" },
                    { name: "Sports", link: "/gsports" },
                    { name: "Scandals and FLip Flops", link: "/gscandals" },
                    { name: "School Shoes", link: "/gschool" },
                ],
            },
        ] },
        { name: "SPORTS",destination:"/sports", submenu: true, sublink: [
            {
                Head: "FOOTBALL",
                sublink: [
                    { name: "Turf Trainers", link: "/turf" },
                    { name: "Footballs & Accessories", link: "/footballaccessories" },
                    { name: "Manchester City FC", link: "/manchester" },
                    { name: "BVB", link: "/bvb" },
                    { name: "Pursuit Pack", link: "/pursuitpack" },
                ],
            },
            {
                Head: "CRICKET",
                sublink: [
                    { name: "Cricket Shoes - Rubber", link: "/rubber" },
                    { name: "Cricket Shoes - Spike", link: "/spike" },
                    { name: "Cricket Gear & Accessories", link: "/gear" },
                    { name: "Puma X RCB", link: "/rcb" },
                ],
            },
            {
                Head: "GYM & TRAINING",
                sublink: [
                    { name: "Shoes", link: "/gymshoe" },
                    { name: "Gym Wear", link: "/gymwear" },
                    { name: "Gym Bags & Accessories", link: "/gymbags" },
                    { name: "Yoga", link: "/yoga" },
                ],
            },
            {
                Head: "RUNNING",
                sublink: [
                    { name: "Everyday Running", link: "/run" },
                    { name: "Long Distance Running", link: "/long" },
                    { name: "Accessories", link: "/raccessories" },
                    { name: "Nitro Collection", link: "/nitro" },
                    { name: "First Mile", link: "/mile" },
                ],
            },
        ] },
        { name: "BEAUTY",destination:"/beauty", submenu: true, sublink: [
            {
                Head: "MAKEUP",
                sublink: [
                    { name: "Lipstick", link: "/lipstick" },
                    { name: "Lip Gloss", link: "/lipgloss" },
                    { name: "Lip Liner", link: "/lipliner" },
                    { name: "Nail Care", link: "/nailcare" },
                    { name: "Eyeliner & Kajals", link: "/eyeliner" },
                ],
            },
            {
                Head: "FRAGRANCES",
                sublink: [
                    { name: "Perfumes", link: "/perfumes" },
                    { name: "Deodrants", link: "/deodrants" },
                    { name: "Spray Mist", link: "/spray" },
                ],
            },
            {
                Head: "HAIR CARE",
                sublink: [
                    { name: "Shampoo", link: "/shampoo" },
                    { name: "Conditioner", link: "/conditioner" },
                    { name: "Hair Oil", link: "/hairoil" },
                    { name: "Hair Color", link: "/haircolor" },
                    { name: "Hair Styling", link: "/hairstyling" },
                ],
            },
            // {
            //     Head: "MEN GROOMING",
            //     sublink: [
            //         { name: "Shaving Essentials", link: "/shaving" },
            //         { name: "Beard Essentials", link: "/beardessentials" },
            //         { name: "Deodrants", link: "/mdeodrants" },
            //     ],
            // },
        ] },
        { name: "WATCHES",destination:"/watches", submenu: true, sublink: [
            {
                Head: "Watches For Men",
                sublink: [
                    { name: "Analog Watch", link: "/manalog" },
                    { name: "Smart Watch", link: "/msmart" },
                    { name: "Fitness Watch", link: "/mfitness" },
                ],
            },
            {
                Head: "Watches For Women",
                sublink: [
                    { name: "Analog Watch", link: "/wanalog" },
                    { name: "Smart Watch", link: "/wsmart" },
                    { name: "Fitness Watch", link: "/wfitness" },
                ],
            },
            {
                Head: "Watches For Kids",
                sublink: [
                    { name: "Unisex Watch", link: "/unisexwatch" },
                    { name: "Boys Automatic Watch", link: "/boyswatch" },
                ],
            },
        ] }
    ];

    return (
        <>
            {links.map(link => (
                <div key={link.name} className="parent">
                    <div className='link-hover'>
                    <Link className='nav-links' style={{textDecoration:'none'}} to={link.destination}>{link.name}</Link>
                    </div>
                    {link.submenu && (
                        <div className='submenu'>
                        <div className='submenu-content'>
                            {link.sublink.map(mysublink => (
                                <div className='head' key={mysublink.Head}>
                                    <span>{mysublink.Head}</span>
                                    <ul className='sublinks'>
                                        {mysublink.sublink.map(slink => (
                                            <li>
                                                <Link className="submenu-link" style={{textDecoration:'none'}} to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default NavLinks;
