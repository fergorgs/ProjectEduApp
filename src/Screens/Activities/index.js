import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ModulesScreen from './Modules';
import TopicsScreen from './Topics';

const Stack = createStackNavigator();

function ActivitiesStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Modules" component={ModulesScreen} />
            <Stack.Screen name="Topics" component={TopicsScreen} />
        </Stack.Navigator>
    );
}

export default ActivitiesStack;
