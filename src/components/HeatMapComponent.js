import { View, Text ,StyleSheet,Button} from 'react-native'
import React,{useState} from 'react'
import MapView, { Heatmap } from "react-native-maps";

export default function HeatMapComponent() {

    const [heatmapVisible, setHeatmapVisible] = useState(true);
  const [heatmapGradient, setHeatmapGradient] = useState(null);
  const [heatmapRadius, setHeatmapRadius] = useState(20);
  const [heatmapOpacity, setHeatmapOpacity] = useState(0.2);

  const toggleHeatmap = () => {
    setHeatmapVisible(!heatmapVisible);
  };

  const changeGradient = () => {
    
    const gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)",
    ];
    setHeatmapGradient(heatmapGradient ? null : gradient);
  };

  const changeRadius = () => {
    setHeatmapRadius(heatmapRadius ? null : 20);
  };

  const changeOpacity = () => {
    setHeatmapOpacity(heatmapOpacity ? null : 0.2);
  };

  const heatmapData = [
{latitude:	-0.304714	,longitude:	-78.416503	},
{latitude:	-0.28596	,longitude:	-78.440097	},
{latitude:	-0.285853	,longitude:	-78.437043	},
{latitude:	-0.308739	,longitude:	-78.413464	},
{latitude:	-0.299465	,longitude:	-78.455587	},
{latitude:	-0.294554	,longitude:	-78.451493	},
{latitude:	-0.290441	,longitude:	-78.44608	},
{latitude:	-0.285677	,longitude:	-78.454915	},
{latitude:	-0.300375	,longitude:	-78.438852	},
{latitude:	-0.298974	,longitude:	-78.446439	},
{latitude:	-0.298206	,longitude:	-78.453846	},
{latitude:	-0.297972	,longitude:	-78.446139	},
{latitude:	-0.296543	,longitude:	-78.45413	},
{latitude:	-0.29478	,longitude:	-78.455381	},
{latitude:	-0.292393	,longitude:	-78.448618	},
{latitude:	-0.29205	,longitude:	-78.451469	},
{latitude:	-0.290124	,longitude:	-78.454003	},
{latitude:	-0.288954	,longitude:	-78.442927	},
{latitude:	-0.28668	,longitude:	-78.453786	},
{latitude:	-0.284276	,longitude:	-78.45174	},
{latitude:	-0.329679	,longitude:	-78.418709	},
{latitude:	-0.328366	,longitude:	-78.418356	},
{latitude:	-0.325708	,longitude:	-78.407076	},
{latitude:	-0.325288	,longitude:	-78.41879	},
{latitude:	-0.325218	,longitude:	-78.419193	},
{latitude:	-0.309288	,longitude:	-78.412584	},
{latitude:	-0.308944	,longitude:	-78.41355	},
{latitude:	-0.307046	,longitude:	-78.419503	},
{latitude:	-0.30627	,longitude:	-78.416197	},
{latitude:	-0.305998	,longitude:	-78.437916	},
{latitude:	-0.304118	,longitude:	-78.423253	},
{latitude:	-0.302897	,longitude:	-78.438341	},
{latitude:	-0.30212	,longitude:	-78.449185	},
{latitude:	-0.300663	,longitude:	-78.445498	},
{latitude:	-0.298838	,longitude:	-78.443713	},
{latitude:	-0.298431	,longitude:	-78.451985	},
{latitude:	-0.298423	,longitude:	-78.456751	},
{latitude:	-0.298378	,longitude:	-78.4566	},
{latitude:	-0.296434	,longitude:	-78.453977	},
{latitude:	-0.296136	,longitude:	-78.440964	},
{latitude:	-0.296109	,longitude:	-78.439272	},
{latitude:	-0.29497	,longitude:	-78.445662	},
{latitude:	-0.294572	,longitude:	-78.457739	},
{latitude:	-0.293776	,longitude:	-78.455958	},
{latitude:	-0.29327	,longitude:	-78.458464	},
{latitude:	-0.292746	,longitude:	-78.44548	},
{latitude:	-0.291544	,longitude:	-78.4508	},
{latitude:	-0.2913	,longitude:	-78.45743	},
{latitude:	-0.291074	,longitude:	-78.454052	},
{latitude:	-0.291037	,longitude:	-78.450143	},
{latitude:	-0.28998	,longitude:	-78.451972	},
{latitude:	-0.289022	,longitude:	-78.443678	},
{latitude:	-0.288967	,longitude:	-78.45062	},
{latitude:	-0.2884	,longitude:	-78.441653	},
{latitude:	-0.288317	,longitude:	-78.443319	},
{latitude:	-0.287395	,longitude:	-78.456785	},
{latitude:	-0.287232	,longitude:	-78.439466	},
{latitude:	-0.28706	,longitude:	-78.447829	},
{latitude:	-0.286846	,longitude:	-78.452952	},
{latitude:	-0.286228	,longitude:	-78.451355	},
{latitude:	-0.282743	,longitude:	-78.444277	},
{latitude:	-0.304714	,longitude:	-78.416503	},
{latitude:	-0.285853	,longitude:	-78.437043	},
{latitude:	-0.308739	,longitude:	-78.413464	},
{latitude:	-0.297826	,longitude:	-78.455876	},
{latitude:	-0.28596	,longitude:	-78.440097	},
{latitude:	-0.305998	,longitude:	-78.437916	},
{latitude:	-0.299465	,longitude:	-78.455587	},
{latitude:	-0.294554	,longitude:	-78.451493	},
{latitude:	-0.290441	,longitude:	-78.44608	},
{latitude:	-0.28998	,longitude:	-78.451972	},
{latitude:	-0.288954	,longitude:	-78.442927	},
{latitude:	-0.283336	,longitude:	-78.451009	},
{latitude:	-0.311891	,longitude:	-78.408689	},
{latitude:	-0.310346	,longitude:	-78.410628	},
{latitude:	-0.308396	,longitude:	-78.415744	},
{latitude:	-0.307453	,longitude:	-78.413951	},
{latitude:	-0.30627	,longitude:	-78.416197	},
{latitude:	-0.304054	,longitude:	-78.42929	},

  ];


  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -0.304714	,
        longitude: -78.416503,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      {heatmapVisible && (
        <Heatmap
          points={heatmapData}
          gradient={heatmapGradient}
          radius={heatmapRadius}
          opacity={heatmapOpacity}
        />
      )}
    </MapView>
    <View style={styles.buttonContainer}>
      <Button title="Toggle Heatmap" onPress={toggleHeatmap} />
      <Button title="Change Gradient" onPress={changeGradient} />
      <Button title="Change Radius" onPress={changeRadius} />
      <Button title="Change Opacity" onPress={changeOpacity} />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
});