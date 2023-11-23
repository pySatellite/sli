import { Viewer } from "resium";
import { Cartesian3, ArcGisMapServerImageryProvider, HorizontalOrigin, VerticalOrigin, Color } from "cesium";


const Earth = () => {
    const esri = new ArcGisMapServerImageryProvider({
        url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    });
    return (
        <div id="credit">
            <Viewer timeline={false} animation={false} infoBox={false}
                    creditContainer={"credit"}
                    imageryProvider={esri}
                    navigationHelpButton={true}
                    vrButton={false} homeButton={false} geocoder={false}>
            </Viewer>
        </div>
    );
};

export default Earth;
