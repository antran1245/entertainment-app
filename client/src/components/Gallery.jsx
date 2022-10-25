import { useState } from "react"
import { Row } from "react-bootstrap"
import GalleryCard from "./GalleryCard";
import '../sass/gallery.scss'

export default function Gallery({searching, gallery, imagesSmall, bookmark}) {
    return(
        <Row id="gallery">
            <Row>
                <h2>{searching === ''? 'Recommended for you' : `Found ${gallery.length} ${gallery.length > 1? 'results': 'result'} for '${searching}'`}</h2>
            </Row>
            <Row id="gallery-content">
                {gallery.map((item, index) => {
                    return <GalleryCard item={item} image={imagesSmall[index]} bookmark={bookmark} index={index} key={index}/>
                })}
            </Row>
        </Row>
    );
}