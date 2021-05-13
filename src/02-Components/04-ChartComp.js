import React from 'react';
import { Text, View } from 'react-native';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import Expo, { constants } from 'expo'


async function register() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
        alert('Hey! You might want to enable notifications for my app, they are good.');
    }
}

const ChartComp = (props) => {
    return (
        <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>
            Water Intake
            </Text>

            <Chart
                style={{ height: 200, width: 400 }}
                data={[
                    { x: -2, y: 15 },
                    { x: -1, y: 10 },
                    { x: 0, y: 12 },
                    { x: 1, y: 7 },
                    { x: 2, y: 6 },
                    { x: 3, y: 8 },
                    { x: 4, y: 10 },
                    { x: 5, y: 8 },
                    { x: 6, y: 12 },
                    { x: 7, y: 14 },
                    { x: 8, y: 12 },
                    { x: 9, y: 13.5 },
                    { x: 10, y: 18 },
                ]}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: -2, max: 10 }}
                yDomain={{ min: 0, max: 20 }}
                >
                <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
                <HorizontalAxis tickCount={5} />
                <Area theme={{ gradient: { from: { color: '#a6efff' }, to: { color: '#a6efff', opacity: 0.4 } }}} />
                <Line theme={{ stroke: { color: '#0dd3ff', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
            </Chart>

        </View>
        </View>
    );
}

export default ChartComp;
