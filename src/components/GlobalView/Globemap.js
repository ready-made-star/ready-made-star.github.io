import React from "react";
import {
    ComposableMap,
    ZoomableGlobe,
    Geographies,
    Geography
} from "react-simple-maps";
import { Motion, spring } from "react-motion";

const mapStyles = {
    width: "100%",
    height: "auto",
    // background: 'radial-gradient(50% 50% at 50% 49.92%, rgba(73, 74, 81, 0.6) 0%, rgba(148, 149, 167, 0.438) 100%)',
    backdropfilter: "blur(97px)"
};

const Map = ({ center }) => {

    return (
        

        <div>

        
            <Motion
                defaultStyle={{
                    x: center[0],
                    y: center[1]
                }}
                style={{
                    x: spring(center[0]),
                    y: spring(center[1])
                }}
            >
                {({ x, y }) => (
                    <ComposableMap
                        width={500}
                        height={500}
                        projection="orthographic"
                        projectionConfig={{ scale: 250 }}
                        // style={mapStyles}
                    >
                        <ZoomableGlobe center={[x, y]}>

                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" style={{stopColor:'rgb(73,74,81)',
                            stopOpacity:'0.6'}} />
                            <stop offset="100%" style={{stopColor:'rgb(148,149,167)',stopOpacity:'0.438'}} />
                        </radialGradient>
                        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="red" />
                            <stop offset="50%" stopColor="black" stopOpacity="0" />
                            <stop offset="100%" stopColor="blue" />
                        </linearGradient>
                            <circle
                                cx={250}
                                cy={250}
                                r={250}
                                fill="url(#grad1)"
                                stroke="#CCB783"
                                // style={{background:'radial-gradient(50% 50% at 50% 49.92%, rgba(73, 74, 81, 0.6) 0%, rgba(148, 149, 167, 0.438) 100%)', overflow:'hidden'}}
                            />
                            <Geographies
                                disableOptimization
                                geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
                            >
                                {(geos, proj) =>
                                    geos.map((geo, i) => (
                                        <Geography
                                            key={geo.id + i}
                                            geography={geo}
                                            projection={proj}
                                            style={{
                                                default: { fill: "#35373F" }
                                            }}
                                        />
                                    ))
                                }
                            </Geographies>
                        </ZoomableGlobe>
                    </ComposableMap>
                )}
            </Motion>
        </div>
    )
}

export default Map;
