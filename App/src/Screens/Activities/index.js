import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ModulesScreen from './Modules';
import TopicsScreen from './Topics';
import SlidesScreen from './Slides';

const Stack = createStackNavigator();

function ActivitiesStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Modules" component={ModulesScreen} />
            <Stack.Screen name="Topics" component={TopicsScreen} />
            <Stack.Screen name="Slides" component={SlidesScreen} />
        </Stack.Navigator>
    );
}

export default ActivitiesStack;
