import React from 'react';
import MenuItem from '../menu-item/menu-item_component';
import './directory_styles.css'

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[{
                title: "Geometry",
                imageUrl: 'https://ak.picdn.net/shutterstock/videos/1016795758/thumb/1.jpg',
                size:'large',
               id: 1
            },
            {
                title: "Hidden",
                imageUrl: 'https://c4.wallpaperflare.com/wallpaper/179/367/674/artistic-ninja-smoke-hd-wallpaper-preview.jpg',
                size:'large',
                id: 2
            },
            {
                title: "Love",
                imageUrl: 'https://cache.desktopnexus.com/thumbseg/2370/2370894-bigthumbnail.jpg',
                size:'large',
                id: 3
            },
            {
                title: "Work O' Art",
                imageUrl: 'https://media.gettyimages.com/photos/golden-strokes-of-acrylic-paint-with-an-art-brush-on-a-black-picture-id1203131145?b=1&k=20&m=1203131145&s=170667a&w=0&h=g7h4vJ1zub7EVRH5nByB3Ve65vENqN1OLhWYUXFR2kg=',
                size:'large',
                id: 4
            },
            {
                title: "Shattered",
                imageUrl: 'https://free4kwallpapers.com/uploads/originals/2019/12/01/broken-glass-wallpaper.jpg',
                size:'large',
                id: 5
            }]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
