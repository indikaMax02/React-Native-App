import React, { useEffect,useState } from 'react';
import {SafeAreaView, View, FlatList, StyleSheet,ActivityIndicator,  StatusBar,Image} from "react-native"
import {BASE_URL} from "@env";

import {Text, Box, Heading, AspectRatio, Center, HStack, Stack, NativeBaseProvider } from "native-base";
  
  
  const Example = (props) => {





   useEffect(()=>{
            
           console.log("wada")
   },[])


    return <Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: `data:image/png;base64,${props.image}`,
        }}
      />
            </AspectRatio>
            <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {props.title}
              </Heading>
              <Text fontSize="xs" _light={{
              color: "violet.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                2022-10-11
              </Text>
            </Stack>
            <Text fontWeight="400">
                {props.desc}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  1 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>;
  };

  const Item = ({ title ,desc, image  }) => (
    <View style={styles.item}>
         <Example title={title} desc={desc} image={image}/>
    </View>
  );



function ManageDetailsPage(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);



  useEffect(()=>{
      getDetails();
  })


  const getDetails = async () => {
     fetch(`${BASE_URL}`+'/manage/getAllPost')
    .then(response=>response.json())
    .then((json)=>{
        
        setData(json)
        setLoading(false);
    })
 }




    const renderItem = ({ item }) => (
        <Item title={item.title} desc={item.desc} image={item.image} />
      );

   return (

    <NativeBaseProvider>
                <SafeAreaView >
                

            {isLoading ? <ActivityIndicator style={{
                marginTop : 300
                

            }}/> : ( 
                
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            )}


                </SafeAreaView>
    </NativeBaseProvider>

    

      
   )
}
export default ManageDetailsPage


const styles = StyleSheet.create({
   xx : {
       backgroundColor : 'blue',
       width : 100,
       height : 100

   },

    container: {
      flex: 1,
      alignItems : 'center'
    //   marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      margin : 20,
    
       
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
