import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsAddPage from './DetailsAddPage';
import ManageDetailsPage from './ManageDetailsPage';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
function DashBoard(){

    return(
        
 <Tab.Navigator >
               
                 <Tab.Screen 
                 
        name="ADD DETAILS FORM"
        component={DetailsAddPage}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: () => (
            <FontAwesome5 name='info-circle' size={24} color="black" />
          ),
        }} 
        />
                <Tab.Screen name="Settings" component={ManageDetailsPage} />
              </Tab.Navigator>
        
        
             
       
       
    )


}export default DashBoard 