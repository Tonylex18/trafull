import React from 'react';

interface GoogleMapEmbedProps {
  width: string;
  height: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ width, height }) => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas rounded-2xl">
        <iframe
          className="gmap_iframe"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Abuja&t=&z=17&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
        <a href="https://pdflist.com/">
          Pdf
        </a>
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: ${height};
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: ${height};
        }
        .gmap_iframe {
          height: ${height} !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleMapEmbed;

