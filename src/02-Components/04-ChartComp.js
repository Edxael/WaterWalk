import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const ChartComp = (props) => {
    const { title, infoData } = props
    return (
        <View style={styles.mainCont}>
            <Text>
            {title}
            </Text>

            <Chart
                style={{ height: 200, width: 350 }}
                data={infoData.water}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: infoData.xmin, max: infoData.xmax }}
                yDomain={{ min: infoData.ymin, max: infoData.ymax }}
                >
                <VerticalAxis tickCount={10} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
                <HorizontalAxis tickCount={10} />
                <Area theme={{ gradient: { from: { color: infoData.areaColor }, to: { color: infoData.areaColor, opacity: 0.4 } }}} />
                <Line theme={{ stroke: { color: infoData.lineColor, width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
            </Chart>
        </View>
    );
}

const styles = StyleSheet.create({
    mainCont: {
        padding: 10,
        // justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChartComp;