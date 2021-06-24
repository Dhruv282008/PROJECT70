import React from 'react';
import { ReadStory } from '../Screens/ReadStory';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Image from 'react-native';
import WriteStory from '../Screens/WriteStory';

export const AppTabNavigator = createBottomTabNavigator({
    ReadStory: ({
        screen: ReadStory,
        navigationOptions: ({
            tabBarIcon: <Image source={require('../assets/read.png')} />,
            tabBarLabel: "Read Story"
        })
    }),
    WriteStory: ({
        screen: WriteStory,
        navigationOptions: ({
            tabBarIcon: <Image source={require('../assets/write.png')} />,
            tabBarLabel: "Write a Story"
        })
    })
})