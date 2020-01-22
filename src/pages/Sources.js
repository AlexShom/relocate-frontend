import React, { Fragment } from "react";

const SourcesPage = () => {
  return (
    <div style={{ paddingLeft: "40px" }} className="gen-box">
      <h2>Sources</h2>
      <h4>
        <ul>
          <li>
            <h4 style={{ paddingBottom: "10px", paddingTop: "10px" }}>
              Property data and attributes
            </h4>
            All attributes such as Rental averages or Crime Rates are compiled
            from
            <a
              style={{ paddingLeft: "10px" }}
              target="_blank"
              href="https://propertydata.co.uk/"
            >
              https://propertydata.co.uk/
            </a>
          </li>
          <li>
            <h4 style={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Commute travel time
            </h4>
            Accessed in real time with AJAX from the TravelTime Platform API
            <a
              style={{ paddingLeft: "10px" }}
              target="_blank"
              href="https://www.traveltimeplatform.com/"
            >
              https://www.traveltimeplatform.com/
            </a>
          </li>
          <li>
            <h4 style={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Map Polygons
            </h4>
            Originally obtained as a shapefile including all UK postcodes and
            adapted with QGIS editor to include only London Postcode Districts.
            Originals available at
            <a
              style={{ paddingLeft: "10px" }}
              target="_blank"
              href="https://www.opendoorlogistics.com/downloads/"
            >
              https://www.opendoorlogistics.com/downloads/
            </a>
          </li>
        </ul>
      </h4>
      <h2>Methodology</h2>
      <h4>
        <ul>
          <li>
            <h4 style={{ paddingBottom: "10px", paddingTop: "10px" }}>
              Sorting
            </h4> 
            <h4 style={{paddingBottom: "10px"}}>
              The sorting is done by ranking each postcode according to the selected criteria from first to last. If multiple criteria are selected then the index at each sort is summed and a running score is assigned to the Postcode in question. Ultimately the list is sorted again by the resulting scores, with lowest first.
            </h4>
          </li>
          <li>
            <h4 style={{ paddingBottom: "10px", paddingTop: "10px" }}>
              Filering by financial values
            </h4> 
            <h4>
              It is important to note the limited accuracy of inference based on averages, especially when the ranges in London Districts are very large. However it was the only data available and it serves the goal of this project, which was to demonstrate displaying and manipulating the data.
            </h4>
          </li>
        </ul>
      </h4>
    </div>
  );
};

export default SourcesPage;
