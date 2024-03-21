import React from "react";
import { useOutletContext } from "react-router-dom"
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function Photos() {
    const { currentVan } = useOutletContext();
    React.useState(Fancybox.bind("[data-fancybox]", {
        buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
        loop: false,
        protect: true
    }),[])

    return(
        <main className="main">
        <div className="container">
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
                <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
                <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
                <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
                <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
                <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
               <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
               <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
               <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <a href={currentVan.imageUrl} data-fancybox="gallery" data-caption={currentVan.name}>
               <img src={currentVan.imageUrl} alt={`of ${currentVan.name}`}></img>
              </a>
            </div>
          </div>
        </div>
      </main>
    )
}