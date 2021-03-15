import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SubModulesList from './SubModulesList';
import TopicsStackNavegator from './TopicsStackNav';

const Stack = createStackNavigator();

function TopicsStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="SubModules" component={SubModulesList} />
            <Stack.Screen name="Topics" component={TopicsStackNavegator} />
        </Stack.Navigator>
    );
}

export default TopicsStack;
